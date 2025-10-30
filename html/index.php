<?php

use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

$app->addRoutingMiddleware();

$errorMiddleware = $app->addErrorMiddleware(true, true, true);

$dir = __DIR__ .  '/../app/route/route.php';
if (file_exists($dir)) {
    echo "O arquivo de rotas foi encontrado.";
} else {  
    echo "O arquivo de rotas não foi encontrado.";
    
}
var_dump($dir);
die;

$app->get('/hello/{name}', function ($request, $response, $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");
    return $response;
});


$app->run();