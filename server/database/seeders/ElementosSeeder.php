<?php

namespace Database\Seeders;

use App\Models\elementos;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ElementosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        elementos::create(['elemento' => 'Portatil']);
        elementos::create(['elemento' => 'Mouse']);
        elementos::create(['elemento' => 'Teclado']);
        elementos::create(['elemento' => 'Adaptador']);
    }
}