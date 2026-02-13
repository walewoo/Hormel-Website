<?php
require 'config.php';
$provider = $_GET['provider'] ?? 'github';
// Callback URL must be registered in GitHub App
$redirect_uri = 'https://hormelng.com/oauth/callback.php';
$scope = 'repo,user';
$url = "https://github.com/login/oauth/authorize?client_id=" . CLIENT_ID . "&scope=" . $scope . "&redirect_uri=" . urlencode($redirect_uri);
header("Location: $url");
exit;
?>