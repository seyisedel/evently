import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-setup-profile',
  templateUrl: './setup-profile.page.html',
  styleUrls: ['./setup-profile.page.scss'],
})
export class SetupProfilePage implements OnInit {
  public icon:any = "../../../assets/svg_icon/back.svg";
  public images:any = "../../../assets/general_Images/camera.png";
  startDate:any;
  public image:any = '';
  name:any = '';
  imagePreview: any;
  constructor(private nav:NavController,private api:ApiService,private util:UtilService,private camera:Camera,private sheetCtrl:ActionSheetController) { }

  ngOnInit() {
  }

  login(){
    this.nav.navigateForward("/home")
  }
  create(){
    this.util.presentLoading();
    const fd = new FormData();
    fd.append("image",this.image);
    fd.append("name",this.name)
    this.api.postDataWithToken("set-profile",fd).subscribe((success:any) => {
      if(success.success){
        this.util.dismissLoading();
        this.nav.navigateRoot("/home");
      }
    },err => {
      console.log(err);   
      this.util.dismissLoading();
    })
  }


  async albumSheet() {
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
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }).then(file_uri => {
      this.image = "data:image/jpg;base64," + file_uri;
      this.imagePreview = file_uri
    });
  }

  public getGallery():any {
    this.camera.getPicture({ 
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
    }).then(file_uri => {
      this.image = "data:image/jpg;base64," + file_uri;
      this.imagePreview = file_uri
    });
  }

}
