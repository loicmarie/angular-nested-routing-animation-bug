import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'a',
    pathMatch: 'full'
  },
  {
    path: 'a',
    data: { animation: 'A' },
    component: AComponent
  },
  {
    path: 'b',
    data: { animation: 'B' },
    component: BComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
