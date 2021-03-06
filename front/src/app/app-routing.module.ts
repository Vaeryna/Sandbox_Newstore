import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateStoreComponent} from './create-store/create-store.component';

import {HomeComponent} from './home/home.component';
import {ChooseNameComponent} from "./choose-name/choose-name.component";
import {CreateProductComponent} from "./create-product/create-product.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'createStore', component: CreateStoreComponent},
  {path: 'createMag', component: ChooseNameComponent},
  {path: 'createProduct', component: CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
