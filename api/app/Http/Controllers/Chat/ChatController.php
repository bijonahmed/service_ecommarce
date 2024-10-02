<?php

namespace App\Http\Controllers\Chat;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\MyMessage;
use App\Models\Gig;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Events\Message;

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


    public function getChatUsers()
    {
        //  dd($rdata);
        $data = MyMessage::select('messages.*', 'users.slug', 'users.image AS profile_picture', 'users.name AS usersname')
            ->leftJoin('users', 'users.id', '=', 'messages.to_id')
            ->where('messages.user_id', $this->userid)
            ->groupBy('messages.to_id')
            ->orderBy('created_at', 'desc')
            ->get();

        $chatusers = [];
        foreach ($data as $v) {
            $chatusers[] = [
                'id'             => $v->id,
                'user_id'        => $v->to_id,
                'user_name'      => $v->usersname,
                'slug'           => $v->slug,
                'profilePicture' => !empty($v->profile_picture) ? url($v->profile_picture) : "",
            ];
        }
        // Return messages as a JSON response
        return response()->json($chatusers);
    }

    public function sendChatRequest(Request $request)
    {
        //dd($request->all());
        $checkSellerSlug = User::where('slug', $request->sellerSlug)->first();
        $gigrow          = Gig::where('gig_slug', $request->gig_slug)->first();
        $gigName         = !empty($gigrow->name) ? $gigrow->name : "";
        $selectedPackages = $request->SelectedPackages;
        $SelectedPrice   = $request->SelectedPrice;

        $rdata['user_id']        = $this->userid;
        $rdata['to_id']          = $checkSellerSlug->id;
        $rdata['sender_id']      = $this->userid;
        $rdata['message']        = "Congratulations on your new gig: \"$gigName\"! 🎉. We wish you great success!"; //$request->message;
        $rdata['files']          = '';

        //  dd($rdata);
        $message = MyMessage::insertGetId($rdata);

        return response()->json($message);
    }

    public function sendMessages(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'senderId'        => 'required', // Set this to the ID of the logged-in buyer
            'recipientId'     => 'required', // The ID of the recipient (seller)
            'message'         => 'required|string|max:255', // Validate message content
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        $imagePath = null;
        if ($request->hasFile('files')) {
            $file = $request->file('files'); // Use the 'file' method for individual files
            $fileName = "/backend/files/" . time() . "." . $file->getClientOriginalExtension();
            // Move the uploaded file to the specified directory
            $file->move(public_path("backend/files"), $fileName);
            $imagePath = $fileName;
        }

        $rdata['user_id']        = $this->userid;
        $rdata['to_id']          = $request->recipientId;
        $rdata['sender_id']      = $this->userid;
        $rdata['message']        = $request->message;
        $rdata['files']          = $imagePath;
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
            ->get();

        // Prepare the response data
        $data = [];
        foreach ($messages as $message) {
            $user = User::find($message->sender_id); // Fetch sender's details
            $data[] = [
                'id'          => $message->id,
                'user_id'     => $message->sender_id,
                'name'        => $user ? $user->name : "Unknown",
                'message'     => $message->message,
                'sender_id'   => $this->userid, //$message->sender_id,
                'files'             => !empty($message->files) ? url($message->files) : "",
                'created_at'        => $message->created_at->format('Y-m-d H:i:s'),
                'sender_profile_picture'      => !empty($user->image) ? url($user->image) : "", //"http://www.21technology.com.bd/public/uploads/all/Ho1Gfsb4Pfq34QVrx0anM7xiMvn4KhP8NuzvOqF5.webp",
                'recipient_profile_picture'   => "http://www.21technology.com.bd/public/uploads/all/VoeSyzbwkN1C24clMws73UwPK9SdlptgbDx1MTsJ.jpg",
                'sender_name' => $user ? $user->name : "Unknown"
            ];
        }

        // Return messages as a JSON response
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
