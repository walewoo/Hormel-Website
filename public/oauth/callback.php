<?php
require 'config.php';
$code = $_GET['code'] ?? '';
if (!$code)
    die("No code");

// Exchange code for token
$ch = curl_init('https://github.com/login/oauth/access_token');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, [
    'client_id' => CLIENT_ID,
    'client_secret' => CLIENT_SECRET,
    'code' => $code
]);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept: application/json']);
$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
$token = $data['access_token'] ?? '';
$error = $data['error_description'] ?? $data['error'] ?? '';

// Return to CMS via postMessage
$content = $token ? 'success' : 'error';
$msg = $token ? 'authorization:github:success:' . json_encode(['token' => $token, 'provider' => 'github']) : 'authorization:github:error:' . $error;

echo "<script>
  const receiveMessage = (message) => {
    window.opener.postMessage(message, '*');
    window.close();
  };
  receiveMessage('$msg');
</script>";
?>