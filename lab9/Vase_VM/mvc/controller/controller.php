<?php
//Create the controller class for the MVC design pattern
class Controller {
	public $load;
	public $model;
	// Create functions for the controller class
	function __construct($pageURI = null) // contructor of the class
	{
		//echo $pageURI;
		$this->load = new Load(); //we are accessing the ‘load’ and 
		// ‘model’ variables from the current class object. 
		$this->model = new Model();
		// determine what page you are on
		$this->$pageURI(); //refers to the home function from the current class object.
	}
	function home()
	// home page function
	{
		$this->load->view('home');
	}

	function gallery()
	{
		$this->load->view('gallery');
	}
	
	function admin()
	{
		$this->load->view('admin');
	}
	
	function getModelsJSON()
	{
		$data = $this->model->dbRead();
		echo json_encode($data);
	}
	
	function dbCreate()
	{
		$data = $this->model->dbCreate();
		$this->load->view('view_simple_message',$data);
	}
	
	function dbRead()
	{
		$this->load->view('view_simple_message', $this->getModelsJSON());
	}
	
	function dbDelete()
	{
		$data = $this->model->dbDelete();
		$this->load->view('view_simple_message',$data);
	}
}
?>