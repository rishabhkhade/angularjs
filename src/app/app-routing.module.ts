import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  {
    path:"listing",
    component:ListingComponent
  },

  {
    path:"form",
    component:FormComponent
  },

  {path: '', redirectTo:'/listing', pathMatch:'full'},
  
  {path:'', redirectTo:"/form", pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
