<?php
$servername = "localhost"; // adatbázis szerver neve vagy IP címe
$username = "root"; // adatbázis felhasználóneve
$password = ""; // adatbázis jelszava
$dbname = "tv"; // adatbázis neve

// Kapcsolat létrehozása
$conn = new mysqli($servername, $username, $password, $dbname);

// Kapcsolat ellenőrzése
if ($conn->connect_error) {
    die("Sikertelen kapcsolódás az adatbázishoz: " . $conn->connect_error);
}

// Lekérdezés végrehajtása
$sql = "SELECT cim, ytlink FROM youtube_videos";
$result = $conn->query($sql);

// Eredmények JSON formátumban való visszaküldése
$videos = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        // Karakterek konvertálása HTML entitásokká
        $row['cim'] = htmlspecialchars($row['cim']);
        $row['ytlink'] = htmlspecialchars($row['ytlink']);
        $videos[] = $row;
    }
    echo json_encode($videos);
} else {
    echo json_encode(array());
}

// Kapcsolat bezárása
$conn->close();
?>
