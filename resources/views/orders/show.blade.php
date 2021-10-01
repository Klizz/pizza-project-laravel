<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>The Pizza Project</title>
</head>

<body>
    <div class="container" style="text-align: center; margin: 100px;">
        <h1 class="text-success">Your order has been created successfully!</h1>
        <div class="card" style="width: 50%; margin: 50px auto">
            <img src="https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title" style="font-size: 2.5em;">Order ID: <?php echo $order->id ?></h5>
                <p class="card-text" style="font-size: 1.4em; text-align: left;"><span class="text-success">Customer: </span><?php echo $order->customer ?> </p>
                <p class="card-text" style="font-size: 1.4em; text-align: left;"><span class="text-success">Total price: </span>$<?php echo $order->total_price ?></p>
                <a href="/" class="btn btn-light">Return to the homepage</a>
            </div>
        </div>
    </div>
</body>

</html>