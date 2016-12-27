import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

	/**
	* Title of the component
	*/
	title: string = "About Me!";

	constructor() { }

	ngOnInit() {
	}

}
