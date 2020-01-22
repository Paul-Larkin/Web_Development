<?php

 // function signIn(){
  //Create connection
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
      //Details of user who has signed in
      $name = $_POST['userName'];
      $pass = $_POST['passWord'];

      //Sql to retrieve that particular users data
      $sql = "SELECT * FROM hiraganaUserTable WHERE (userName='$name');" ;

      $values = $conn->query($sql);
      //Gets the values from the table
				if($values->num_rows>=0){
					while($row = $values->fetch_assoc()){
						$username= $row['userName'];
            $quizScore=$row['quizScore'];
					}
				}
          //Prints on the webpage the name and score
        echo "<h1>Username: ".$username."<br>";
        echo "<h1>Quiz Best Score: ".$quizScore."<br>";

        // I assume the connection stays open till otherwise told with user log out button
       //$conn = null;

//}
    //  if (isset($_POST(['signInButton'])){
    //  signIn();
   // }
?>
