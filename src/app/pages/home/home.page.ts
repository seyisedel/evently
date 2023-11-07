import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NavController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  btn: any;
  select: any;
  events: any;
  events2: any;
  data: any;
  form: FormGroup;
  lan:any;
  constructor(
    private nav: NavController,
    private api: ApiService,
    private util: UtilService,
    private formBuilder: FormBuilder
  ) {

    this.api.profileUpdate.subscribe((d)=>{
      this.lan = localStorage.getItem("lan")
      if(localStorage.getItem("lan") == 'en'){
        this.select = 'Nearing'
      }else{
        this.select = 'تقترب';
      }
    })


   this.api.profileUpdate.subscribe((d)=>{
    this.util.menu.enable(true)
   })
    this.btn = [
      {
        name: "Nearing",
      },
      {
        name: "Past",
      },
      {
        name: "Draft",
      },
    ];
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
      return "";
    }
  }

  value: any;
  inputsss(e) {
    console.log(this.value);
  }

  search() {
    this.nav.navigateForward("search-orders");
  }

  homeDetails(id) {
    this.nav.navigateForward("event-details");
    this.api.eventId = id;
  }

  guestList(id) {
    this.api.guestId = id;
    this.nav.navigateForward("guest-list");
  }

  drafts(id) {
    this.api.id = id;
    this.nav.navigateForward("draft");
  }

  getUsersList(event) {
    this.ionViewWillEnter();
    event.target.complete();
  }

  ionViewWillEnter() {
    this.api.getDataWithToken("all-events").subscribe(
      (success: any) => {
        if (success.success) {
          this.data = success.data;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  segmentChanged(e) {
    this.select = e;
  }

  draft() {
    this.nav.navigateForward("draft");
  }
}
