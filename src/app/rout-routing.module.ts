import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./auth.guard";
import { ActiveChild } from "./authactivechild.guard";
import { SonComponent } from "./son/son.component";
import { DecativateComponent } from "./decativate/decativate.component";
import { CanDeactivateGuard } from "./deactive.guard";

// canactive Rout guard

// const rout:Routes=[
//         { path: 'login', component: LoginComponent },
//         { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
//         { path: '', redirectTo: '/login', pathMatch: 'full' },
    
// ]

// canactivatedchild Rout guard

const rout:Routes=[
        { path: 'login', component: LoginComponent },
        {
            path: 'dashboard',
            component:DashboardComponent,
            canActivateChild: [ActiveChild], // Use CanActivateChild here
            children: [
              { path: 'son', component: SonComponent },
              // Other child routes...
            ],
          },
        { path: '', redirectTo: '/login', pathMatch: 'full' },
    
]


// deactivate rout guard

// const rout:Routes=[
//   { path: 'login', component: LoginComponent },
//   {
//     path: 'unsaved-changes',
//     component: DecativateComponent,
//     canDeactivate: [CanDeactivateGuard],
//   },

// ]




@NgModule({
    imports:[RouterModule.forRoot(rout)],
    exports:[RouterModule]
})

export class RoutModule{

}