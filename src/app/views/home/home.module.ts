import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { HomeRoutingModule } from './home-routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
// import { MatCarouselModule } from '@ngmodule/material-carousel';


import { HomeService } from './home.service';
import { ModalAttackComponent } from './modal-attack/modal-attack.component';



@NgModule({
  declarations: [HomeComponent, CardDetailsComponent, ModalAttackComponent],
  imports: [
  CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    // MatCarouselModule.forRoot(),
  ], exports: [HomeComponent, CardDetailsComponent, ModalAttackComponent],
  providers: [HomeService]
})
export class HomeModule { }
