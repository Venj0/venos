<?php

function checkAction($action, $args)
{
  $actionTypes = [];
  if(array_search($action, $actionTypes) <0){
      die();
  }
  switch ($action) {

    default:
      http_response_code(404);
      echo json_encode(["status" => false, "massage" => "flat api key !!!"]);
      die();
  }
}
