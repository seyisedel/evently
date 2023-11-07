import { Component, QueryList, ViewChildren } from '@angular/core';
import { IonRouterOutlet, MenuController, NavController, Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { UtilService } from './services/util.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  profile: any;
  appVersion: string;
  lan: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nav:NavController,
    private menu:MenuController,
    private router:Router,
    private toastController:ToastController,
    private api:ApiService,
    private util:UtilService,
    private oneSignal:OneSignal,
    private translate:TranslateService
  ) {
    this.appVersion = localStorage.getItem("app_version");
    this.initializeApp();
   /*  console.log = function () {}; */
   if (localStorage.getItem("lan")) {
    this.translate.setDefaultLang(localStorage.getItem("lan"));
    if (localStorage.getItem('lan') == "ar") {
      document.documentElement.dir = "rtl";
      localStorage.setItem("languageSpecific","عربى");
      this.api.profileUpdate.next(true)
    }
    if (localStorage.getItem('lan') == "en") {
      document.documentElement.dir = "ltr";
      localStorage.setItem("languageSpecific","English");
      this.api.profileUpdate.next(true)
    }
    } else {
    this.translate.setDefaultLang("en");
    localStorage.setItem("lan", "en");
    document.documentElement.dir = "ltr";
    localStorage.setItem("languageSpecific","English");
    this.api.profileUpdate.next(true)
    }
    let token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
    if(token == ''){
      this.nav.navigateRoot("login");
    }else{
      this.nav.navigateRoot("home");
    }
 
    this.api.profileUpdate.subscribe((d) =>{
      if(d){
        this.lan = localStorage.getItem("lan");
        console.log('event reciced');
        this.api.getDataWithToken("profile").subscribe((success:any) => {
          if(success.success){
            this.profile = success.data;
            console.log(success.data);            
          }
        },err => {
          console.log(err);
          
        })
      }
      this.api.getDataWithToken("profile").subscribe((success:any) => {
        if(success.success){
          this.profile = success.data;
          console.log(success.data);            
        }
      },err => {
        console.log(err);
        
      })
    })
   
  }


  log(){
    this.menu.close();
    this.nav.navigateForward("/login");
    localStorage.clear();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString("#FEC009");
      this.splashScreen.hide();
      this.backButtonEvent();
    });


    setTimeout(() => {
      this.api.getData("setting").subscribe(
        (res: any) => {
          console.log("key", res);
          if (res.success) {
            localStorage.setItem("currency_symbol", res.data.currency_symbol);
            localStorage.setItem("currency", res.data.currency);

            if (this.platform.is("cordova")) {
              this.oneSignal.startInit(
                res.data.or_onesignal_app_id,
                res.data.or_onesignal_project_number
              );
              this.oneSignal
                .getIds()
                .then((ids) => (this.api.deviceToken = ids.userId));
              console.log(
                "one signal",
                this.oneSignal
                  .getIds()
                  .then((ids) => (this.api.deviceToken = ids.userId))
              );
              this.oneSignal.endInit();
            } else {
              this.api.deviceToken = null;
            }
          }
        },
        (err) => {}
      );
    }, 2000);
  }

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (
          this.router.url === "/home" ||
          this.router.url === "/login" ||
          this.router.url === "/event-setting" ||
          this.router.url === "/search-orders" ||
          this.router.url === "/settings"
        ) {
          if (
            new Date().getTime() - this.lastTimeBackPress <
            this.timePeriodToExit
          ) {
            navigator["app"].exitApp();
          } else {
            this.showToast();
            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
    });
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: "Press again close to EventBrite",
      duration: 2000,
      mode: "ios",
      cssClass: "my-toast",
    });
    toast.present();
  }


  gotoProfile(){
    this.menu.close();
    this.nav.navigateForward("my-account")
  }

  pages:any = [
    {
      icon:"../assets/sidemenu/home.svg",
      name:"Home",
      url:"/home"
    },
    {
      icon:"../assets/sidemenu/balloon.svg",
      name:"Event Settings",
      url:"/event-setting"
    },
    {
      icon:"../assets/sidemenu/balloon.svg",
      name:"Coupons",
      url:"/coupon"
    },
    {
      icon:"../assets/sidemenu/balloon.svg",
      name:"Followers",
      url:"/followers"
    },
    {
      icon:"../assets/sidemenu/search (1).svg",
      name:"Search Events",
      url:"/search-orders"
    },
    {
      icon:"../assets/sidemenu/balloon.svg",
      name:"Notification",
      url:"/notification"
    },
    {
      icon:"../assets/sidemenu/settings.svg",
      name:"Settings",
      url:"settings/" 
    }
  ]
}
