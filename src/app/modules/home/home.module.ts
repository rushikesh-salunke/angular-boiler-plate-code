import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
import { ProjectItemComponent } from './page/project-item/project-item.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, ProjectDetailsComponent, ProjectItemComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
