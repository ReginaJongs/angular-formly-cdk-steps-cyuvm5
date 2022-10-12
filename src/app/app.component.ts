import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [{
    type: 'stepper',  //'tabs'
    
    //計劃書內容
    fieldGroup: [
      {//page0
        templateOptions: { label: '主頁與標題'},
        fieldGroup: [
          {
            key: 'ProjTitle',
            type: 'input',
            templateOptions: {
              label: '計畫標題',
              required: true,  maxWordCount: 1, rows: 5
            },
          },
          {
            key: 'ProjVer',
            type: 'input',
            templateOptions: {
              label: '計畫版本',
              placeholder: '例如:1.00',
              required: false,
            },
          },
          {
            key: 'ProjDate',
            type: 'input', 
            templateOptions: {
              label: '計畫日期',
              type: 'date',
              required: true,
            },
          },
        ],
      },
      {//page1
        templateOptions: { label: '聯絡資訊' },
        fieldGroup: [
          //計畫聯絡人
          {
            key: 'Sponsor',
            type: 'input',
            templateOptions: {
              label: '試驗委託廠商/試驗機構',
              required: false,
            },
          },
          {
            key: 'ContactRole',
            type: 'input',
            templateOptions: {
              label: '聯絡人角色',
              required: false,
            },
          },
          {
            key: 'ContactPos',
            type: 'input',
            templateOptions: {
              label: '聯絡人單位/職稱',
              required: false,
            },
          },
          {
            key: 'ContactAddr',
            type: 'input',
            templateOptions: {
              label: '聯絡人地址',
              required: false,
            },
          },
          {
            key: 'Sponsor',
            type: 'input',
            templateOptions: {
              label: '試驗委託廠商/試驗機構',
              required: false,
            },
          },
          {
            key: 'ContactOfficialPhone',
            type: 'input',
            templateOptions: {
              label: '聯絡人辦公室電話',
              required: false,
            },
          },
          {
            key: 'ContactCellPhone',
            type: 'input',
            templateOptions: {
              label: '聯絡人手機',
              required: false,
            },
          },
          {
            key: 'ContactFAX',
            type: 'input',
            templateOptions: {
              label: '聯絡人傳真',
              required: false,
            },
          },
          {
            key: 'ContactEMail',
            type: 'input',
            templateOptions: {
              label: '聯絡人電子郵件信箱',
              required: false,
            },
          },
          //試驗機構
          {
            key: 'Org',
            type: 'input',
            templateOptions: {
              label: '試驗機構名稱',
              required: false,
            },
          },
          {
            key: 'OrgAddr',
            type: 'input',
            templateOptions: {
              label: '試驗機構地址',
              required: false,
            },
          },
          {
            key: 'OrgOther', 
            type: 'input',
            templateOptions: {
              label: '其他試驗機構名稱',
              required: false,
            },
          },
          {
            key: 'OrgAddrOther',
            type: 'input',
            templateOptions: {
              label: '其他試驗機構地址',
              required: false,
            },
          },
          //計畫主持人
          {
            key: 'ManagerRole',
            type: 'input',
            templateOptions: {
              label: '主持人角色',
              required: false,
            },
          },
          {
            key: 'Manager',
            type: 'input',
            templateOptions: {
              label: '主持人姓名',
              required: false,
            },
          },
          {
            key: 'ManagerPos',
            type: 'input',
            templateOptions: {
              label: '主持人單位/職稱',
              required: false,
            },
          },
          {
            key: 'ManagerAddr',
            type: 'input',
            templateOptions: {
              label: '主持人地址',
              required: false,
            },
          },
          {
            key: 'ManagerOfficialPhone',
            type: 'input',
            templateOptions: {
              label: '主持人辦公室電話',
              required: false,
            },
          },
          {
            key: 'ManagerCellPhone',
            type: 'input',
            templateOptions: {
              label: '主持人手機',
              required: false,
            },
          },
          {
            key: 'ManagerFAX',
            type: 'input',
            templateOptions: {
              label: '主持人傳真',
              required: false,
            },
          },
          {
            key: 'ManagerEMail',
            type: 'input',
            templateOptions: {
              label: '主持人電子郵件信箱',
              required: false,
            },
          },
          //其他人員(機動性新增)
          {
            key: 'StaffRole',
            type: 'input',
            templateOptions: {
              label: '其他人員角色',
              required: false,
            },
          },
          {
            key: 'Staff',
            type: 'input',
            templateOptions: {
              label: '其他人員姓名',
              required: false,
            },
          },
          {
            key: 'StaffPos',
            type: 'input',
            templateOptions: {
              label: '其他人員單位/職稱',
              required: false,
            },
          },
          {
            key: 'StaffAddr',
            type: 'input',
            templateOptions: {
              label: '其他人員地址',
              required: false,
            },
          },
          {
            key: 'StaffOfficialPhone',
            type: 'input',
            templateOptions: {
              label: '其他人員辦公室電話',
              required: false,
            },
          },
          {
            key: 'StaffCellPhone',
            type: 'input',
            templateOptions: {
              label: '其他人員手機',
              required: false,
            },
          },
          {
            key: 'StaffFAX',
            type: 'input',
            templateOptions: {
              label: '其他人員傳真',
              required: false,
            },
          },
          {
            key: 'StaffEMail',
            type: 'input',
            templateOptions: {
              label: '其他人員電子郵件信箱',
              required: false,
            },
          },
        ],
      },
      {//page2
        templateOptions: { label: '摘要' },
        fieldGroup: [
          {
            key: 'SummaryNote',
            type: 'textarea',
            templateOptions: {
              label: '摘要',
              type: 'textarea',
              required: false, maxWordCount: 1000, rows: 20
            },
          },
        ],
      },
      {//page3
        templateOptions: { label: '試驗介紹' },
        fieldGroup: [
          {
            key: 'Org',
            type: 'input',
            templateOptions: {
              label: '試驗機構名稱',
              required: false,
            },
          },
          {
            key: 'OrgAddr',
            type: 'input',
            templateOptions: {
              label: '試驗機構地址',
              required: false,
            },
          },

          {
            key: 'OrgOther', 
            type: 'input',
            templateOptions: {
              label: '其他試驗機構名稱',
              required: false,
            },
          },
          {
            key: 'OrgAddrOther',
            type: 'input',
            templateOptions: {
              label: '其他試驗機構地址',
              required: false,
            },
          },
        ],
      },

      {//page4
        templateOptions: { label: '試驗目的' },
        fieldGroup: [
          {
            key: 'country',
            type: 'input',
            templateOptions: {
              label: 'Country',
              required: false,
            },
          },
        ],
      },
      {//page5
        templateOptions: { label: '受試者的選擇及退出' },
        fieldGroup: [
          {
            key: 'country',
            type: 'input',
            templateOptions: {
              label: 'Country',
              required: false,
            },
          },
        ],
      },
      {//page6
        templateOptions: { label: '療效評估' },
        fieldGroup: [
          {
            key: 'country',
            type: 'input',
            templateOptions: {
              label: 'Country',
              required: false,
            },
          },
        ],
      },
      {//page7
        templateOptions: { label: '安全性評估' },
        fieldGroup: [
          {
            key: 'country',
            type: 'input',
            templateOptions: {
              label: 'Country',
              required: false,
            },
          },
        ],
      },
      {//page8
        templateOptions: { label: '統計分析' },
        fieldGroup: [
          {
            key: 'country',
            type: 'input',
            templateOptions: {
              label: 'Country',
              required: false,
            },
          },
        ],
      },
      {//page9
        templateOptions: { label: '原始資料檢視' },
        fieldGroup: [
          {
            key: 'country',
            type: 'input',
            templateOptions: {
              label: 'Country',
              required: false,
            },
          },
        ],
      },
      {//page10
        templateOptions: { label: '品質管制' },
        fieldGroup: [
          {
            key: 'country',
            type: 'input',
            templateOptions: {
              label: 'Country',
              required: false,
            },
          },
        ],
      },
      {//page11
        templateOptions: { label: '倫理考量' },
        fieldGroup: [
          {
            key: 'country',
            type: 'input',
            templateOptions: {
              label: 'Country',
              required: false,
            },
          },
        ],
      },
      {//page12
        templateOptions: { label: '資料處理及保存' },
        fieldGroup: [
          {
            key: 'country',
            type: 'input',
            templateOptions: {
              label: 'Country',
              required: false,
            },
          },
        ],
      },
      {//page13
        templateOptions: { label: '財務及保險' },
        fieldGroup: [
          {
            key: 'country',
            type: 'input',
            templateOptions: {
              label: 'Country',
              required: false,
            },
          },
        ],
      }, 


      {//page14
        templateOptions: { label: '發表著作原則' },
        fieldGroup: [
          {
            key: 'day',
            type: 'input',
            templateOptions: {
              type: 'date',
              label: 'Day of the trip',
              required: false,
            },
          },
        ],
      },
    ],
    // end of 計劃書內容
  }];

  submit() {
    alert(JSON.stringify(this.model));
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */