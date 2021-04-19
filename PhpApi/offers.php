<?php
    header("Access-Control-Allow-Origin: *");
    $isEmpty = true;
    
    $serverName = "serwer1351051.home.pl";
    $db = "13843853_ikano";
    // $db = "13843853_hrka";
    $user = "13843853_ikano";
    // $user = "13843853_hrka";
    $pass = "-GLdmR4IjuNl";

    // SqlServer
    //$pdoConnToDb = new PDO("dblib:version=7.0;charset=UTF-8;Server=serwer1351051.home.pl;Database=$user", "$user", "$pass");
    //$pdoConnToDb->setAttribute(PDO::SQLSRV_ENCODING_SYSTEM);

    // mySql
    $pdoConnToDb = new PDO("mysql:host=$serverName;dbname=$db", "$user", "$pass", [
		PDO::ATTR_EMULATE_PREPARES => false, 
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    	PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
  		]);
    // $pdoConnToDb->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if( $pdoConnToDb === false)
    {
        echo "Brak połączenia z DB";
        die();
    }

    $date = date("Y-m-d");

    $sqlGetJobOffers = "SELECT jo.Id, jo.Title, jo.LinkToTheForm , jof.Id as FileId FROM JobOffers jo "
            ." LEFT JOIN JobOffersFiles jof on jof.JobOfferId = jo.Id"
            ." WHERE jo.Active=1 AND CAST(jo.DateTo AS DATE)>='".$date."' AND CAST(jo.DateFrom AS DATE)<='".$date."'";

    $queryToDb = $pdoConnToDb->query($sqlGetJobOffers);
    $queryToDb->execute(); 

    $dbdata = array();

    while ($row = $queryToDb->fetch(PDO::FETCH_ASSOC)) 
    {
        $dbdata[]=$row;
    }
    // echo json_encode($dbdata);

    print(json_encode($dbdata, JSON_UNESCAPED_UNICODE)); 
?>