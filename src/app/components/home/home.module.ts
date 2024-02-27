import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CardProjectComponent } from './card-project/card-project.component';
import { ProjectComponent } from './project/project.component';

export function HttpLoaderFactory(http: HttpClient){

}



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CardProjectComponent,
    ProjectComponent,
  ],
  imports: [
    CommonModule,
    NgbNavModule,
  ]
})
export class HomeModule { }