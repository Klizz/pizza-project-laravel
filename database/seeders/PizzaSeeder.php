<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Pizza;

class PizzaSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $pizza = new Pizza();
        $pizza->doughtype = "Regular crust";
        $pizza->price = 100;
        $pizza->save();

        $pizza1 = new Pizza();
        $pizza1->doughtype = "Thin crust";
        $pizza1->price = 110;
        $pizza1->save();

        $pizza2 = new Pizza();
        $pizza2->doughtype = "Deep-dish";
        $pizza2->price = 150;
        $pizza2->save();
    }
}