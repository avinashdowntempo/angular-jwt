import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProtectedComponentComponent } from "./protected-component/protected-component.component";
import { UnprotectedComponentComponent } from "./unprotected-component/unprotected-component.component";
import { AuthGuardGuard } from "./auth-guard.guard";
import { LoginGuardGuard } from "./login-guard.guard";

const routes: Routes = [
  {
    path: "unprotected",
    component: UnprotectedComponentComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: "Dashboard",
    component: UnprotectedComponentComponent
  },
  {
    path: "Queue",
    component: UnprotectedComponentComponent,
    children: [
      {
        path: "Active",
        component: UnprotectedComponentComponent
      },
      {
        path: "History",
        component: UnprotectedComponentComponent
      },
      {
        path: "Manage",
        component: UnprotectedComponentComponent
      },
      {
        path: "",
        redirectTo: "/Queue/Active",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "CRM",
    component: UnprotectedComponentComponent
  },
  {
    path: "Leaderboards",
    component: UnprotectedComponentComponent,
    children: [
      {
        path: "Recruits",
        component: UnprotectedComponentComponent
      },
      {
        path: "1st checks",
        component: UnprotectedComponentComponent
      },
      {
        path: "",
        redirectTo: "/Leaderboards/1st checks",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "Maintanence",
    component: UnprotectedComponentComponent
  },
  {
    path: "Commisions",
    component: UnprotectedComponentComponent
  },
  // {
  //   path: "protected",
  //   component: ProtectedComponentComponent,
  //   canActivate: [AuthGuardGuard]
  // },
  { path: "", redirectTo: "/Dashboard", pathMatch: "full" },
  { path: "**", redirectTo: "/unprotected", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
