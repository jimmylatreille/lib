<?php 

class client {

	private $name;

	function __construct($name) {
		$this->name = $name;
	}

	//Getter name
	 public function getName(){
		return $this->name;
	}
	
	//Setter name
	 public function setName($name){
		$this->name = $name;
	} 
}

$client = new Client("Jimmy");

echo $client->getName();

 ?>