<?php
$host = '127.0.0.1';
$user = "root";
$pass ='';
$db = 'cursovaja';
$table = 'form';

$lastName = $_POST['lastName'];
$firstName = $_POST['firstName'];
$email = $_POST['email'];
$psw = $_POST['psw'];
$psw2 = $_POST['psw2'];

$link=mysqli_connect($host, $user, $pass, $db);
$query = "INSERT INTO $table VALUES ('$lastName','$firstName','$email','$psw','$psw2')";
$result = mysqli_query($link, $query);
if ($result == true) {
    echo "Дякуємо за реєстрації";
}
else{
    echo "На жаль, щось пішло не так...";
}
echo '<meta http-equiv="refresh" content="0,url=/index.html" />';
mysqli_close($link);
?>