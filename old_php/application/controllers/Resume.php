<?php
defined ( 'BASEPATH' ) or exit ( 'No direct script access allowed' );
class Resume extends CI_Controller {
	public function index() {
		$this->load->view ( 'resume/pt' );
	}
	public function teste() {
		$this->load->view ( 'resume/teste' );
	}
}
