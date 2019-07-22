import { LightningElement, track } from 'lwc';

export default class Example extends LightningElement {

  @track defaultmessgae ='';
  @track areDetailsVisible = false;

  get message(){
        return this.defaultmessgae;
  }
  set message(value){
      this.defaultmessgae = value;
  }

  handleChange(){
      //this.message = event.target.value;
      this.areDetailsVisible = true;
  }
}