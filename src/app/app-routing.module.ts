import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

const routes: Routes = 
[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
  //canActivate:[AuthGuardService] -- مثلا home بتاع ال routing دى معناها اى ف ال
  // AuthGuard ألى اسمها Service روح لل home بتاع ال route أل Activate معنا ان لما ت
  // ولا لأ login عامل user الى جواها وشوفلى هوا ال canActivatefn وبعدين خش عل ال
  //home مش ال login لل route دى هتخليه يعمل canActivatefn لو مش عامل ال
  {path:'movies',component:MoviesComponent,canActivate:[AuthGuardService]},
  {path:'tvshows',component:TvshowsComponent,canActivate:[AuthGuardService]},
  {path:'details/:type/:id',component:DetailsComponent},
  // : => بستخدم العلامه دى path استقبل فيه ف ال parameter عشان اعمل 
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
