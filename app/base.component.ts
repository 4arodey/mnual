/**
 * Oleg Code 07-02-2017.
 */

import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Cloudinary } from '@cloudinary/angular-5.x';

@Component({
	selector: 'my-app',
	templateUrl: './app/base.html'
})

export class BaseComponent implements OnInit {
	title = 'ManualCamp';
	userdata: any;

	constructor(private userService: UserService, private router: Router) {
	}

	ngOnInit() {
		this.router.events.filter(event => event instanceof NavigationEnd)
			.subscribe(event => {
					this.userService.getProfile().subscribe(data => {
						if (data) {
							this.userdata = this.userService.getUserData();
						} else {
							this.userService.flush();
							this.userdata = null;
						}
					});
				}
			);
	}
}
