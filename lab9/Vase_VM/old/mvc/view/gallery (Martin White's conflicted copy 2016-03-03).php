<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link href="../../../../../lab6/examples_2015/virtualMuseum/mvc/styles/boilerplate.css" rel="stylesheet" type="text/css">
	<link href="../../../../../lab6/examples_2015/virtualMuseum/mvc/styles/main.css" rel="stylesheet" type="text/css">
	<link href="../../../../../lab6/examples_2015/virtualMuseum/mvc/styles/x3dom.css" rel="stylesheet" type="text/css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="../../../../../lab6/examples_2015/virtualMuseum/mvc/scripts/x3dom.js"></script>
	<script src="../../../../../lab6/examples_2015/virtualMuseum/mvc/scripts/modelinteractions.js"></script>
	<script src="../../../../../lab6/examples_2015/virtualMuseum/mvc/scripts/get3dModels.js"></script>

	<title>Gallery</title>

</head>

<body>

	<div id="content">

		<div id="header">
			<img src="../../../../../lab6/examples_2015/virtualMuseum/mvc/media/images/logo.png" width="302" height="190">
			<ul>
				
                <li><a href="../../../../../lab6/examples_2015/virtualMuseum/mvc/index.php/home">HOME</a></li>
				<li><a href="#">GALLERY</a></li>
				<li><a href="../../../../../lab6/examples_2015/virtualMuseum/mvc/index.php/admin">ADMIN</a></li>
			</ul>
		</div>
	
		<div id="interaction">
			<button type="button" onclick="spin()">SPIN</button>
			<button type="button" onclick="wireframe()">WIREFRAME</button>
			<button type="button" onclick="lighting()">LIGHTING</button>
			<button type="button" onclick="cam1()">CAMERA 1</button>
			<button type="button" onclick="cam2()">CAMERA 2</button>
		</div>  

		<div id="models">
			<div id="content3D">
				<x3d id="model">
					<scene>
						<inline id="x3domUrl" nameSpaceName="model" mapDEFToID="true"></inline>
					</scene>
				</x3d>
			</div>
			<div id="thumbnails">
				<img id="model0" width="75" height="75">
				<img id="model1" width="75" height="75">
				<img id="model2" width="75" height="75">
				<img id="model3" width="75" height="75">
				<img id="model4" width="75" height="75">
			</div>
		</div>
	 
		<div id="information"> 
			<h3 id="information_header">DESCRIPTION</h3>  
			<div id="information_body">
				<p><div class="information_sub_heading">NAME: </div><div id="name"></div></p>
				<p><div class="information_sub_heading">PLACE OF ORIGIN: </div><div id="placeOfOrigin"></div></p>
				<p><div class="information_sub_heading">MATERIALS: </div><div id="materials"></div></p>
				<p><div class="information_sub_heading">ARTIST: </div><div id="artist"></div></p>
				<p><div class="information_sub_heading">PRODUCTION DATE: </div><div id="productionDate"></div></p>
				<p><div class="information_sub_heading">MUSEUM NUMBER: </div><div id="museumNumber"></div></p>
				<p><div class="information_sub_heading">GALLERY LOCATION: </div></b><div id="galleryLocation"></div></p>
				<p><div class="information_sub_heading">DESCRIPTION: </div><div id="description"></div></p>
			</div>
		</div>
				
		<div id="footer">
            <p><a href="../../../../../lab6/examples_2015/virtualMuseum/mvc/media/zippedModels.zip">Download Models and Statement of Originality</a></p>
			
        </div>
	
	</div>
		  			
</body>
</html>
