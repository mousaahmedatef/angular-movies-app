import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  registerForm:FormGroup=new FormGroup({
    'first_name':new FormControl(null ,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'last_name':new FormControl(null ,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'email':new FormControl(null ,[Validators.required,Validators.email]),
    'password':new FormControl(null ,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)]),
  //null--> عندى input بلاقيها مكتوبه ف ال browser واول م بفتح ال default value دى مكتوبه عشان هوا ف اول انبوت بتكتب  
  //null يبقا مكتوب فيه حاجه وعايزه بinput  ف انا بقولو انى مش عايز ال
  })

  register(){
    if(this.registerForm.invalid){
      return; 
      //ويشيلها inspect هاكر يعمل disabled دى فكرتها ان ممكن هناك الزرار الي معمول 
      // vaild من الكود وبكدا بقا الزار شغا عادى وهيبعت ..ف انا بقولو لو حصل وجالك الفورم مش
      // يعني اطلع ومتكملش return ب ترو اعمل  invalid ب ان ال
    }
    this._AuthService.signUp(this.registerForm.value).subscribe((data)=>{
      if(data.message=='success'){
        //success لو الفورم تمت بنجاح بيتبقا ب message دا جواه حاجه اسمها  data اوبجيكت ال
        this._Router.navigateByUrl("/login");
      }else{
         alert(data.message);
         this.registerForm.reset();
      }
    })
  }
  constructor(private _AuthService: AuthService , private _Router:Router) { }

  ngOnInit(): void {
  }

}
