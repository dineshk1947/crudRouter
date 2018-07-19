import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'product',
        component: ProductComponent
      },
      {
        path:'user-details',
        component: UserDetailsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
