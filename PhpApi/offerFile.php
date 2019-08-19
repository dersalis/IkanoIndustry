<?php 
    
    $idFile = $_GET["oferta"];
    $serverName = "serwer1351051.home.pl";
    $user = "13843853_ikano";
    $pass = "-GLdmR4IjuNl";
        
    $pdoConnToDb = new PDO("dblib:Server=serwer1351051.home.pl;Database=$user", "$user", "$pass");
    
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