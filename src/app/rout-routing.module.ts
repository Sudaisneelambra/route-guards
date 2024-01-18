import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./auth.guard";

const rout:Routes=[
        { path: 'login', component: LoginComponent },
        { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
        { path: '', redirectTo: '/login', pathMatch: 'full' },
    
]

@NgModule({
    imports:[RouterModule.forRoot(rout)],
    exports:[RouterModule]
})

export class RoutModule{

}