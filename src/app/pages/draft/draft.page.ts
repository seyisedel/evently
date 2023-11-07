import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  ActionSheetController,
  ModalController,
  NavController,
  PopoverController,
} from "@ionic/angular";
import * as moment from "moment";
import { PopoverComponent } from "src/app/popover/popover.component";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { CalendarPage } from "../calendar/calendar.page";
import { EventCatPage } from "../event-cat/event-cat.page";
import { EventTypePage } from "../event-type/event-type.page";
import { PrivacyDraftPage } from "../privacy-draft/privacy-draft.page";
import { SelectEventTypePage } from "../select-event-type/select-event-type.page";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Address } from "ngx-google-places-autocomplete/objects/address";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-draft",
  templateUrl: "./draft.page.html",
  styleUrls: ["./draft.page.scss"],
})
export class DraftPage implements OnInit {
  public image:any;
  date: any;
  description: any;
  endDate: any;
  startTime: any;
  endTime: string;
  type: any;
  name: any;
  cat: any;
  privacy: any;
  startDate: any;
  data: any;
  catId: any;
  status: any;
  imagePreview: any = '';
  people: any;
  address: any;
  latitude: any;
  longitude: any;
  start_time: any;
  end_time: any;
  constructor(
    private popoverController: PopoverController,
    private modal: ModalController,
    private nav: NavController,
    public api: ApiService,
    public util: UtilService,
    public camera: Camera,
    private sheetCtrl: ActionSheetController,
    private translate:TranslateService,
    private change:ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.util.presentLoading();
    this.api.getDataWithToken("eventDetail/" + this.api.id).subscribe(
      (success: any) => {
        if (success.success) {
          this.data = success.data;
          this.data.date = moment(this.data.start_time).format("YYYY-MM-DD");
          this.data.endDate = moment(this.data.end_time).format("YYYY-MM-DD");
          this.start_time = moment(this.data.startTime, "hh:mm a").format(
            "HH:mm"
          );
          this.end_time = moment(this.data.endTime, "hh:mm a").format("HH:mm");
          this.date = this.data.date;
          this.image = this.data.imagePath + this.data.image;
          this.endDate = this.data.endDate;
          this.address = this.data.address;
          
          localStorage.setItem("start_date", this.date + " " + this.startTime);
          localStorage.setItem("end_date", this.endDate + " " + this.endTime);
          if (this.data.type == "offline") {
            this.type = "offline";
          } else {
            this.type = "online";
          }
          this.latitude = this.data.lat;
          this.longitude = this.data.lang;
          if (this.data.security == 1) {
            this.privacy = "Publish";
            this.status = 1;
          } else {
            this.privacy = "Draft";
            this.status = 0;
          }
          this.cat = this.data.category.name;
          this.catId = this.data.category.id;

          this.util.dismissLoading();
        }
      },
      (err) => {
        this.util.dismissLoading();
      }
    );
  }

  async albumSheet() {
    const actionSheet = await this.sheetCtrl.create({
      header: "Albums",
      mode: "ios",
      cssClass: "image-picker",
      buttons: [
        {
          text: "Gallery",
          icon: "images-sharp",
          handler: () => {
            this.getGallery();
          },
        },
        {
          text: "Camera",
          icon: "camera-sharp",
          handler: () => {
            this.getCamera();
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {},
        },
      ],
    });
    await actionSheet.present();
  }

  public getCamera(): any {
    this.camera
      .getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true,
      })
      .then((file_uri) => {
        this.image = "data:image/jpg;base64," + file_uri;
        this.imagePreview = file_uri;
        this.change.detectChanges();
      });
  }
  getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  deleteImage(id){
    console.log(id); 
    var parts = id.split('/');
    var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    console.log(lastSegment);

    this.util.presentLoading();
    let image = {
      image:lastSegment,
      id:this.data.id
    }
    this.api.postDataWithToken("remove-gallery",image).subscribe((success:any) =>{
      if(success.success){
        this.util.dismissLoading();
        this.ngOnInit();
      }
    },err =>{
      console.log(err);
      this.util.dismissLoading();
    })
  }

  public getGallery(): any {
    this.camera
      .getPicture({
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true,
      })
      .then((file_uri) => {
        this.image = "data:image/jpg;base64," + file_uri;
        this.imagePreview = file_uri;
        this.change.detectChanges();
      });
  }
  imagesArray:any=[];
  imageUri:any=[];
  public images(){
    this.camera
    .getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
    })
    .then((file_uri) => {
      this.imagesArray.push("data:image/jpg;base64," + file_uri);
      this.imageUri.push(file_uri);
      console.log(this.imageUri);
      
    });
  }

  homeDetails(id){
    this.nav.navigateForward("event-details");
    this.api.eventId = id;
  }

  select() {
    this.nav.navigateForward("tickets");
  }

  async presentPopover(ev: any,id) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: "my-custom-class",
      event: ev,
      translucent: true,
    });
    this.api.evnetDeleId = id;
    return await popover.present();
  }
  test: any = "";
  async typeModal() {
    const modal = await this.modal.create({
      component: EventTypePage,
      cssClass: "eventType",
    });
    modal.onDidDismiss().then((res) => {
      this.test = res.data ? res.data : "Venue";
      if (this.test == "Venue") {
        this.type = "offline";
      } else {
        this.type = "online";
      }
    });
    return await modal.present();
  }
  async selectCat() {
    const modal = await this.modal.create({
      component: EventCatPage,
      cssClass: "event-cat",
    });
    modal.onDidDismiss().then((res) => {
      this.cat = res.data.name;
      console.log(res.data.id);
      this.catId = res.data.id;
    });
    return await modal.present();
  }

  async privacyPoli() {
    const modal = await this.modal.create({
      component: PrivacyDraftPage,
      cssClass: "privacy-draft",
    });
    modal.onDidDismiss().then((res) => {
      this.privacy = res.data ? res.data : "Publish";
      if (this.privacy == "Publish") {
        this.status = 1;
      } else {
        this.status = 0;
      }
    });
    return await modal.present();
  }
  async presentModal(e) {
    const modal = await this.modal.create({
      component: CalendarPage,
      cssClass: "calendar",
    });
    modal.onDidDismiss().then((res) => {
      if (e == "start") {
        this.date = res.data ? res.data : this.date;
        console.log(res.data);
        localStorage.setItem("date", res.data);
      } else {
        this.endDate = res.data ? res.data : this.endDate;
        console.log(res.data);
        localStorage.setItem("endDate", res.data);
      }
    });
    return await modal.present();
  }


  async selectEventType() {
    const modal = await this.modal.create({
      component: SelectEventTypePage,
      cssClass: "select-event-type",
    });
    return await modal.present();
  }

  public handleAddressChange(address: Address) {
    let dataOfAddress = {
      name: address.name,
      address: address.formatted_address,
      lat: address.geometry.location.lat(),
      lang: address.geometry.location.lng(),
    };
    this.address = address.formatted_address;
    this.latitude = address.geometry.location.lat();
    this.longitude = address.geometry.location.lng();
  }

  go() {
    let tdata:any;
    this.translate.get("toasts").subscribe((s) => {
      tdata = s.create;
    })
    const fd = new FormData();
    fd.append("id", this.api.id);
    fd.append("name", this.name);
    if(this.imagePreview != ''){
      fd.append("image", this.imagePreview);
    }
    fd.append("start_date", this.date);
    fd.append("end_date", this.endDate);
    fd.append("start_time", moment(this.start_time, "HH:mm").format("hh:mm a"));
    fd.append("end_time", moment(this.end_time, "HH:mm").format("hh:mm a"));
    fd.append("category_id", this.catId);
    fd.append("type", this.type);
    fd.append("address", this.type == 'offline' ?  this.address : "");
    fd.append("lat",this.type == "offline" ?  this.latitude : "");
    fd.append("lang", this.type == "offline" ? this.longitude : "");
    fd.append("status", this.status);
    fd.append("people", this.people);
    fd.append("description", this.description);
    if(this.imageUri.length > 0){
      fd.append("gallery",JSON.stringify(this.imageUri))
    }
    if (this.type == "offline") {
      if (this.address == "") {
        this.util.presentToast(tdata.address);
      }
    }
    this.util.presentLoading();
    this.api.postDataWithToken("edit-event", fd).subscribe(
      (success: any) => {
        if (success.success) {
          this.util.presentToast(tdata.eventAddedd);
          this.util.nav.navigateForward("home");
          this.util.dismissLoading();
        }
      },
      (err) => {
        this.util.dismissLoading();
      }
    );
  }
}
