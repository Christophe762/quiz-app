import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Quiz } from './components/quiz/quiz';
import { Results } from './components/results/results';

const routes: Routes = [
  {path: '', component:Quiz},
  {path:'results', component:Results}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
