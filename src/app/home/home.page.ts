import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { OnpageserviceService } from '../services/onpageservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  AuthenWatcher: any;

  username: any;
  role: any;

  isLogin: any;
  constructor(
    private authen:AuthenticationService,
    private changeRef: ChangeDetectorRef,
    private router:Router
    ) {
    this.AuthenWatcher = OnpageserviceService.isAuthenticated.subscribe(data =>{
      var isLogin = data == "1";
      if(isLogin){
        this.username = localStorage.getItem("UserName");
        this.role = localStorage.getItem("Role");
      }
      else{
        this.username = "anonymous";
        this.role = "guest";
      }
      this.isLogin = isLogin;
      this.changeRef.detectChanges();
    });
  }
  login(){
    this.router.navigateByUrl("login");
  }
  logout(){
    this.authen.logout();
  }
  content(){
    this.router.navigateByUrl("content");
  }
}
