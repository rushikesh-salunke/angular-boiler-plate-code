import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
import { ProjectItemComponent } from './page/project-item/project-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
  { path: 'project-item', component: ProjectItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
