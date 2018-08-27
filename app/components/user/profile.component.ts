

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'login',
	templateUrl: './app/components/user/profile.component.html'
})

export class ProfileComponent implements OnInit {
	id: number = 0;
	username: string = '';
	password: string = '';
	email: string = '';
	medals: string = '';
	role: number = 0;

	constructor(private userService: UserService, private router: Router) {
	}

	ngOnInit() {
		this.userService.getProfile()
			.subscribe(data => {
				this.id = data.id;
				this.username = data.username;
				this.password = data.password;
				this.email = data.email;
				this.medals = data.medals;
				this.role = data.role;
			});
	}

	doLogout() {
		this.router.navigateByUrl('/logout');
	}

	inputRole(x: number) {
		return (x == 1) ? "Admin" : "User";
	}

	imputMedals(x: string) {
		return x.split('');
	}

	// listView(x: string) {
	// 	return x.split(/\d\./).join('</details><details>');
	// }

}
