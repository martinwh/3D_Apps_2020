<?php
class Model {
	//create a new PDO object that represents a connection to a database
	// Property declaration, in this case we are declaring a variable that points to the database connection
	public $dbhandle;
	//method to create database connection using PHP data Objects (PDO) as the interface to SQLite
	public function __construct()
	{
		try {
			//Change connection string for different databases, currently using SQLite
			$this->dbhandle = new PDO('sqlite:./mvc/model/db/models.sqlite', 'user', 'password', array(
														PDO::ATTR_ERRMODE=> PDO::ERRMODE_EXCEPTION,
														PDO::ATTR_EMULATE_PREPARES=> false,
														));
			//$this->dbhandle->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		}
		catch (PDOEXception $e) {
			print new Exception($e->getMessage());
		}
	}
	
	public function dbCreate()
	{
		try{
			$this->dbhandle->exec("CREATE TABLE models (id INTEGER PRIMARY KEY, name TEXT, description TEXT, placeOfOrigin TEXT, materials TEXT, artist TEXT, productionDate TEXT, museumNumber TEXT, galleryLocation TEXT, imageUrl TEXT, x3domUrl TEXT)");
			$this->dbhandle->exec(
			"INSERT INTO models (id, name, description, placeOfOrigin, materials, artist, productionDate, museumNumber, galleryLocation, imageUrl, x3domUrl) VALUES (0, 'Poppies Vase', 'Gabriel Argy-Rousseau (1885-1953) was among the group of glassmakers working in pate de verre (glass paste) at the beginning of the century, who followed immediately in the pioneering footsteps of Henry Cros. Argy-Rousseau became one of the most, if not the most, prolific and successful practioners of this intricate and difficult technique. He had a shrewd eye for fashionable taste combined with a subtle colour sense and effective marketing skills. This vase, known in the catalogues as ''Poppies vase'', was first introduced in 1924.', 'London, England', 'Pate-de-verre (glass paste)', 'Argy-Rousseau, Gabriel, born 1885 - died 1953 (designer)', '1924', 'C.34-1974', 'Glass, room 131, case 30, shelf 2', '../media/models/thumbnails/model0.png', '../media/models/x3d/model0.x3d');".
			"INSERT INTO models (id, name, description, placeOfOrigin, materials, artist, productionDate, museumNumber, galleryLocation, imageUrl, x3domUrl) VALUES (1, 'The Lord Keeper''s Cup', 'A highly ornamented standing cup would have been on display during a meal rather than used. This example was made from one of the Great Seals of James I held by Sir Thomas Coventry. The tradition that allowed the Lord Keeper of the Great Seal to retain it and have it made into a piece of plate began with Nicholas Bacon, Keeper from 1558 to 1579. It was referred to as a perquisite, hence our modern word ''perk''.', 'London, England', 'cutglass', 'John Thurston, born 1774 - died 1822 (designer)', '1626-1627', 'M.59:1, 2-1993', 'British Galleries, room 56e, case 6', '../media/models/thumbnails/model1.png', '../media/models/x3d/model1.x3d');".
			"INSERT INTO models (id, name, description, placeOfOrigin, materials, artist, productionDate, museumNumber, galleryLocation, imageUrl, x3domUrl) VALUES (2, 'Perfume Vase', 'Perfume vases (also known as ''essence pots'' and pot-pourri vases) were set out on chimneypieces and other domestic furnishings. They were filled with pot-pourri (perfumed or sweet-smelling leaves) similar to those used to sweeten the air today. Perfume vases of this design are recorded as being sold singly, but were also made in pairs.', 'London, England', 'Soft-paste porcelain, painted in enamels, with tooled and burnished gilding', 'Chelsea Porcelain factory', 'c.1760-1765', 'C.8:1 to 3-1996', 'British Galleries, room 77, case 2', '../media/models/thumbnails/model2.png', '../media/models/x3d/model2.x3d');".
			"INSERT INTO models (id, name, description, placeOfOrigin, materials, artist, productionDate, museumNumber, galleryLocation, imageUrl, x3domUrl) VALUES (3, '1001 Nights Vase', 'Enamelled decoration on glass is a centuries-old Bohemian (Czechoslovakia, now Czech Republic) tradition. It was taken up by Stansilav Libensky in the 1940s when he taught in the Dept. of Painted and Stained Glass at the Novy Bor glass school. He made a large number of designs based on biblical themes, but also many others which were more fantastic and impressionistic using motifs from prehistoric cave paintings to fairy tales and dreams. The decoration was applied by technicians using acid-etching, which was then painted in by the students as part of their training.', 'London, England', 'Engraved and enamelled glass', 'Libensky, Stanislav, born 1921 (designer)', '1946', 'C.104-1984', 'In Storage', '../media/models/thumbnails/model3.png', '../media/models/x3d/model3.x3d');".
			"INSERT INTO models (id, name, description, placeOfOrigin, materials, artist, productionDate, museumNumber, galleryLocation, imageUrl, x3domUrl) VALUES (4, 'Favrile Vase', '''Favrile'' was Tiffany & Co''s art-glass range. Its name probably comes from ''fabrile'', the ''old English'' word for ''handmade'', indicating that the range was made by skilled glass workers. The historic technique used for this piece involved incorporating coloured canes into the body of the glass and working the glass while it is still hot and malleable. Louis Comfort Tiffany persuaded Arthur J. Nash, a talented English glass blower from Stourbridge, West Midlands, to join him in America to work on experimental projects. In 1893 the two men went into business and established the Stourbridge Glass Co at the Corona glassworks, Long Island, New York. At first the factory made mostly stained glass, but a glass-blowing shop was soon included.', 'London, England', 'Glass, with applied and marvered colours, combed', 'Tiffany, Louis Comfort, born 1848 - died 1933 (designer)', 'ca. 1895', 'C.58-1972', 'Glass, room 131, case 29, shelf 1', '../media/models/thumbnails/model4.png', '../media/models/x3d/model4.x3d');");
			return "Data inserted successfully inside models.sqlite file"; 
		}
		catch (PDOEXception $e) {
			print new Exception($e->getMessage());
		}
		$this->dbhandle = NULL;
	}
		
	public function dbRead()
	{
		try {
		
			//Get the database as an object
			$sql = 'SELECT * FROM models';
			$stmt = $this->dbhandle->query($sql);
					
			//Set up an array to return the results to the view
			$result = null;
			
			//Set up a variable to index each row of the array
			$i=0;
			
			//Use a while loop to loop through the rows
			while ($data = $stmt->fetch()){
				
				//Write the database contents to the results array for sending back to the view
				$result['models'][$i]['name'] = $data['name'];
				$result['models'][$i]['description'] = $data['description'];
				$result['models'][$i]['placeOfOrigin'] = $data['placeOfOrigin'];
				$result['models'][$i]['materials'] = $data['materials'];
				$result['models'][$i]['artist'] = $data['artist'];
				$result['models'][$i]['productionDate'] = $data['productionDate'];
				$result['models'][$i]['museumNumber'] = $data['museumNumber'];
				$result['models'][$i]['galleryLocation'] = $data['galleryLocation'];
				$result['models'][$i]['imageUrl'] = $data['imageUrl'];
				$result['models'][$i]['x3domUrl'] = $data['x3domUrl'];
				
				//increment the row index
				$i++;
			}
			
		}
		catch (PDOEXception $e) {
			print new Exception($e->getMessage());
		}
		
		//Close the database connection
		$this->dbhandle = NULL;
		
		//Send the response back to the view
		return $result;
	}
	
	function dbDelete() {
		$this->dbhandle->exec("DROP TABLE models");
		return "Models table successfully deleted from inside models.sqlite file";
	}
}		
?>
		

				
