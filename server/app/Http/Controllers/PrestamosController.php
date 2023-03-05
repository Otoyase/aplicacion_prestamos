<?php

namespace App\Http\Controllers;

use App\Models\prestamos;
use Illuminate\Http\Request;

class PrestamosController extends Controller
{

    /**
     * Esta funcion se encarga de crear un nuevo registro en la tabla de prestamos en la base de datos.
     */

     public function guardarPrestamo(Request $request) {


        try {
            prestamos::create([

                "elemento_prestado_id" => $request->elemento_prestado_id,
                "prestatario" => $request->prestatario,
                "fecha_prestamo" => $request->fecha_prestamo,
                "fecha_devolucion" => $request->fecha_devolucion,
    
            ]);
           
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Ha ocurrido un error:' . $th]);
        }

        

     }

    /**
     * Esta funcion se encarga de listar todos los perstamos y los retorna para ser mostrados en la interfaz
     */

     public function listarPrestamos(Request $request){

        
        $prestamos = prestamos::all();

        return $prestamos;
        

     }

}