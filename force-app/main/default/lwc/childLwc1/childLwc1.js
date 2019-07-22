import { LightningElement, wire,api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import Phone_FIELD from '@salesforce/schema/Account.Phone';

const fields = [NAME_FIELD,Phone_FIELD];

export default class ChildLwc1 extends LightningElement {
@api accountId;

@wire(getRecord, { recordId: '$accountId', fields })
    account;
get name() {
    return getFieldValue(this.account.data, NAME_FIELD);
}
get phone() {
    return getFieldValue(this.account.data, Phone_FIELD);
}
}