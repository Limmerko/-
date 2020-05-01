@extends('layout')
@section('title', 'Products')
@section('content')

<div class="container products">
<div class="row">
@foreach($products as $product)
<div class="col-xs-18 col-sm-6 col-md-3">
<div class="thumbnail">
<img src="{{ $product->photo }}" width="500" height="300">
<div class="caption">
<h4>{{ $product->name }}</h4>
<p>{{ \Illuminate\Support\Str::limit(strtolower($product->description), 50) }}</p>
<p><strong>Price: </strong> {{ $product->price }}$</p>
<p class="btn-holder"><a href="{{ url('cart/'.$product->id) }}" class="btn btn-warning btn-block text-center"
role="button">Add to cart</a> 
<a href="{{ url('delete/'.$product->id) }}" class="btn btn-warning btn-block text-center"
role="button">Delete</a>
<a href="{{ url('read/'.$product->id) }}" class="btn btn-warning btn-block text-center"
role="button">Read</a></p>
</div>
</div>
</div>
@endforeach
</div>
</div>

@endsection