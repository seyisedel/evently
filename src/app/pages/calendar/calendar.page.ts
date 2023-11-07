import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  dateToBook: any;
  today: string;
  constructor(private modal:ModalController) { 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    let date = mm + '/' + dd + '/' + yyyy;
    console.log('today',date); 
    this.today = date
  }

  date: string;
  type: 'string';
  ngOnInit() {
  }
  onSelect($event) {
  }
  onChange($event) {
    this.dateToBook =  $event.format('YYYY-MM-DD');
  }

  ok(){
    this.modal.dismiss(this.dateToBook);
  }
 

  optionsRange: CalendarComponentOptions = {
    monthPickerFormat:['JAN']
  }
}
