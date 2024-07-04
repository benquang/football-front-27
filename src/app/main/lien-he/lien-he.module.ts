import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { routes } from './lien-he.routing';

// export const pluginsModules = [];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // pluginsModules,
    // Routes
    RouterModule.forChild(routes),
  ],
})
export class LienHeModule { }
