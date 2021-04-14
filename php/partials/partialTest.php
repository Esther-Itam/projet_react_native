<?php

$pdo = new PDO(
    'mysql:host=localhost;dbname=data_base;charset=utf8',
    'root',
    '',
      [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
  );

$allTest = $pdo->query('SELECT username FROM test');

$test = $allTest->fetchAll();

print_r($test);


?>