
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemListComponent } from './components/item-list/item-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { NgModule } from '@angular/core';
import { ItemService } from './services/item.service';
@NgModule({
  declarations: [AppComponent, ItemListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    FormsModule

  ],


  providers: [provideAnimationsAsync(),ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
