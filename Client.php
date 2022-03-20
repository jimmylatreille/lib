<?php 

class Client {

	//variable instance
	private $name;

	//constructeur
	function __construct($name){

		$this->name = $name;
		
	} //fin constructeur Client

	//Getter name()
	 public function getName(){
		return $this->name;
	}

	//Setter name()
	 public function setName($name){
		$this->name = $name;
	} 
	
} // fin de la class Client

 ?>