<?php

 // function register(){
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
      //Details to add to the database
      $name = $_POST['userName'];
      $pass = $_POST['passWord'];
      $quizScore = 0;

      //Sql insert function
      $sql = "INSERT INTO hiraganaUserTable (userName, passWord, quizScore)
								VALUES ('$name','$pass','$quizScore')";

      if(mysqli_query($conn, $sql)){
      //  echo "New User added";
      }
      //Prints on the webpage
      echo "Welcome: ".$name;
      echo " Play our quiz!";
       $conn = null;
    //}
    //if (isset($_POST(['regButton'])){
    //  register();
  //  }


   
?>
