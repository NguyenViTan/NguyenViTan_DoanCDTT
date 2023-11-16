<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /*lay danh sach */
    public function index(){
        $users = User::all();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'users'=>$users],200);
    }

    /*lay id -> chi tiet */
    public function show($id){
        $user = User::find($id);
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'users'=>$user],200);
    }

    /* them */
    public function store(Request $request){
        $user = new User();
        $user->name = $request->name; //form
        $user->email = $request->email; //form
        $user->username = $request->username; //form
        $user->phone = $request->phone; //form
       
        $user->password = $request->password; //form
        $user->address = $request->address; //form
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
        $user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'data' => $user],201); 
    }

    /*update*/
    public function update(Request $request,$id){
        $user = User::find($id);
        $user->name = $request->name; //form
        $user->email = $request->email; //form
        $user->phone = $request->phone; //form
        $user->username = $request->username; //form
        $user->password = $request->password; //form
        $user->address = $request->address; //form
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
        $user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
          return response()->json(['success' => true, 'message' => 'Thành công', 'data' => $user],200);
    }

    /* xoa */
    public function destroy($id)
    {
        $user = User::find($id);
        if($user==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Xóa không thành công', 'user' => null], 404
            );
        }
        $user->delete();
        return response()->json(
            ['success' => true, 'message' => 'Xóa thành công', 'id' => $user], 200
        );
    }
    public function Login(Request $request){
        $arg = [
            ['email','=',$request->email],
            ['password','=',$request->password],
            ['status','=',1]
        ];
        $user = User::where($arg) -> get();
        if(count($user) > 0){
            return response()->json(['success' => true,'message'=>'Đăng nhập thành công', 'data' => $user],200);
        }
        else{
            return response()->json(['success' => false,'message'=>'Đăng nhập thất bại', 'data' => null],404);
        }
    }

    public function AddUser(Request $request){
        $user = new User();
        $user->name = $request->name; 
        $user->email = $request->email; 
        $user->phone = $request->phone; 
        // $user->username = $request->username; 
        $user->password = $request->password; 
        // $user->address = $request->address; 
        $user->image = $request -> image;
        //  if ($files != null) {
        //      $extension = $files->getClientOriginalExtension();
        //      if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
        //          $filename = $user->name . '.' . $extension;
        //          $user->image = $filename;
        //          $files->move(public_path('images/user'), $filename);
        //      }
        //  }
        $user->roles = $request->roles;
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; 
        $user->save();
        return response()->json(['success' => true, 'message' => 'Đăng kí thành công', 'data' => $user],201); 
    }

}