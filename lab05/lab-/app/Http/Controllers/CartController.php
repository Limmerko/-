<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
    public function cart($id){
    	$cart = session('cart');
    	$cart[] = $id;
    	session(['cart' => $cart]);
    	return view('cart', ['cart' => $cart]);
    }
}
