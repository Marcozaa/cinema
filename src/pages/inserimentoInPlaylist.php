<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: POST, PUT, GET, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$host = "87.250.73.22";
$database   = "Pinto_DiCastri_Zanchin_cinema";
$username   = "exAdminer";
$password     = "CBC349bb";
$port = 3306;
/**
 * QUERY PER INSERIMENTO UTENTE
 * 
 * 21/03 - Inserire indirizzo
 */
$conn = new mysqli($host, $username, $password, $database, $port);

$film = $_GET['film'];
$playlist = $_GET['playlist'];



$entityBody = file_get_contents('php://input');
echo $entityBody;

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "INSERT INTO `film_playlist`(
    `film`, 
    `playlist`)
   VALUES ('" . $film . "','" . $playlist . "')";


if ($conn->query($sql) === TRUE) {
    echo "New created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}




