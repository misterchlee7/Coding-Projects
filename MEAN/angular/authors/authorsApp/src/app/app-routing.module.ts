import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { TableComponent } from './table/table.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '',component: TableComponent },
  { path: 'new',component: NewComponent },
  { path: 'edit/:id',component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
