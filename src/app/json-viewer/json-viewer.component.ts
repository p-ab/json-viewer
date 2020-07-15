import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxDropzoneComponent } from 'ngx-dropzone';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss']
})
export class JsonViewerComponent implements OnInit {

  @ViewChild(NgxDropzoneComponent, {static: false}) dropzone: NgxDropzoneComponent;
  files: File[] = [];
  jsonFile = {};
  preparedJson = [];
  isDropping = 0;
  notifications = {
    error: 'Файл содержит ошибки. Загрузите другой файл',
    copied: 'Строка и вложение скопированы в буфер'
  };
  notificationText;
  notificationType;

  constructor() { }

  ngOnInit() {
  }

  checkFile(jsonData) {
    this.preparedJson = [];
    const getDataType = (d) => {
      if (d === null) { return 'null'; }
      if (Array.isArray(d)) { return 'array'; }
      return typeof d;
    };
    const getDataValue = (type, d) => {
      if (type === 'object') { return `{${Object.keys(d).length}}`; }
      if (type === 'array') { return `[${Object.keys(d).length}]`; }
      if (type === 'null') { return 'null'; }
      return d;
    };
    this.preparedJson.push({
      level: 0,
      parentIndex: null,
      value: getDataType(jsonData).charAt(0).toUpperCase() + getDataType(jsonData).slice(1),
      type: getDataType(jsonData),
      data: getDataValue(getDataType(jsonData), jsonData),
      isOpened: true,
      isVisible: true,
      parentKeys: []
    });
    const prepareData = (data, level = 1, parentKeys = []) => {
      const items = Object.keys(data);
      if (!items.length) {
        this.preparedJson.push({
          level,
          value: '(empty array)',
          type: 'empty',
          data: null,
          isOpened: false,
          isVisible: false,
          parentKeys: [...parentKeys]
        });
      }
      items.forEach(item => {
        const itemType = getDataType(data[item]);
        const objectedItem = ['array', 'object'].includes(itemType);
        const preparedItem = {
              level,
              value: item,
              type: itemType,
              data: getDataValue(itemType, data[item]),
              isOpened: false,
              isVisible: level > 1 ? false : true,
              parentKeys: [...parentKeys, item]
          };
        this.preparedJson.push(preparedItem);
        if (objectedItem) {
          prepareData(data[item], level + 1, preparedItem.parentKeys);
        }
      });
    };
    prepareData(jsonData);
  }

  onDragEnter(event: DragEvent) {
    this.isDropping = 1;
  }

  onDragLeave(event: DragEvent) {
    this.isDropping = 0;
  }

  onSelect(event) {
    const fileReader = new FileReader();
    this.files = [...event.addedFiles];
    fileReader.readAsText(this.files[0], 'UTF-8');
    fileReader.onload = () => {
      try {
        this.jsonFile = JSON.parse(fileReader.result as string);
        this.checkFile(this.jsonFile);
        this.isDropping = 0;
      } catch(e) {
        this.notificationType = 'error';
        this.notificationText = this.notifications.error;
        setTimeout(() => {
          this.notificationType = '';
          this.notificationText = '';
        }, 5000);
      }
    };
    fileReader.onerror = (error) => {
      console.log(error);
      this.notificationType = 'error';
      this.notificationText = this.notifications.error;
      setTimeout(() => {
        this.notificationType = '';
        this.notificationText = '';
      }, 5000);
    };
  }

  toggleObject(index) {
    this.preparedJson[index].isOpened = !this.preparedJson[index].isOpened;
    const selectedItem = this.preparedJson[index];
    let stopToggle = 0;
    this.preparedJson.map((d, i) => {
      if (selectedItem.level === d.level && i > index) { stopToggle = 1; }

      if (selectedItem.isOpened && i > index && d.level === selectedItem.level + 1 && !stopToggle) {
        d.isVisible = true;
      }

      if (!selectedItem.isOpened && i > index && d.level > selectedItem.level && !stopToggle) {
        d.isVisible = false;
        d.isOpened = false;
      }

      return d;
    });
  }

  copyData(index) {
    const selectedItem = this.preparedJson[index];
    const result = {};
    let item = this.jsonFile;
    for (const key of selectedItem.parentKeys) {
      item = item[key];
    }
    result[selectedItem.value] = item;
    const inp = document.createElement('textarea');
    document.body.appendChild(inp);
    inp.textContent = JSON.stringify(result, null, 2);
    inp.select();
    document.execCommand('copy', false);
    inp.remove();
    this.notificationType = 'copied';
    this.notificationText = this.notifications.copied;
    setTimeout(() => {
      this.notificationType = '';
      this.notificationText = '';
    }, 5000);
  }

  closeNotification(event) {
    this.notificationType = '';
    this.notificationText = '';
  }
}
