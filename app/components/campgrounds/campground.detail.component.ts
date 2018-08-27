
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CampgroundDetail, CampgroundService } from '../../services/campgounds.service';
import { UserService } from '../../services/user.service';
import { Comment } from '../../models/comment';
import * as _ from 'lodash';

@Component({
	selector: 'campDetail',
	templateUrl: './app/components/campgrounds/campground.detail.component.html',
	styleUrls: ['./app/components/campgrounds/campgrounds.component.css']
})

export class CampgroundDetailComponent implements OnInit {
	selectedComment: Comment;

	campDetail: CampgroundDetail = new CampgroundDetail();
	userdata: any;
	role: any;

	constructor(private campgroundService: CampgroundService,
	            private userService: UserService,
	            private route: ActivatedRoute,
	            private router: Router) {
	}

	ngOnInit() {
		this.route.params
			.switchMap((params: Params) => this.campgroundService.getCampgroundDetail(params['id']))
			.subscribe(data => this.campDetail = data);
		this.userdata = this.userService.getUserData();
		this.userService.getProfile()
			.subscribe(fulldata => {
				this.role = fulldata.role;
			});
			setTimeout(() => {
				this.updateUI(this.selectedComment);
			}, 4000);
	}

	doLogin() {
		this.router.navigateByUrl('/login');
	}

	doEditCampground(id: number) {
		this.router.navigateByUrl('/manual/detail/' + id + '/edit');
	}

	doDeleteCampground(id: number) {
		if (this.route.snapshot.url[0].path === 'manual') {
			this.campgroundService.deleteCampground(id).subscribe(data => {
				if (data.message === 'OK') {
					this.router.navigate(['/manual']);
				}
			});
		}
	}

	doEditComment(comment: Comment) {
		this.selectedComment = comment;
	}

	doGetComment(comment_id: number) {
		this.campgroundService.getComment(comment_id)
			.subscribe(data => {
				if (data.message === 'OK') {
					_.remove(this.campDetail.comments, comment => {
						return comment.id === comment_id;
					});
				}
			});
	}

	doDeleteComment(comment_id: number) {
		this.campgroundService.deleteComment(comment_id)
			.subscribe(data => {
				if (data.message === 'OK') {
					_.remove(this.campDetail.comments, comment => {
						return comment.id === comment_id;
					});
				}
			});
	}



	updateUI(comment: Comment) {
		let tempComment = comment['comment'];
		this.campDetail.comments.push(tempComment);
	}
	//Add tag img
	// listView(text: string) {
	// 	var urlRegex = new RegExp('#\b(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)#');
	// 	return text.replace(urlRegex, "<a href='$1'>$1</a>");
	// }

	listView(x: string) {
		return x.split(/\d\./).join('</details><details>');
	}
}
