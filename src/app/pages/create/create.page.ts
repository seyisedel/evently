import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Address } from "ngx-google-places-autocomplete/objects/address";
import * as moment from 'moment';

import { CalendarPage } from '../calendar/calendar.page';
import { EventTypePage } from '../event-type/event-type.page';
import { EventCatPage } from '../event-cat/event-cat.page';
import { PrivacyDraftPage } from '../privacy-draft/privacy-draft.page';
import { Camera } from '@ionic-native/camera/ngx';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  default:any = 'Setup';
  length:any = '';
  startDate:any = '';
  default2:any = '';
  default3:any = '';
  date: any = '';
  endDate: any = '';
  startTime: any = '';
  name:any = '';
  endTime: any = '';
  latitude: any;
  longitude: any;
  public images:any = "../../../assets/general_Images/camera.png";
  public image:string='../../../assets/general_Images/camera.png';
  cat:any = 'Select Event Category';
  privacy:any ='Publish';
  imagePreview: any = '';
  catId: any = '';
  people:any = '';
  address: any = '';
  status: any = '1';
  type: any = 'offline';
  form: FormGroup;
  tags: any;
  
  constructor(
    public modal:ModalController,
    private nav:NavController,
    private camera:Camera,
    private sheetCtrl:ActionSheetController,
    private util:UtilService,
    private api:ApiService,
    private formBuilder:FormBuilder,
    private translate:TranslateService,
    private change:ChangeDetectorRef
    ) {
      
    this.form = this.formBuilder.group({
      code: [],
      tags: [[]],
    });
    
   }
  upload(form) {
    console.log(form.tags);
    form.tags = this.tagArrayToString(form.tags);
    console.log(form.tags);    
  }

  tagArrayToString(tagArray: string[]): string {
    if (Array.isArray(tagArray) && tagArray.length > 0) {
      const tags = tagArray.map((e: any) => `[${e.value}]`);
      const tagString = tags.join();
      return tagString;
    } else {
      return '';
    }
  }

  
  go(){
    let tdata:any;
    this.translate.get("toasts").subscribe((d) =>{
      tdata = d.create;
    })
    if(this.catId == ''){
      this.util.presentToast(tdata.cate);
    }else if(this.people == ''){
      this.util.presentToast(tdata.peoples) ;
    }else{
      let fd = {
        name:this.name,
        tags:this.tags,
        image:this.imagePreview,
        start_date:this.date,
        end_date:this.endDate,
        category_id:this.catId,
        type:this.type,
        address:this.address,
        lat:this.latitude,
        lang:this.longitude,
        status:this.status,
        people:this.people,
        description:this.length,
        start_time:this.startTime,
        end_time:this.endTime
      }
      console.log(fd);  
      console.log(this.type,this.address);
      if(this.type == 'offline'){
        if(this.address == ''){
          this.util.presentToast(tdata.address)
        }
      }
  
      this.util.presentLoading();
      this.api.postDataWithToken("add-event",fd).subscribe((success:any) => {
        if(success.success){
          this.util.presentToast(tdata.eventAddedd);
          this.util.nav.navigateForward("home")
          this.util.dismissLoading();
        }
      },err => {
        console.log(err);
        this.util.dismissLoading();
      })
    }
  }
  imagep:any ='';
  isImgChange:any=false;
  ngOnInit() {
    

  }
  ionViewWillEnter(){
    this.default2 = '';
    this.default3 = '';
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
      
      this.imagePreview = file_uri
      this.isImgChange = true;
      this.image = "data:image/jpg;base64," + file_uri;
      this.change.detectChanges();
      
    });
  }

  public getGallery():any {
    this.camera.getPicture({ 
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
    }).then(file_uri => {
      this.imagePreview = file_uri;
      this.isImgChange = true;
      this.image = "data:image/jpg;base64," + file_uri;
      this.change.detectChanges();
      
    });
  }
  saveData(){
    this.default = 'Setup';
    this.default2 = 'Save';
  }

  saveData2(form){
    this.default3 = 'Done';
   console.log(form.tags);
   console.log(form.tags);    
   this.tags = form.tags;
   console.log(this.tags);
   
  }

  async presentModal(e) {
    const modal = await this.modal.create({
      component: CalendarPage,
      cssClass: "calendar",
    });
    modal.onDidDismiss().then((res) => {
      if(e == 'start'){
        this.date = res.data ? res.data : "Date";
        console.log(res.data);      
        localStorage.setItem("date", res.data);
      }else{
        this.endDate = res.data ? res.data : "Date";
        console.log(res.data);      
        localStorage.setItem("endDate", res.data);
      }
    });
    return await modal.present();
  }

test:any = 'Venue';
  check(e){
    console.log('click..',e.detail.value);
    console.log(moment(e.detail.value).format('hh:mm A'));
    this.startTime =moment(e.detail.value).format('hh:mm A')
  }
  check2(e){
    console.log('click..',e.detail.value);
    console.log(moment(e.detail.value).format('hh:mm A'));
    this.endTime = moment(e.detail.value).format('hh:mm A');
  }

  saveData3(){
    this.nav.navigateForward("home");
  } 

  async typeModal(){
    const modal = await this.modal.create({
      component:EventTypePage,
      cssClass:"eventType"
    });
    modal.onDidDismiss().then((res) => {
      this.test = res.data ? res.data : "Venue";
      if(this.test == 'Venue'){
          this.type = 'offline'
      } else{
        this.type = 'online'
      }
    })
    return await modal.present();
  }
  async selectCat(){
    const modal =  await this.modal.create({
      component:EventCatPage,
      cssClass:"event-cat"
    });
    modal.onDidDismiss().then((res) => {
      this.cat = res.data.name;
      console.log(res.data.id);  
      this.catId = res.data.id    
    })
    return await modal.present();
  }

  async privacyPoli(){
    const modal = await this.modal.create({
      component:PrivacyDraftPage,
      cssClass:"privacy-draft"
    });
    modal.onDidDismiss().then((res) => {
      this.privacy = res.data ? res.data : "Publish"
      if(this.privacy == 'Publish'){
        this.status = 1
      }else{
        this.status = 0;
      }
    })
    return await modal.present();
  }

  public handleAddressChange(address: Address) {
    let dataOfAddress = {
      name: address.name,
      address: address.formatted_address,
      lat:address.geometry.location.lat(),
      lang:address.geometry.location.lng()
    };
    this.address = address.formatted_address
    console.log(dataOfAddress);    
      this.latitude = address.geometry.location.lat();
      this.longitude = address.geometry.location.lng();
  }

  




}
