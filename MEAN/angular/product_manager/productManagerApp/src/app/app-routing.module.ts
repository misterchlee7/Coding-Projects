import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'home',component: HomeComponent },
  { path: 'product_list',component: ProductListComponent },
  { path: 'product_creation',component: ProductCreationComponent },
  { path: 'edit/:id',component: EditProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
