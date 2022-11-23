import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'auth/sign-in', component: SignInComponent },
    { path: 'auth/sign-up', component: SignUpComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule { }