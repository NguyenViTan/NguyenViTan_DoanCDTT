<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BannerController extends Controller
{
    /*lay danh sach */
    public function index(){
        $banners = Banner::all();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'banners'=>$banners],200);
    }

    /*lay id -> chi tiet */
    public function show($id){
        $banner = Banner::find($id);
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'banners'=>$banners],200);
    }

    /* them */
    public function store(Request $request){
        $banner = new banner();
        $banner->name = $request->name; //form
        $banner->email = $request->link; //form
        $banner->phone = $request->position; //form
        $banner->bannername = $request->description; //form
        $banner->password = $request->password; //form
        $banner->address = $request->address; //form
        // $user->image = $request->name;
         //upload hình ảnh
         $files=$request->image;
         if ($files != null) {
             $extension = $files->getClientOriginalExtension();
             if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                 $filename = $user->name . '.' . $extension;
                 $user->image = $filename;
                 $files->move(public_path('images/user'), $filename);
             }
         }
         //
        $user->roles = $request->roles;
        $user->created_at = date('Y-m-d H:i:s');
        //$user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'data' => $user],201); 
    }

    /*update*/
    public function update(Request $request,$id){
        $banner = Banner::find($id);
        $banner->name = $request->name; //form
        $banner->email = $request->email; //form
        $banner->phone = $request->phone; //form
        $banner->bannername = $request->bannername; //form
        $banner->password = $request->password; //form
        $banner->address = $request->address; //form
        // $banner->image = $request->name;
        //upload hình ảnh
        $files=$request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $banner->name . '.' . $extension;
                $banner->image = $filename;
                $files->move(public_path('images/banner'), $filename);
            }
        }
        //
        $banner->roles = $request->roles;
        $banner->created_at = date('Y-m-d H:i:s'); 
        //$banner->status = $request->status; //form
        $banner->save(); //Luuu vao CSDL
          return response()->json(['success' => true, 'message' => 'Thành công', 'data' => $banner],200);
    }

    /* xoa */
    public function destroy($id)
    {
        $banner = Banner::find($id);
        if($banner==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Xóa không thành công', 'banner' => null], 404
            );
        }
        $banner->delete();
        return response()->json(
            ['success' => true, 'message' => 'Xóa thành công', 'id' => $banner], 200
        );
    }
}