/**
 * Oleg Karpach code 2/07/17.
 */
import { Component, OnInit } from '@angular/core';
import { CampgroundService } from '../../services/campgounds.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Campground } from '../../models/campground';

@Component({
	selector: 'app-admin',
	templateUrl: './app/components/admin/admin.component.html',
	styleUrls: ['./app/components/admin/admin.component.css']
})

export class AdminComponent implements OnInit {
	userdata: any;
	admin: Campground = new Campground();
	role: Comment = new Comment();

	constructor(private campgroundService: CampgroundService,
	            private userService: UserService,
	            private route: ActivatedRoute,
	            private router: Router) {
	}

	ngOnInit() {
		this.userdata = this.userService.getUserData();

		if (!this.userdata) {
			this.router.navigate(['/login']);
		}

		if (this.route.snapshot.url[1].path !== 'new' && this.route.snapshot.url[3].path === 'edit') {
			this.campgroundService.getCampground(Number(this.route.snapshot.url[2].path))
				.subscribe(data => this.admin = data.campground);
		}
	}
}
