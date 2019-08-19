<?php
    header("Access-Control-Allow-Origin: *");
    $isEmpty = true;
    
    $serverName = "serwer1351051.home.pl";
    $user = "13843853_ikano";
    $pass = "-GLdmR4IjuNl";

    $pdoConnToDb = new PDO("dblib:version=7.0;charset=UTF-8;Server=serwer1351051.home.pl;Database=$user", "$user", "$pass");
        //$pdoConnToDb->setAttribute(PDO::SQLSRV_ENCODING_SYSTEM);

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