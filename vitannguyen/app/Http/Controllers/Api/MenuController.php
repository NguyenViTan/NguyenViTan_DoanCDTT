<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;

class MenuController extends Controller
{
    /*lay danh sach*/
    public function index()
    {
        $menus = Menu::all();
        return response()->json(['success' => true, 'message' => "Tải dữ liệu thành công", 'menus' => $menus], 200);
    }

    /*lay bang id -> chi tiet */
    public function show($id)
    {
        $menu = Menu::find($id);
        return response()->json(['success' => true, 'message' => "Tải dữ liệu thành công", 'menus' => $menu], 200);
    }

    /* them */
    public function store(Request $request)
    {
        $menu = new Menu();
        $menu->name = $request->name; //form
        $menu->link = $request->link; //form
        $menu->table_id = $request->table_id; //form
        $menu->type = $request->type; //form
        $menu->created_at = date('Y-m-d H:i:s');
        $menu->created_by = $request->created_by;
        $menu->status = $request->status; //form
        $menu->position = $request->position; //form
        $menu->parent_id = $request->parent_id; //form
        $menu->sort_order=$request->sort_order;
        $menu->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'menu' => $menu], 201);
    }

    /*update*/
    public function update(Request $request, $id)
    {
        $menu = Menu::find($id);
        $menu->name = $request->name; //form
        $menu->link = $request->link; //form
        $menu->position = $request->position; //form
        $menu->parent_id = $request->parent_id; //form
        $menu->sort_order=$request->sort_order;
        $menu->table_id = $request->table_id; //form
        $menu->type = $request->type; //form
        $menu->created_at = date('Y-m-d H:i:s');
        $menu->created_by = 1;
        $menu->status = $request->status; //form
        $menu->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'menus' => $menu], 200);
    }

    /* xoa */
    public function destroy($id){
        $menu = Menu::find($id);
       if($menu==null){
        return response()->json( ['message'=>'Xoa  khong thanh cong ','success'=>false,'menu'=>null],
            404
        );
       }

    
    $menu->delete();
    return response()->json(['message'=>'Xoa thanh cong ','success'=>true,'id'=>$menu],
        
    );
}
    /*Lay du lieu len trang frontend */

    public function menu_list($position, $parent_id = 0)
    {
        $args = [
            ['position', '=', $position],
            ['parent_id', '=', $parent_id],
            ['status', '=', 1]
        ];
        $menus = Menu::where($args)->orderBy('sort_order', 'ASC')->get();
        if(count($menus)){
            return response()->json(
                [
                    'success'=>true,
                    'message'=>'Tai du lieu thanh cong',
                    'menus'=>$menus
                ],
                200
            );
        }else{
        return response()->json(
            [
                'success'=>false,
                'message'=>'khong co du lieu',
                'menus'=>null
            ],
            200
        );
    }
       
    }
}