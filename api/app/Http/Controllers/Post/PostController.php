<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\Holiday;
use App\Models\User;
use App\Models\ProductAttributeValue;
use App\Models\ProductVarrientHistory;
use App\Models\Categorys;
use App\Models\ProductAttributes;
use App\Models\ProductCategory;
use App\Models\Product;
use App\Models\ProductAdditionalImg;
use App\Models\ProductVarrient;
use App\Models\AttributeValues;
use App\Models\NotificationMsg;
use App\Models\Post;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use Session;
use DB;

class PostController extends Controller
{
    protected $userid;
    protected $name;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        $user = User::find($id->id);
        $this->userid = $user->id;
        $this->name = $user->name;
    }

    public function update(Request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'status'           => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->input('name'))));
        $data = array(

            'description_full'           => !empty($request->description_full) ? $request->description_full : "",
            'status'                     => !empty($request->status) ? $request->status : "",
            'entry_by'                   => $this->userid
        );
        // dd($data);
        if (!empty($request->file('files'))) {
            $files = $request->file('files');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['thumnail_img'] = $file_url;
        }

        $data['id'] = $request->id;

        ///dd($data);
        //Post::create($data);
        $post = Post::find($request->id);
        $post->update($data);
        $resdata['product_id'] = $post->id;
        return response()->json($resdata);
    }

    public function userRequestPost(Request $request)
    {
        //dd($request->all());
        $validator = Validator::make($request->all(), [
            'description_full'     => 'required',
            //  'files.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Example mime types and max size
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $this->name)));
        $data = array(
            'name'                       => $this->name,
            'slug'                       => $slug,
            'description_full'           => !empty($request->description_full) ? $request->description_full : "",
            'status'                     => 0, //!empty($request->status) ? $request->status : "",
            'entry_by'                   => $this->userid
        );
        // dd($data);
        if (!empty($request->file('files'))) {
            $files = $request->file('files');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['thumnail_img'] = $file_url;
        }
        //Post::create($data);
        $resdata['post_id'] = Post::insertGetId($data);
        return response()->json($resdata);
    }

    public function notifidelete($id)
    {
        try {
            // Find the post by ID
            $post = NotificationMsg::findOrFail($id);
            // Delete the post
            $post->delete();

            // Return a success response
            return response()->json([
                'success' => true,
                'message' => 'Post deleted successfully!'
            ], 200);
        } catch (ModelNotFoundException $e) {
            // Return an error response if the post is not found
            return response()->json([
                'success' => false,
                'message' => 'Post not found!'
            ], 404);
        } catch (Exception $e) {
            // Return an error response if something goes wrong
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while deleting the post!'
            ], 500);
        }
    }



    public function buyerMessageSend(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name'             => 'required',
            'selectedBuyer'   => 'required',
            'buyerMessage'    => 'required',
        ]);

        if ($validator->fails()) {
            // Return validation errors with a 422 status code
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = array(
            'name'                       => $request->name,
            'buyer_id'                   => $request->selectedBuyer,
            'type'                       => 3,
            'messages'                   => !empty($request->buyerMessage) ? $request->buyerMessage : "",
            'status'                     => 1,
        );

        NotificationMsg::create($data);
        return response()->json(['message' => 'Notification saved successfully']);
    }


    public function sellerMessageSend(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name'             => 'required',
            'selectedSeller'   => 'required',
            'sellerMessage'    => 'required',
        ]);

        if ($validator->fails()) {
            // Return validation errors with a 422 status code
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = array(
            'name'                       => $request->name,
            'seller_id'                  => $request->selectedSeller,
            'type'                       => 2,
            'messages'                   => !empty($request->sellerMessage) ? $request->sellerMessage : "",
            'status'                     => 1,
        );

        NotificationMsg::create($data);
        return response()->json(['message' => 'Notification saved successfully']);
    }

    public function notificationsend(Request $request)
    {

        //dd($request->all());
        // Validate the incoming request
        $validator = Validator::make($request->all(), [
            'name'             => 'required',
            'selectedtype'     => 'required',
            'description_full' => 'required',
            'selectedStatus'   => 'required',
        ]);

        if ($validator->fails()) {
            // Return validation errors with a 422 status code
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = array(
            'name'                       => $request->name,
            'type'                       => $request->selectedtype,
            'messages'                   => !empty($request->description_full) ? $request->description_full : "",
            'status'                     => !empty($request->selectedStatus) ? $request->selectedStatus : "",
        );

        NotificationMsg::create($data);

        // Save notification logic here...

        return response()->json(['message' => 'Notification saved successfully']);
    }

    public function save(Request $request)
    {
        //dd($request->all());
        $validator = Validator::make($request->all(), [
            'name'           => 'required',
            'categoryId'     => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->input('name'))));
        $data = array(
            'name'                       => $request->name,
            'categoryId'                 => $request->categoryId,
            'slug'                       => $slug,
            'description_full'           => !empty($request->description_full) ? $request->description_full : "",
            'status'                     => 1, //!empty($request->status) ? $request->status : "",
            'entry_by'                   => $this->userid
        );
        // dd($data);
        if (!empty($request->file('files'))) {
            $files = $request->file('files');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['thumnail_img'] = $file_url;
        }
        //Post::create($data);
        $resdata['product_id'] = Post::insertGetId($data);
        return response()->json($resdata);
    }

    public function allPosts()
    {

        $query = Post::orderBy('id', 'desc')->where('status', 1)->select('posts.*')->get();
        $arryData = [];
        foreach ($query as $v) {
            $arryData[] = [
                'id'                         => $v->id,
                'postByname'                 => $v->name,
                'description_full'           => strip_tags($v->description_full),
                'thumnail_img'               => url($v->thumnail_img),
                'createdAt'               => date("Y-m-d", strtotime($v->created_at)),
            ];
        }

        return response()->json($arryData);
    }

    public function allNotification(Request $request)
    {

        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);

        // Get search query from the request
        $searchQuery       = $request->searchQuery;
        $selectedFilter    = $request->selectedFilter;
        // dd($selectedFilter);
        $query = NotificationMsg::orderBy('id', 'desc');

        if ($searchQuery !== null) {
            $query->where('notification.name', 'like', '%' . $searchQuery . '%');
        }

        if ($selectedFilter !== null) {
            $query->where('notification.status', $selectedFilter);
        }

        $paginator = $query->paginate($pageSize, ['*'], 'page', $page);
        $modifiedCollection = $paginator->getCollection()->map(function ($item) {

            $type = "";
            if ($item->type == 2) {
                $type = "Seller";
            }

            if ($item->type == 3) {
                $type = "Buyer";
            }

            return [
                'id'            => $item->id,
                'name'          => substr($item->name, 0, 250),
                'messages'      => $item->messages,
                'type'          => $type,
                'status'        => $item->status,
            ];
        });

        // Return the modified collection along with pagination metadata
        return response()->json([
            'data' => $modifiedCollection,
            'current_page' => $paginator->currentPage(),
            'total_pages' => $paginator->lastPage(),
            'total_records' => $paginator->total(),
        ], 200);
    }
    public function allPostList(Request $request)
    {

        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);

        // Get search query from the request
        $searchQuery    = $request->searchQuery;
        // dd($selectedFilter);
        $query = Post::orderBy('id', 'desc')
            ->select('posts.*');

        if ($searchQuery !== null) {
            $query->where('posts.name', 'like', '%' . $searchQuery . '%');
        }

        $paginator = $query->paginate($pageSize, ['*'], 'page', $page);
        $modifiedCollection = $paginator->getCollection()->map(function ($item) {
            return [
                'id'            => $item->id,
                'name'          => substr($item->name, 0, 250),
                'status'        => $item->status,
            ];
        });

        // Return the modified collection along with pagination metadata
        return response()->json([
            'data' => $modifiedCollection,
            'current_page' => $paginator->currentPage(),
            'total_pages' => $paginator->lastPage(),
            'total_records' => $paginator->total(),
        ], 200);
    }

    public function postrow($id)
    {
        $data = Post::where('posts.id', $id)->first();
        $entryby = User::where('id', $data->entry_by)->first();

        $responseData['data']                   = $data;
        $responseData['description_full']       = strip_tags($data->description_full);
        $responseData['entryBy']                = $entryby->name;
        $responseData['images']                 = !empty($data->thumnail_img) ? url($data->thumnail_img) : "";
        $responseData['createdAt']              = date("Y-m-d", strtotime($data->created_at));
        // dd($responseData);
        return response()->json($responseData);
    }

    public function postCategoryData(Request $request)
    {

        $id =  $request->id;
        $data = Post::where('posts.categoryId', $id)
            ->select('posts.*', 'post_category.name as category_name')
            ->join('post_category', 'posts.categoryId', '=', 'post_category.id')
            ->get();

        $arryData = [];
        foreach ($data as $v) {
            $arryData[] = [
                'id'                         => $v->id,
                'name'                       => $v->name,
                'question'                   => $v->question,
                'answer'                     => $v->answer,
                'description_full'           => strip_tags($v->description_full),
                'images'                     => url($v->thumnail_img),
            ];
        }
        $responseData['data']  = $arryData;
        return response()->json($responseData);
    }
}
