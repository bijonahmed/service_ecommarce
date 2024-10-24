<?php

namespace App\Http\Controllers\Chat;

use DB;
use App\Models\Gig;
use App\Models\User;
use App\Models\Order;
use App\Events\Message;
use App\Models\Country;
use App\Models\Product;
use App\Models\MyMessage;
use App\Models\Profession;
use Illuminate\Support\Str;
use App\Models\SellerReview;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class ChatController extends Controller
{

    protected $userid;
    protected $email;
    protected $role_id;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        if (!empty($id)) {
            $user = User::find($id->id);
            $this->userid = $user->id;
            $this->email = $user->email;
            $this->role_id = $user->role_id;
        }
    }



    public function getChatUsersTo()
    {


        // $data = MyMessage::select('messages.*', 'users.slug', 'users.image AS profile_picture', 'users.name AS usersname')
        // ->leftJoin('users', 'users.id', '=', 'messages.to_id')
        // ->where('messages.to_id', $this->userid)
        // ->groupBy('messages.sender_id')
        // ->orderBy('created_at', 'desc')
        // ->get();    


        $data = MyMessage::where('messages.to_id', $this->userid)
            ->groupBy('messages.sender_id')
            ->orderBy('created_at', 'desc')
            ->get();
        //  dd($data);

        $chatusers = [];
        foreach ($data as $v) {
            $userrecords = User::where('id', $v->user_id)->first();
            $rowcont     =  MyMessage::where('sender_id', $v->sender_id)->where('is_read', 0)->count();
            $chatusers[] = [
                'id'             => $v->id,
                'user_id'        => !empty($userrecords->id) ? $userrecords->id : "",
                'user_name'      => !empty($userrecords->name) ? $userrecords->name : "",
                'slug'           => $v->slug,
                'profilePicture' => !empty($userrecords->image) ? url($userrecords->image) : "",
                'unread_count'   => $rowcont, // This will reflect the count of unread messages
            ];
        }
        // Return messages as a JSON response
        return response()->json($chatusers);
    }

    public function getChatUsers()
    {
        //  dd($rdata);
        $data = MyMessage::select(
            'messages.to_id AS user_id', // Using to_id to represent the recipient
            'users.slug',
            'users.image AS profile_picture',
            'users.name AS usersname',
            'users.country_1',
            'users.profession_name',
            'users.created_at as joindate'
        )
            ->leftJoin('users', 'users.id', '=', 'messages.to_id')
            ->where('messages.user_id', $this->userid)
            ->groupBy('messages.to_id', 'users.slug', 'users.image', 'users.name') // Group by the fields being selected
            ->orderBy('user_id', 'desc') // Optionally order by unread count
            ->get();

        //  dd($data); // Uncomment this for debugging to check results

        $chatusers = [];
        foreach ($data as $v) {
            $rowcont            = MyMessage::where('user_id', $v->user_id)->where('is_read', 0)->count();
            $chkCountry         = Country::where('id', $v->country_1)->first();
            $chkProfession      = Profession::where('id', $v->profession_name)->first();
            $ujoin              = User::where('id', $v->user_id)->select('created_at')->first();

            $sellerOrder        = Order::where('sellerId', $v->user_id)->where('order_status', 5)->count('order_status'); //Count Seller Complete Orders
            $lastOrderDate      = Order::where('sellerId', $v->user_id)->where('order_status', 5)->orderBy('id', 'desc')->first(); //Count Seller Complete Orders

            $lorder             = !empty($lastOrderDate) ? date("Y-m-d", strtotime($lastOrderDate->created_at)) : "No Order";

            $sellerReview       = SellerReview::where('seller_id', $v->user_id)->sum('rating');
            $orderSum           = Order::where('sellerId', $v->user_id)->where('order_status', 5)->sum('order_status');
            $avgReview          = !empty($sellerReview) ? $sellerReview / $orderSum : $orderSum;


            $chatusers[] = [
                'id'             => $v->user_id, // Ensure this matches your user ID field
                'user_id'        => $v->user_id,
                'user_name'      => $v->usersname,
                'country'        => !empty($chkCountry) ? $chkCountry->countryname : "",
                'professionName' => !empty($chkProfession) ? $chkProfession->name : "",
                'slug'           => $v->slug,
                'profilePicture' => !empty($v->profile_picture) ? url($v->profile_picture) : "",
                'sellerOrder'    => $sellerOrder,
                'join_date'      => date("Y-m-d", strtotime($ujoin->created_at)),
                'lastOrderDate'  => !empty($lorder) ? $lorder : "No Order",
                'sellerReview'   => $avgReview,
                'unread_count'   => $rowcont, // This will reflect the count of unread messages
            ];
        }
        // Return messages as a JSON response
        return response()->json($chatusers);
    }

    public function sendChatRequest(Request $request)
    {
        //dd($request->all());
        $checkSellerSlug = User::where('slug', $request->sellerSlug)->first();
        $gigrow          = Gig::where('gig_slug', $request->gigSlug)->first();
        $gigName         = !empty($gigrow->name) ? $gigrow->name : "";
        $gigImg          = !empty($gigrow->thumbnail_images) ? url($gigrow->thumbnail_images) : "";

        //echo $gigName; 
        $selectedPackages = $request->SelectedPackages;
        $SelectedPrice   = $request->SelectedPrice;
        $message = "Thank you, and I look forward to your response.: 
                    This message relates to: \"$gigName\"! We wish you great success!";

        $rdata['user_id']        = $this->userid;
        $rdata['to_id']          = $checkSellerSlug->id;
        $rdata['sender_id']      = $this->userid;
        $rdata['message']        = $message;
        $rdata['files']          = $gigImg;

        $message = MyMessage::insertGetId($rdata);

        return response()->json($message);
    }

    public function sendMessages(Request $request)
    {


        //dd($request->all());
        $validator = Validator::make($request->all(), [
            'senderId'        => 'required', // Set this to the ID of the logged-in buyer
            'recipientId'     => 'required', // The ID of the recipient (seller)
            // 'message'         => 'required', // Validate message content
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        $imagePaths = "";
        if (!empty($request->file('files'))) {
            $files = $request->file('files');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $imagePaths = $file_url;
        }




        $rdata['user_id']        = $this->userid;
        $rdata['to_id']          = $request->recipientId;
        $rdata['sender_id']      = $this->userid;
        $rdata['message']        = $request->message;
        $rdata['files']          = $imagePaths;

        $message = MyMessage::insertGetId($rdata);

        return response()->json($message);
    }

    public function getMessages(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'sender_id' => 'required|integer',
            'to_id' => 'required|integer',
        ]);

        // Get IDs from the request
        $buyerId = (int) $request->input('sender_id'); // ID of the logged-in buyer
        $recipientId = (int) $request->input('to_id'); // ID of the recipient

        // Fetch messages between the authenticated user and the recipient
        $messages = MyMessage::where(function ($query) use ($buyerId, $recipientId) {
            $query->where('sender_id', $buyerId)
                ->where('to_id', $recipientId);
        })
            ->orWhere(function ($query) use ($buyerId, $recipientId) {
                $query->where('sender_id', $recipientId)
                    ->where('to_id', $buyerId);
            })
            // Adjust this to 'orderBy('id', 'desc')' for descending order
            ->get();

        // Prepare the response data
        $data = [];

        foreach ($messages as $message) {
            $sender = User::find($message->sender_id);
            $recipient = User::find($message->to_id);
            $data[] = [
                'id'          => $message->id,
                'user_id'     => $message->sender_id, // Sender ID
                'message'     => $message->message, // Message content
                'files'       => !empty($message->files) ? url($message->files) : "", // File attachment (if any)
                'created_at'  => $message->created_at->format('Y-m-d H:i:s'), // Message timestamp

                // Sender details
                'sender_id'               => $message->sender_id,
                'sender_name'             => $sender ? $sender->name : "Unknown",
                'sender_profile_picture'  => !empty($sender->image) ? url($sender->image) : "",

                // Recipient details
                'recipient_id'            => $message->to_id,
                'recipient_name'          => $recipient ? $recipient->name : "Unknown",
                'recipient_profile_picture' => !empty($recipient->image) ? url($recipient->image) : "",
            ];
        }
        // Return messages as a JSON response
        return response()->json($data);
    }


    public function userrowCheck(Request $request)
    {
        //dd($request->all());
        $userId   = $request->sellerId;
        $row = MyMessage::select('messages.*', 'users.slug', 'users.id as user_id', 'users.image AS profile_picture', 'users.name AS usersname', 'users.country_1', 'users.profession_name', 'users.created_at')
            ->leftJoin('users', 'users.id', '=', 'messages.to_id')
            ->where('messages.to_id', $userId)
            ->orderBy('messages.created_at', 'desc')
            ->first();
        $udata['is_read'] = 1;
        MyMessage::where('user_id', $userId)->update($udata);

        $sellerOrder        = Order::where('sellerId', $row->user_id)->where('order_status', 5)->count('order_status'); //Count Seller Complete Orders
        $lastOrderDate      = Order::where('sellerId', $row->user_id)->where('order_status', 5)->orderBy('id', 'desc')->first(); //Count Seller Complete Orders
        $lorder             = !empty($lastOrderDate) ? date("Y-m-d", strtotime($lastOrderDate->created_at)) : "No Order";
        $ujoin              = User::where('id', $row->user_id)->select('created_at')->first();

        $sellerReview       = SellerReview::where('seller_id', $row->user_id)->sum('rating');
        $orderSum           = Order::where('sellerId', $row->user_id)->where('order_status', 5)->sum('order_status');
        $avgReview          = !empty($sellerReview) ? $sellerReview / $orderSum : $orderSum;

        $chkCountry         = Country::where('id', $row->country_1)->first();
        $chkProfession      = Profession::where('id', $row->profession_name)->first();
        $currentDateTime    = now();
        $formattedDateTime  = $currentDateTime->format('M j, Y, g:i A');
        $data = [ // Use '=' to assign the array
            'id'             => $row->sender_id,  //selected user
            'user_id'        => $row->user_id,
            'user_name'      => $row->usersname,
            'slug'           => $row->slug,
            'sellerOrder'    => $sellerOrder,
            'join_date'      => date("Y-m-d", strtotime($ujoin->created_at)),
            'lastOrderDate'  => !empty($lorder) ? $lorder : "No Order",
            'country'        => !empty($chkCountry) ? $chkCountry->countryname : "",
            'professionName' => !empty($chkProfession) ? $chkProfession->name : "",
            'profilePicture' => !empty($row->profile_picture) ? url($row->profile_picture) : "",
            'lastSeen'       => $formattedDateTime,
            'join_date'      => date("Y-m-d", strtotime($row->created_at)),
            'sellerReview'   => $avgReview,
        ];
        return response()->json($data);
    }

    public function getMessages_t($buyerId)
    {

        $messages    = MyMessage::where(function ($query) use ($buyerId) {
            $query->where('sender_id', $this->userid)
                ->where('to_id', $buyerId);
        })
            ->orWhere(function ($query) use ($buyerId) {
                $query->where('sender_id', $buyerId)
                    ->where('to_id', $this->userid);
            })
            ->get();

        $data = [];
        foreach ($messages as $v) {
            $check = User::where('email', $v->username)->select('name')->first();
            $data[] = [
                'id'                => $v->id,
                'user_id'           => $v->user_id,
                'username'          => $v->username,
                'name'              => !empty($check) ? $check->name : "",
                'community_slug'    => $v->community_slug,
                'message'           => $v->message,
                'files'             => !empty($v->files) ? url($v->files) : "",
                'created_at'        => date("Y-m-d H:i:s", strtotime($v->created_at)),
                'updated_at'        => $v->updated_at,
            ];
        }
        return response()->json($data, 200);
    }

    public function getBuyerList()
    {
        $messages    = User::where('role_id', 2)->where('status', 1)->get();
        $data = [];
        foreach ($messages as $v) {
            $data[] = [
                'id'                => $v->id,
                'user_id'           => $v->id,
                'email'             => $v->email,
                'name'              => $v->name,
                'invite_code'       => $v->invite_code,
                'username'          => !empty($v->email) ? $v->email : "",
                'created_at'        => date("Y-m-d H:i:s", strtotime($v->created_at)),

            ];
        }
        return response()->json($data, 200);
    }

    public function getSellerList()
    {
        $messages    = User::where('role_id', 3)->where('status', 1)->get();
        $data = [];
        foreach ($messages as $v) {
            $data[] = [
                'id'                => $v->id,
                'user_id'           => $v->id,
                'email'             => $v->email,
                'name'              => $v->name,
                'invite_code'       => $v->invite_code,
                'username'          => !empty($v->email) ? $v->email : "",
                'created_at'        => date("Y-m-d H:i:s", strtotime($v->created_at)),

            ];
        }
        return response()->json($data, 200);
    }
}
