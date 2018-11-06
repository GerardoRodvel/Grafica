import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import { NgModule } from '@angular/core';
//importaciones
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';



// @NgModule Es para crear un modulo de angular y hay que importar angular/core
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule,MatInputModule,MatRadioModule,MatCardModule,MatChipsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule,MatInputModule,MatRadioModule,MatCardModule,MatChipsModule],
})

export class MaterialModule { }