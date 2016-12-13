<?php
$part = "A";
if (isset($_GET['part']))
{
    $part = $_GET['part'];
}
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Jamie Sinn">
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.1/leaflet.css"/>
    <script src="http://cdn.leafletjs.com/leaflet-0.7.1/leaflet.js"></script>
    <script src="js/points.geojson" type="text/javascript"></script>
    <script src="js/coffeeshop.geojson" type="text/javascript"></script>
    <title>Jamie Sinn - Geography 187 - Assignment 7</title>
    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="css/full.css" rel="stylesheet">
</head>

<body>

<!-- Navigation -->
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.php">Home - Jamie Sinn</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li>
                    <a href="index.php?part=A">Part A</a>
                </li>
                <li>
                    <a href="index.php?part=B">Part B</a>
                </li>
                <li>
                    <a href="index.php?part=C">Part C</a>
                </li>
                <li>
                    <a href="index.php?part=D">Part D</a>
                </li>
                <li>
                    <a href="index.php?part=E">Part E</a>
                </li>



            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
</nav>

<div id="map"></div>
    <?php
echo "<b><h1 align=\"center\">Part " . $part . "</h1></b>";
	handlePart($part);
    ?>
<!-- jQuery -->
<script src="js/jquery.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="js/bootstrap.min.js"></script>

</body>
</html>

<?php

function handlePart($part)
{
    echo "<script src=\"js/part".$part.".js\"></script>";
}

?>
