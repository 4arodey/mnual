import { Component, OnInit } from '@angular/core';
import { CampgroundService } from '../../services/campgounds.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Campground } from '../../models/campground';

@Component ({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent { }