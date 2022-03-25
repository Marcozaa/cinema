<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$host = "87.250.73.22";
$database   = "Pinto_DiCastri_Zanchin_cinema";
$username   = "exAdminer";
$password     = "CBC349bb";
$port = 3306;
// Create connection
$conn = new mysqli($host, $username, $password, $database, $port);
$email = $_GET["emailInserita"]; // Parametri richiesta get
$password = $_GET["passwordInserita"]; // // Parametri richiesta get


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$trp = mysqli_query($conn, "SELECT * from Cliente");
$rows = array();

while ($r = mysqli_fetch_assoc($trp)) {
    $rows[] = $r;
}
$checkPsw = false;
$checkMail = false;

foreach ($rows as $str) {
    foreach ($str as $dati) {

        if ($email == $dati) {
            $checkMail = true;
        }
        if ($password == $dati) {
            $checkPsw = true;
        }
    }
}


if ($checkMail == true && $checkPsw == true) {
    print json_encode(true);
} else {
    print json_encode(false);
        
}
