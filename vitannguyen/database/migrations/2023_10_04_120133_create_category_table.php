<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('nvt_category', function (Blueprint $table) {
            $table->id(); //id
            $table->string('name', 1000);
            $table->string('slug', 1000);
            $table->string('image', 1000)->nullable();
            $table->unsignedInteger('parent_id')->default(0);
            $table->unsignedInteger('sort_order')->default(0);
            $table->string('metakey');
            $table->string('metadesc');
            $table->timestamps(); //created_at, updated_at
            $table->unsignedInteger('created_by')->default(1);
            $table->unsignedInteger('updated_by')->nullable();
            $table->unsignedTinyInteger('status')->default(2);
        });
    }


    
    public function down()
    {
        Schema::dropIfExists('nvt_category');
    }
};