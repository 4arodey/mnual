/**
 * Oleg Code 07-02-2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CampgroundsComponent } from './components/campgrounds/campgrounds.component';
import { CampgroundDetailComponent } from './components/campgrounds/campground.detail.component';
import { CampgroundFormComponent } from './components/campgrounds/campground.form.component';
import { UserComponent } from './components/user/user.component';
import { ProfileComponent } from './components/user/profile.component';
import { CommentFormComponent } from './components/campgrounds/comment.form.component';
import { AdminComponent } from './components/admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: 'index',
    component: CampgroundsComponent
  },
  {
    path: 'manual/detail/:id',
    component: CampgroundDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'manual/new',
    component: CampgroundFormComponent
  },
  {
    path: 'manual/detail/:id/edit',
    component: CampgroundFormComponent
  },
  {
    path: 'manual/detail/:id/comment/new',
    component: CommentFormComponent
  },
  {
    path: 'manual/detail/:id/comment/:comment_id/edit',
    component: CommentFormComponent
  },
  {
    path: 'login',
    component: UserComponent
  },
  {
    path: 'signup',
    component: UserComponent
  },
  {
    path: 'logout',
    component: UserComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '**',
    component: CampgroundsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
