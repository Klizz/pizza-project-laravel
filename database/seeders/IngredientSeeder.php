<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Ingredient;

class IngredientSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $ingredients = new Ingredient();
        $ingredients->name = "Pepperoni";
        $ingredients->price = 15;
        $ingredients->save();
        
        $ingredients1 = new Ingredient();
        $ingredients1->name = "Mushrooms";
        $ingredients1->price = 16;
        $ingredients1->save();

        $ingredients2 = new Ingredient();
        $ingredients2->name = "Olives";
        $ingredients2->price = 16;
        $ingredients2->save();

        $ingredients3 = new Ingredient();
        $ingredients3->name = "Bacon";
        $ingredients3->price = 18;
        $ingredients3->save();

        $ingredients4 = new Ingredient();
        $ingredients4->name = "Basil";
        $ingredients4->price = 18;
        $ingredients4->save();

        $ingredients5 = new Ingredient();
        $ingredients5->name = "Ham";
        $ingredients5->price = 17;
        $ingredients5->save();

        $ingredients6 = new Ingredient();
        $ingredients6->name = "Pineapple";
        $ingredients6->price = 16;
        $ingredients6->save();

        $ingredients7 = new Ingredient();
        $ingredients7->name = "Sausage";
        $ingredients7->price = 18;
        $ingredients7->save();

        $ingredients8 = new Ingredient();
        $ingredients8->name = "Onion";
        $ingredients8->price = 16;
        $ingredients8->save();

        $ingredients9 = new Ingredient();
        $ingredients9->name = "Extra Cheese";
        $ingredients9->price = 15;
        $ingredients9->save();
    }
}