import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-date-dropdown',
  templateUrl: './date-dropdown.component.html',
  styleUrls: ['./date-dropdown.component.css']
})
export class DateDropdownComponent implements OnInit {

  items:any = [];
  date:any ;
  dateRange:any ;
  DROP_DOWN_COUNTER:number = 8;
  useSelectDateRageOption:boolean = false;

  constructor() { }

  ngOnInit() {
    this.populateDropDownValues();
  }

  populateDropDownValues(){
    let date:Date = new Date();
    let year = date.getFullYear();
    for(let i=1; i<= this.DROP_DOWN_COUNTER; i++ ){
      if(i == 1){
        this.items.push('Year-To-Date');
        if(!this.date){
          this.date = this.items[0];
        }        
      }else{
        this.items.push(year+1-i);
      }
    }
    this.items.push('Custom Date Range');
  }

  selected(val: any){
    if(this.date == 'Year-To-Date'){
      this.useSelectDateRageOption = false;
      val = new Date().getFullYear();
      this.processSelectedDate(val);      
    }else if(this.date == 'Custom Date Range'){
      this.useSelectDateRageOption = true;
    }else{
      this.useSelectDateRageOption = false;
      this.processSelectedDate(val);
    }    
  }

  processSelectedDate(val:any){
    let selectedStartDate:Date = new Date(val,0,1);
    let selectedEndDate:Date = new Date(val,0,1);
    selectedEndDate.setFullYear(selectedEndDate.getFullYear()+1);
    selectedEndDate.setTime(selectedEndDate.getTime()-(1000 * 3600 * 24));

    if(this.isFutureDate(selectedEndDate)){
      selectedEndDate = new Date();
      //selectedEndDate.setTime(selectedEndDate.getTime()-(1000 * 3600 * 24));
    }

    console.log("selectedStartDate: "+selectedStartDate)
    console.log("selectedEndDate: "+selectedEndDate)

    let displayStartDate = this.getDisplayableDate(selectedStartDate);
    let displayEndtDate = this.getDisplayableDate(selectedEndDate);

    this.dateRange = displayStartDate + ' - '+displayEndtDate;
  }
  
  getDisplayableDate(date:Date){
    var datePipe = new DatePipe('en-US');
    return datePipe.transform(date, 'MMM dd, yyyy');
  }

  isFutureDate(date: Date){
    let currDate: Date = new Date();
    if(date.getTime() > currDate.getTime() ){
      return true;
    }
    return false;
  }
}
