<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\BlogModel;
use Illuminate\Support\Str;
use App\Models\blogCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Salary;
use Illuminate\Auth\Events\Validated;
use Illuminate\Support\Facades\Validator;

class blogController extends Controller
{
    protected $userid;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        if (!empty($id)) {
            $user = User::find($id->id);
            $this->userid = $user->id;
        }
    }
    public function newblogcat(request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'user_id' => 'required|exists:users,id'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = $validator->validated();
        $slug = Str::slug($data['name']);
        $insert = BlogCategory::create([
            'name' => $data['name'],
            'slug' => $slug,
            'status' => 1,
            'description' => $data['description'],
            'user_id' => $data['user_id']
        ]);
        return response()->json(['message' => 'Resource created successfully'], 201);
    }
    public function blogcatlist()
    {
        $data = blogCategory::where('status', 1)->get();
        // dd($data);
        return response([
            'data' => $data,
        ]);
    }    public function adminblogcatlist()
    {
        $data = blogCategory::all();
        // dd($data);
        return response([
            'data' => $data,
        ]);
    }
    public function blogCatdetails(request $request, $slug)
    {
        $data = blogCategory::where('slug', $slug)->first();
        // dd($data);
        return response()->json([
            'data' => $data,
        ]);
    }
    public function updateBlogCat(request $request)
    {

        // dd($request->status);
        // return false;
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'user_id' => 'required|exists:users,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = $validator->validated();
        $catData = BlogCategory::where('slug', $request->slug)->first();

        $catData->update([
            'name' => $data['name'],
            'description' => $data['description'],
            'user_id' => $data['user_id'],
            'status' => $request->status,
        ]);
        return response()->json(['message' => 'Update successfully'], 201);
    }


    public function addblog(request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'category' => 'required',
            'content' => 'required',
            'image' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $imagePath = null;
        if ($request->hasFile('image')) {
            $image = $request->image;
            $imageName = "/backend/files/" . time() . "." . $image->getClientOriginalExtension();
            $image->move(public_path("backend/files"), $imageName);
            $imagePath = $imageName;
        }

        $slug = Str::slug($request->input('title'));


        $post = new BlogModel([
            'title' => $request->input('title'),
            'slug' => $slug,
            'category' => $request->input('category'),
            'content' => $request->input('content'),
            'image' => $imagePath,
            'user_id' => $this->userid,
        ]);

        $post->save();


        return response()->json(['message' => 'Update successfully'], 201);
    }
    public function bloglist(Request $request)
    {
        $page = $request->query('page', 1);
        $posts = BlogModel::orderBy('created_at', 'desc')->paginate(10);

        return response()->json($posts);
    }
    public function blogDetails(request $request, $slug){
        // dd($slug);
        $details = BlogModel::where('slug', $slug)->first();
        $details['image'] = url($details->image);
        // dd($details);
        return response()->json($details);
    }

    public function updateBlog(Request $request)
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'title' => 'required',
            'category' => 'required',
            'content' => 'required',
            'status' => 'required',
        ]);
    
        // Check if validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
    
        // Find the blog post by id
        $post = BlogModel::find($request->id);
    
        // Check if post exists
        if (!$post) {
            return response()->json(['message' => 'Blog post not found'], 404);
        }
    
        // Update post details
        $post->title = $request->input('title');
        $post->category = $request->input('category');
        $post->content = $request->input('content');
        $post->status = $request->input('status');
    
        // Handle image upload if a new image is provided
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = "/backend/files/" . time() . "." . $image->getClientOriginalExtension();
            $image->move(public_path("backend/files"), $imageName);
            $post->image = $imageName;
        }
    
        // Save the updated post
        if ($post->save()) {
            return response()->json(['message' => 'Update successfully'], 200);
        } else {
            return response()->json(['message' => 'Update failed'], 500);
        }
    }
    
    public function addSalary(request $request){
        $validator = Validator::make($request->all(), [
            'team' => 'required',
            'amount' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $save = Salary::create([
            'team'      => $request->team,
            'amount'    => $request->amount,
            'status'    => 1,
        ]);
        return response()->json(['message' => 'Salary saved successfully', 'data' => $save], 201);

    }
    public function salarylist(){
        $data = Salary::where('status',1)->get();
        return response()->json($data);
    }
    public function salarydata(Request $request, $id){
        $data = Salary::where('id', $id)->first();   
        // dd($data);
        return response()->json($data);

    }
    public function updates(Request $request){
        $validator = Validator::make($request->all(), [
            'team' => 'required',
            'amount' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = Salary::find($request->id);

        $data->update([
            'team'      => $request->team,
            'amount'    => $request->amount,
            'status'    => 1,
        ]);
        return response()->json(['message' => 'Salary saved successfully', 'data'  ], 201);
    }
}