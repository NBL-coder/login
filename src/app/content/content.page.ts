import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { FcmService } from '../services/fcm.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor(
    private router:Router,
    private platform: Platform,
    private fcmService: FcmService
    ) {
      this.initializeApp();  
    }

  ngOnInit() {
  }
  back(){
    this.router.navigateByUrl("home");
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Trigger the push setup
      this.fcmService.initPush();
    });
  }
}
