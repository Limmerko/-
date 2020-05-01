@extends('layout')
@section('title', 'Cart')
@section('content')

<div class="caption">
<p>В корзине </p>
<p>{{ count($cart) }}</p>
<p> товара</p>

</div>

@endsection