import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(): boolean | Observable<boolean> 
  {
    let token = localStorage.getItem("token")
    if(token){
      //هيبقا ب ترو وهيخش condition دى فيها قيمه  يبقا كدا اليوز عمل لوجبن وكمل عادى وال token هنا بقولو لو ال
      //وهيكمل if ومش هيخش ال false لكن لو مفيهاش قيمه هيبقا ب 
      return true;
    }
    // هنا انا بقولو كدا انتا معملتش لوجين وارجع ل اللوجين تانى
    this._Router.navigateByUrl("/login");
    return false;
    
  }

  constructor(private _Router:Router) { }
}
