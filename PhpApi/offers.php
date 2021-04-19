<?php
    header("Access-Control-Allow-Origin: *");
    $isEmpty = true;
    
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
    // $pdoConnToDb->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if( $pdoConnToDb === false)
    {
        echo "Brak połączenia z DB";
        die();
    }

    $date = date("Y-m-d");

    $sqlGetJobOffers = "SELECT jo.Id, jo.Title, jo.LinkToTheForm , jof.Id as FileId FROM joboffers jo "
            ." LEFT JOIN joboffersfiles jof on jof.JobOfferId = jo.Id"
            ." WHERE jo.Active=true AND CAST(jo.DateTo AS DATE)>='".$date."' AND CAST(jo.DateFrom AS DATE)<='".$date."'";

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