<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    use HasFactory;
    // protected $table = 'pizza';
    protected $guarded = ['id']; 
    public function order(){
        return $this->hasOne(Order::class);
    }
}
