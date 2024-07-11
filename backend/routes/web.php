<?php

$router->register('getProducts', 'Product', 'getProducts');
$router->register('newProduct', 'Product', 'newProduct');
$router->register('updateProduct', 'Product', 'updateProduct');
$router->register('removeProduct', 'Product', 'removeProduct');

$router->register('getUsers', 'User', 'getUsers');
$router->register('updateUser', 'User', 'updateUser');
$router->register('newUser', 'User', 'newUser');
$router->register('updatepassword', 'User', 'updatepassword');
$router->register('removeUser', 'User', 'removeUser');

$router->register('getCart', 'Cart', 'getCart');
$router->register('getOrder', 'Cart', 'getOrder');
$router->register('getuserCarts', 'Cart', 'getuserCarts');
$router->register('getuserOrder', 'Cart', 'getuserOrder');
$router->register('getuserCart', 'Cart', 'getuserCart');
$router->register('updateCart', 'Cart', 'updateCart');
$router->register('updateOrder', 'Cart', 'updateOrder');
$router->register('newCart', 'Cart', 'newCart');
$router->register('newOrder', 'Cart', 'newOrder');
$router->register('payoff', 'Cart', 'payoff');
$router->register('removeCart', 'Cart', 'removeCart');

$router->register('getreviews', 'Review', 'getreviews');
$router->register('newreview', 'Review', 'newreview');
$router->register('removereview', 'Review', 'removereview');



$router->register('newContact', 'Contact', 'newContact');
$router->register('getContacts', 'Contact', 'getContacts');
$router->register('removeContact', 'Contact', 'removeContact');
?>