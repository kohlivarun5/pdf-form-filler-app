import { Component } from '@angular/core';
@Component({
templateUrl: 'i539.html'
})
export class I539 {

data = {
  currentGroup : 0,
  groups : [
    [
      {
        "label":"Family Name",
        "title": "form1[0].#subform[0].P1_Line3a_FamilyName[0]",
        "fieldType": "Text",
        "fieldFlags": "8388608",
        "fieldValue": ""
      },
      {
        "label":"Given Name",
        "title": "form1[0].#subform[0].P1_Line3b_GivenName[0]",
        "fieldType": "Text",
        "fieldFlags": "8388608",
        "fieldValue": ""
        }
    ]
  ]
}

currentGroup = 0;

  logForm() {
    console.log(this.data)
  }
}
