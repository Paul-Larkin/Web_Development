<!DOCTYPE html>
<html>
<head>
	<style>
		/*
		 * CSS for page
		 */
		h1 {
		  text-align: center;
		}

		input, select{
		  width: 100%;
		  padding: 5px;
		  margin: 8px 0;
		  display: inline-block;
		  border: 1px solid #000;
		  border-radius: 4px;
		  box-sizing: border-box;
		}

		body {
			background: #EEEEEE;
		}

		.center {
			text-align: center;
		}

		.right {
			text-align: right;
		}

		.left {
			text-align: left;
		}

		.generateForm {
		  width: 400px;
		  height: 100px;
		  padding: 12px 20px;
		  margin-left: auto;
		  margin-right: auto;
		  border: 1px solid #000;
		  box-sizing: border-box;
		  background: white
		}
		.createForm {
		  width: 400px;
		  height: 550px;
		  padding: 12px 20px;
		  margin-left: auto;
		  margin-right: auto;
		  border: 1px solid #000;
		  box-sizing: border-box;
		  background: white
		}

		.readForm {
		  width: 400px;
		  height: 100px;
		  padding: 12px 20px;
		  margin-left: auto;
		  margin-right: auto;
		  border: 1px solid #000;
		  box-sizing: border-box;
		  background: white
		}
		.updateForm {
		  width: 400px;
		  height: 620px;
		  padding: 12px 20px;
		  margin-left: auto;
		  margin-right: auto;
		  border: 1px solid #000;
		  box-sizing: border-box;
		  background: white
		}

		.deleteForm {
		  width: 400px;
		  height: 160px;
		  padding: 12px 20px;
		  margin-left: auto;
		  margin-right: auto;
		  border: 1px solid #000;
		  box-sizing: border-box;
		  background: white
		}

		.dropForm {
		  width: 400px;
		  height: 160px;
		  padding: 12px 20px;
		  margin-left: auto;
		  margin-right: auto;
		  border: 1px solid #000;
		  box-sizing: border-box;
		  background: white
		}

		#generate {
		  background: yellow;
		  height: 60px;
		  font-size: 24px;
		}

		#submit {
		  background: lime;
		  height: 60px;
		  font-size: 24px;
		}

		#read {
		  background: blue;
		  color: white;
		  height: 60px;
		  font-size: 24px;
		}

		#update {
		  background: orange;
		  height: 60px;
		  font-size: 24px;
		}

		#delete {
		  background: red;
		  color: white;
		  height: 60px;
		  font-size: 24px;
		}

		#drop {
		  background: black;
		  color: white;
		  height: 60px;
		  font-size: 24px;
		}


		#dataBase , caption, th, td {
		    border: 1px solid black;
		    border-collapse: collapse;
		    background-color: white;
		    padding: 10px;
		    text-align: center;
		    border-spacing: 10px;
		    margin-left: auto;
		    margin-right: auto;
		}

		#caption {
		    font-size: 40px;
		    font-weight: bold;
		    background: lightblue;
		}

		.bold {
		    font-weight: bold;
		    background: lightgray;
		}

	</style>
		
</head>
	<body>

		<h1>Generate a new table</h1>
		<p class="center">*Hardcoded to create "eBook_MetaData"</p>
		<form method="POST" class="generateForm">
		<input id="generate" type="submit" value="GenerateTable" name="generateTable">
		</form>
		<br>
		<?php

		function generate(){
	
			$servername = "localhost";
			$username = "root";
			$password = "";
			$dbname = "CS230";
		
			$conn = mysqli_connect($servername, $username, $password, $dbname);

			if($conn){
			//echo "Connection OK";
			}else{
				die("The Connection has failed: " .mysqli_connect_error());
			}

			$sql = "CREATE TABLE `eBook_MetaData` (
				`id` int NOT NULL AUTO_INCREMENT,
				`creator` text NOT NULL,
				`title` text NOT NULL,
    			`type` text NOT NULL,
    			`identifier` VARCHAR (20) NOT NULL,
    			`date` DATE NOT NULL,
    			`language` varchar (10) NOT NULL,
    			`description` varchar (255) NOT NULL,
    			PRIMARY KEY (id),
    			UNIQUE (identifier)
    			) ENGINE=InnoDB DEFAULT CHARSET=latin1;";

    			if (mysqli_query($conn, $sql)) {
 				   echo "Table 'eBook_MetaData' created successfully";
				} else {
    				echo "Error creating table: " . mysqli_error($conn);
				}
				$conn = null;
			}

			if(isset($_POST['generateTable'])){
				generate();
			}

		?>

		<h1>CRUD Part 1: Create</h1>
		<p class="center">*To Create an entity</p>

		<!--Form for submission-->
		<form action="" method="POST" class="createForm">
			creator:<input type="text" value="" name="creator"><br>
			title:<input type="text" value="" name="title"><br>
			type (select one):<select name="type">
						 <option value="Fiction">Fiction</option>
						 <option value="Non-Fiction">Non-Fiction</option>
						  <option value="Young Adult">Young Adult</option>
						  <option value="Romance">Romance</option>
					</select> 
			identifier (must be unique):<input type="text" value="" name="identifier"><br>
			date (yyyy/mm/dd):<input type="text" value="" name="date"><br>
			language (select one): <select name="language">
						 <option value="en-GB">en-GB</option>
						 <option value="en-US">en-US</option>
						  <option value="fr-FR">fr-FR</option>
						  <option value="fr-CA">fr-CA</option>
					</select> 
			description (brief):<input type="text" value="" name="description" id="description"><br>
			<input id="submit" type="submit" value="Submit to Database" name="submit">
		</form>

		<br>
			<?php
			/* 
			 * php to perform the create
			 * element of the c.r.u.d CS230
			 * assignment 3
			 */

			//Function to create an entity for the	
			function create(){

				$servername = "localhost";
				$username = "root";
				$password = "";
				$dbname = "CS230";
		
				$conn = mysqli_connect($servername, $username, $password, $dbname);

				if($conn){
				//echo "Connection OK";
				}else{
					die("The Connection has failed: " .mysqli_connect_error());
				}
				
				//Variables for holding entity data
				$cr = $_POST['creator'];
				$ti = $_POST['title'];
				$ty = $_POST['type'];
				$id = $_POST['identifier'];
				$da = $_POST['date'];
				$la = $_POST['language'];
				$de = $_POST['description'];

					//If statement to prevent fields being empty
					if($cr!="" && $ti!="" && $ty!="" && $id!="" && $da!="" && $la!="" && $de!=""){

						//INSERT sql STATEMENT within php language
						$sql = "INSERT INTO eBook_MetaData (creator, title, type, identifier, date, language, description)
								VALUES ('$cr','$ti','$ty','$id','$da','$la','$de')";
						//Variable to monitor data transfer
						$data = mysqli_query($conn,$sql);
							//If data is not transfered to the database
							if(!$data){
								//echo "";
							//If it is transfered
							}else{
								echo "Data inserted";
							}

					}else{
						//Prompt the user to fill all fields
						echo "*All fields required";
					}	
					$conn = null;	
				}
					//If statement to allow running of the function on click of the 'submit' button
					if(isset($_POST['submit'])){
							create();
				}
			?>
	
		<h1>CRUD Part 2: Read/Retrieve</h1>
		<p class="center">*Press button to view table, note that if no
		database exists you will be met with an "Uncaught Error"</p>
		<br>
		<form method="POST" class="readForm">
		<input id="read" type="submit" value="ReadTable" name="read">
		</form>
			<br>
			<?php
			/* 
			 * php to perform the read
			 * element of the c.r.u.d CS230
			 * assignment 3, read involves 
			 * displaying the table data 
			 * from the database
			 */
			//Function to create an entity for the	
			function read(){


				$servername = "localhost";
				$username = "root";
				$password = "";
				$dbname = "CS230";
				$conn = mysqli_connect($servername, $username, $password, $dbname);
				if($conn){
				//echo "Connection OK";
				}else{
					die("The Connection has failed: " .mysqli_connect_error());
				}
				$sql = "SELECT * FROM eBook_MetaData";
				$values = $conn->query($sql);


					if($values->num_rows>=0){
						echo "<table id='dataBase'>
								<caption class='bold' id='caption'>eBook_MetaData</caption>
								<tr>
									<th class='bold'>id</th>
									<th class='bold'>creator</th>
									<th class='bold'>title</th>
									<th class='bold'>type</th>
									<th class='bold'>identifier</th>
									<th class='bold'>date</th>
									<th class='bold'>language</th>
									<th class='bold'>description</th>
								</tr>";
						while($row = $values->fetch_assoc()){
							echo "<tr>
									<td>" .$row['id']."</td>
									<td>" .$row['creator']."</td>
									<td>" .$row['title']."</td>
									<td>" .$row['type']."</td>
									<td>" .$row['identifier']."</td>
									<td>" .$row['date']."</td>
									<td>" .$row['language']."</td>
									<td>" .$row['description']."</td>
								</tr>";
						}
						echo "</table>";
					}else{
						//echo "Test No";
						echo "<br> The Database is Empty";
					}
				$conn = null;
				}	
					if(isset($_POST['read'])){
						read();
					}
			?>
		

		<h1>CRUD Part 3: Update</h1>
		<p class="center">*Update an entity by id</p>
		<!--Form for update-->
		<form action="" method="POST" class="updateForm">
			id (must exist in DB):<input type="text" value="" name="i"><br>
			new creator:<input type="text" value="" name="creator"><br>
			new title:<input type="text" value="" name="title"><br>
			type (select one):<select name="type">
						 <option value="Fiction">Fiction</option>
						 <option value="Non-Fiction">Non-Fiction</option>
						  <option value="Young Adult">Young Adult</option>
						  <option value="Romance">Romance</option>
					</select> 
			identifier (must be unique):<input type="text" value="" name="identifier"><br>
			date (yyyy/mm/dd):<input type="text" value="" name="date"><br>
			language (select one): <select name="language">
						 <option value="en-GB">en-GB</option>
						 <option value="en-US">en-US</option>
						  <option value="fr-FR">fr-FR</option>
						  <option value="fr-CA">fr-CA</option>
					</select> 
			new description (brief):<input type="text" value="" name="description" id="description"><br>
			<input  id="update" type="submit" value="Update Database" name="update">
		</form>

		<?php
			/* 
			 * php to perform the update
			 * element of the c.r.u.d CS230
			 * assignment 3
			 */
			function update(){
				$servername = "localhost";
				$username = "root";
				$password = "";
				$dbname = "CS230";
				//Variables for holding entity data
				$i = $_POST['i'];
				$cr = $_POST['creator'];
				$ti = $_POST['title'];
				$ty = $_POST['type'];
				$id = $_POST['identifier'];
				$da = $_POST['date'];
				$la = $_POST['language'];
				$de = $_POST['description'];
				$conn = mysqli_connect($servername, $username, $password, $dbname);
					if($conn){
					//echo "Connection OK";
					}else{
						die("The Connection has failed: " .mysqli_connect_error());
					}
				$sql = "UPDATE eBook_MetaData SET creator='$cr', title='$ti', type='$ty', identifier='$id', date='$da', language='$la', description='$de' WHERE id='$i'";
					$data = mysqli_query($conn, $sql);

					if(!$data){
						echo "error";
					}else{
						echo "data updated";
					}	
				
				$conn = null;
				}
				if(isset($_POST['update'])){
					update();
				}
		?>

		<h1>CRUD Part 4: Delete</h1>
			<p class="center">*Delete an entity by id</p></p>
		<!--Form for delete-->
			<form action="" method="POST" class="deleteForm">
				id (must exist in DB):<input type="text" value="" name="i"><br>
				<input  onclick="history.go(0)" id="delete" type="submit" value="Delete from Database" name="delete">
			</form>

		<?php
			/* 
			 * php to perform the delete
			 * element of the c.r.u.d CS230
			 * assignment 3
			 */
			function delete(){
				$servername = "localhost";
				$username = "root";
				$password = "";
				$dbname = "CS230";
				//Variables for holding entity data
				$i = $_POST['i'];
				$conn = mysqli_connect($servername, $username, $password, $dbname);
				if($conn){
				//echo "Connection OK";
				}else{
					die("The Connection has failed: " .mysqli_connect_error());
				}
				$sql = "DELETE FROM eBook_MetaData WHERE id='$i'";
				$data = mysqli_query($conn,$sql);
					//If data is not transfered to the database
					if(!$data){
					echo "error";
					//If it is transfered
					}else{
						echo "Data deleted";
					}
				$conn = null;
				}
				if(isset($_POST['delete'])){
					delete();
				}
		?>		


		<h1>Drop the table (for testing purposes)</h1>
			<p class="center">*Hardcoded to drop "eBook_MetaData"</p>
				<form method="POST" class="generateForm">
					<input id="drop" type="submit" value="DropTable" name="dropTable">
				</form>
			<br>

		<?php

			function drop(){
		
				$servername = "localhost";
				$username = "root";
				$password = "";
				$dbname = "CS230";
				$conn = mysqli_connect($servername, $username, $password, $dbname);

				if($conn){
				//echo "Connection OK";
				}else{
					die("The Connection has failed: " .mysqli_connect_error());
				}

				$sql = "DROP TABLE IF EXISTS eBook_MetaData;";

    			if (mysqli_query($conn, $sql)) {
 				   echo "Table 'eBook_MetaData' dropped successfully";
				}else {
    				echo "Error dropping table: " . mysqli_error($conn);
				}

				$conn = null;
			}
			if(isset($_POST['dropTable'])){
				drop();
			}
		?>
	</body>
</html>