<?php
error_reporting(E_ALL);
ini_set("display_errors", "on");

header('Accept: application/json');
header('Content-Type: text/html');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

if (!array_key_exists("x-csrf-token", getallheaders())) {
  if ($_SESSION["RequestMethod"] == "OPTIONS") die();
  die();
}

include "./key.php";
if (!checkKey(getallheaders()["x-csrf-token"])) {
  die();
}

$json = file_get_contents('php://input');
$data = json_decode($json);

include "actions.php";
checkAction($data->action, $data->args);
