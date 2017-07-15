import { Component } from '@angular/core';

function getValue(val) {
  if(val === true){
    return 'Yes';
  }else if(val === false) {
    return 'Off';
  }
  return val;
};

function convFieldJson2FDF(fields,ret) {
  fields.map(function({title,fieldValue}) {
    var val = getValue(fieldValue);
    if (!(val === null || val === undefined || val === ""))
    {
      ret[title] = getValue(fieldValue);
    }
  });
};



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
  },
  {
    "label" : "Middle Name", "optional" : true,
    "title": "form1[0].#subform[0].P1_Line3c_MiddleName[0]",
    "fieldType": "Text",
    "fieldFlags": "8388608",
    "fieldValue": ""
  },
],
[
  {
    "label" : "In Care of",
    "title": "form1[0].#subform[0].P1_Line4a_InCareOfName[0]",
    "fieldType": "Text",
    "fieldFlags": "8388608",
    "fieldValue": ""
  },
  {
    "label" : "Street Number",
    "title": "form1[0].#subform[0].P1_Line4b_StreetNumberName[0]",
    "fieldType": "Text",
    "fieldFlags": "8388608",
    "fieldValue": ""
  },
  // {
  //   "label" : "Unit
  //   "title": "form1[0].#subform[0].P1_Line4c_Unit[0]",
  //   "fieldType": "Button",
  //   "fieldFlags": "0",
  //   "fieldValue": ""
  // },
  // {
  //   "title": "form1[0].#subform[0].P1_Line4c_Unit[1]",
  //   "fieldType": "Button",
  //   "fieldFlags": "0",
  //   "fieldValue": ""
  // },
  {
    "label" : "Apt/Suite/Floor",
    "title": "form1[0].#subform[0].P1_Line4c_AptSteFlrNumber[0]",
    "fieldType": "Text",
    "fieldFlags": "1",
    "fieldValue": ""
  },
  // {
  //   "title": "form1[0].#subform[0].P1_Line4c_Unit[2]",
  //   "fieldType": "Button",
  //   "fieldFlags": "0",
  //   "fieldValue": ""
  // },
  {
    "label" : "City/Town",
    "title": "form1[0].#subform[0].P1_Line4d_CityOrTown[0]",
    "fieldType": "Text",
    "fieldFlags": "8388608",
    "fieldValue": ""
  },
]

]

}

onDone() {
  console.log(this.data)

  var ret = {};
  this.data.groups.map(function(group) {
    convFieldJson2FDF(group,ret);
  });
  
  console.log(ret);
}

submit() {
  if (this.data.currentGroup === (this.data.groups.length - 1)) {
    this.onDone()
  } else {
    this.data.currentGroup++
  }
}

}
