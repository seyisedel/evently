import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  public image:any;
  profile:any;
  first_name:any;
  last_name:any;
  phone:any;
  bio:any;
  imagePreview: any;
  constructor(
    private api:ApiService,
    private util:UtilService,
    private sheetCtrl:ActionSheetController,
    private camera:Camera,
    private translate:TranslateService,
    private change:ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.util.presentLoading();
    this.api.profileUpdate.subscribe((d) =>{
      if(d){
        this.api.getDataWithToken("profile").subscribe((success:any) => {
          if(success.success){
            this.profile = success.data;
            this.image = success.data.imagePath
            console.log(success.data);            
            this.util.dismissLoading();
          }
        },err => {
          console.log(err);
          this.util.dismissLoading();
        })
      }
    })
  }
  editProfile(){
    let tdata:any;
    this.translate.get("toasts").subscribe((d) => {
      tdata = d.editProfile;
    })
    this.util.presentLoading();
    const fd = new FormData();
    fd.append("first_name",this.first_name);
    fd.append("last_name",this.last_name);
    fd.append("phone",this.phone);
    fd.append("bio",this.bio);
    fd.append("country",localStorage.getItem("country") ? localStorage.getItem("country") : "");
    this.api.postDataWithToken("edit-profile",fd).subscribe((success:any) => {
      if(success.success){
        this.util.presentToast(tdata.profileChanged);
        this.util.dismissLoading();
        this.util.nav.navigateForward("/my-account");
        this.api.profileUpdate.next(true);
      }
    },err => {
      console.log(err);
      this.util.dismissLoading();      
    })
  }


  async albumSheet() {
    let tdata:any;
    this.translate.get("toasts").subscribe((d) => {
      tdata = d.editProfile;
    })
    const actionSheet = await this.sheetCtrl.create({
      header: 'Albums',
      mode: 'ios',
      cssClass: 'image-picker', 
      buttons: [{
        text: 'Gallery',
        icon: 'images-sharp',
        handler: () => {
          this.getGallery();
        }
      }, {
        text: 'Camera',
        icon: 'camera-sharp',
        handler: () => {
          this.getCamera();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }
  

  public getCamera():any {
    let tdata:any;
    this.translate.get("toasts").subscribe((d) => {
      tdata = d.editProfile;
    })
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }).then(file_uri => {
      this.image = "data:image/jpg;base64," + file_uri;
      this.imagePreview = file_uri;
      this.change.detectChanges();
      
      let data = {
        image:this.imagePreview
      }
      this.api.postDataWithToken('change-profile-image',data).subscribe((success:any) => {  
        if(success.success){
          this.util.presentToast(tdata.imageChanged);
          this.util.nav.navigateForward("/my-account")
          this.api.profileUpdate.next(true);  
        }
      }, err => {
        this.util.presentToast(tdata.someThingWent);
      })
    });
  }

  public getGallery():any {
    let tdata:any;
    this.translate.get("toasts").subscribe((d) => {
      tdata = d.editProfile;
    })
    this.camera.getPicture({ 
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
    }).then(file_uri => {
      this.image = "data:image/jpg;base64," + file_uri;
      this.imagePreview = file_uri;
      this.change.detectChanges();
      let data = {
        image:this.imagePreview
      }
      this.api.postDataWithToken('change-profile-image',data).subscribe((success:any) => {
        if(success.success){
          this.util.presentToast(tdata.image);
          this.util.nav.navigateForward("/my-account")
          this.api.profileUpdate.next(true);
        }
      }, err => {
        this.util.presentToast(tdata.someThing);
      })
    });
  }

}
