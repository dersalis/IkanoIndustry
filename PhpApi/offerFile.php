<?php 
    
    $idFile = $_GET["oferta"];
    $serverName = "serwer1351051.home.pl";
    // $db = "13843853_ikano";
    $db = "13843853_hrka";
    // $user = "13843853_ikano";
    $user = "13843853_hrka";
    $pass = "-GLdmR4IjuNl";
        
    // MySQL connection
    // $mysqlConn = "mysql:host=$serverName;port=5432;dbname=$db;user=$user;password=$pass";

    // PostgreSQL connection
    $pgsqlConn = "pgsql:host=$serverName;port=5432;dbname=$db;user=$user;password=$pass";

    // mySql
    $pdoConnToDb = new PDO($pgsqlConn);
    $pdoConnToDb->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdoConnToDb->query("SET bytea_output=escape");

    if( $pdoConnToDb === false)
    {
        echo "Brak połączenia z DB";
        die();
    }
    
    $pdoConnToDb->beginTransaction();
    $queryToDb = $pdoConnToDb->prepare("SELECT filecontent FROM joboffersfiles WHERE jobofferid=".$idFile);
    $queryToDb->execute(); 

    $result = $queryToDb->fetch(PDO::FETCH_ASSOC);
    
    if ($result === false){
        echo "Nie znaleziono oferty o id ".$idFile;
        die();
    }
    

    header('Content-type: application/pdf',true,200);
    header("Content-Disposition: attachment; filename=OfertaIkanoIndustry_".$idFile.".pdf");
    header('Cache-Control: public');
    fpassthru($result['filecontent']);

    ?>