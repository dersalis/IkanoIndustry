<?php 
    
    $idFile = $_GET["oferta"];
    $serverName = "serwer1351051.home.pl";
    $db = "13843853_hrka";
    // $user = "13843853_ikano";
    $user = "13843853_hrka";
    $pass = "-GLdmR4IjuNl";
        
    // $pdoConnToDb = new PDO("dblib:Server=serwer1351051.home.pl;Database=$user", "$user", "$pass");
    
    // mySql
    $pdoConnToDb = new PDO("mysql:host=$serverName;dbname=$db", "$user", "$pass", [
		PDO::ATTR_EMULATE_PREPARES => false, 
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    	PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
  		]);
    //$pdoConnToDb->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if( $pdoConnToDb === false)
    {
        echo "Brak połączenia z DB";
        die();
    }
    
    $queryToDb = $pdoConnToDb->prepare("SELECT TOP 1 FileContent FROM JobOffersFiles WHERE JobOfferId=".$idFile);
    $queryToDb->execute();  
    $result = $queryToDb->fetch(PDO::FETCH_OBJ);
    
    if ($result === false){
        echo "Nie znaleziono oferty o id ".$idFile;
        die();
    }
    
    $content = trim($result->FileContent);
    
    header('Content-type: application/pdf',true,200);
    //header("Content-Disposition: attachment; filename=OfertaIkanoIndustry_".$idFile.".pdf");
    header('Cache-Control: public');
    echo $content;

    ?>