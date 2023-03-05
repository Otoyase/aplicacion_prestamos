<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class prestamos extends Model
{
    use HasFactory;
    protected $table = 'prestamos';
    protected $primarykey = 'id';
    protected $fillable = ['elemento_prestado_id', 'prestatario', 'fecha_prestamo', 'fecha_devolucion'];
}