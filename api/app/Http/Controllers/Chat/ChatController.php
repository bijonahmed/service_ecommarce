<?php

namespace App\Http\Controllers\Chat;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\MyMessage;
use App\Models\Product;
use Illuminate\Http\Request;

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

    public function sellerSendMessages(Request $request)
    {
        $data = $request->validate([
            'message' => 'required',
            'community_slug' => 'required',
        ]);
        $rdata['user_id']        = $this->userid;
        $rdata['community_slug'] = $request->community_slug;
        $rdata['message']        = $request->message;
        $rdata['to_id']          = $request->userId;
        $rdata['sender_id']      = $this->userid;
        $rdata['username']       = $this->email;
        $message = MyMessage::insertGetId($rdata);

        return response()->json($message);
    }

    public function customerSendMessages(Request $request)
    {
        $data = $request->validate([
            'message' => 'required',

        ]);
        //event(new Message($this->email, $data['message'], $data['community_slug']));
        //event(new Message('b@gmail.com', $data['message'])); // Example message number
        //event(new Message($request->input('username'), $request->input('message')));
        //return [];
        $rdata['user_id']        = $this->userid;
        $rdata['community_slug'] = $request->community_slug;
        $rdata['message']        = $request->message;
        $rdata['to_id']          = $request->userId;
        $rdata['sender_id']      = $this->userid;
        $rdata['username']       = $this->email; ///$request->username;
        $message = MyMessage::insertGetId($rdata);

        return response()->json($message);
    }

    public function getMessages($community_slug)
    {
        $product_row = Product::where('slug', $community_slug)->first();
        $messages    =  MyMessage::where('sender_id', $product_row->seller_id)->orWhere('user_id', $this->userid)->get(); //MyMessage::where('seller_id', $product_row->seller_id)->get();

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
                'created_at'        => date("Y-m-d H:i:s", strtotime($v->created_at)),
                'updated_at'        => $v->updated_at,
            ];
        }
        return response()->json($data, 200);
    }



    public function getSellerMessages($buyerId)
    {

        $messages    = MyMessage::where(function($query) use ($buyerId) {
                            $query->where('sender_id', $this->userid)
                                ->where('to_id', $buyerId);
                        })
                        ->orWhere(function($query) use ($buyerId) {
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
