@extends('layout')
@section('title', 'Products')
@section('content')

<img scr="{{ $product->photo}}" width="500" height="300">
<div class="caption">
<h4>{{ $product->name }}</h4>
<p>{{ $product->description }}</p>
<p><strong>Price: </strong> {{ $product->price }}$</p>
<p class="btn-holder">
    <a href="{{ url('add-to-
cart/'.$product->id) }}" class="btn btn-warning btn-block text-center"
role="button">Add to cart</a> </p>
</div>
@endsection