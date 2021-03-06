import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





export const appRoutes: Routes = [
  // Main redirect
  {path: '', redirectTo: 'home', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
