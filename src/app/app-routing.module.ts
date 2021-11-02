import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UserConfigComponent } from './pages/user-config/user-config.component'
import { UsersComponent } from './pages/users/users.component'

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user-config/:id', component: UserConfigComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
