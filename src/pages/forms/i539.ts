import { Component } from '@angular/core';
@Component({
templateUrl: 'i539.html'
})
export class I539 {
fields = [
    {
      label:"Family Name",
      value:"",
      pdf_field:""
    },
    {
      label:"Given Name",
      value:"",
      pdf_field:""
    },
  ]
  logForm() {
    console.log(this.fields)
  }
}
