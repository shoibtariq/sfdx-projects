import {
    LightningElement,
    wire,
    track
} from 'lwc';
import getAccounts from '@salesforce/apex/DataController.getAccounts';

const columnss = [{
        label: 'FirstName',
        fieldName: 'FirstName',
        type: 'text'
    },
    {
        label: 'LastName',
        fieldName: 'LastName',
        type: 'text',
        cellAttributes: {
            iconName: {
                fieldName: 'trendIcon'
            },
            iconPosition: 'right'
        }
    },
    {
        label: 'Email',
        fieldName: 'Email',
        type: 'Email'
    },
];
export default class LwcDatatable extends LightningElement {

    @track columns = columnss;
    @wire(getAccounts) contacts;

    getSelectedName(event) {
        const selectedRows = event.detail.selectedRows;
        // Display that fieldName of the selected rows
        for (let i = 0; i < selectedRows.length; i++) {
            /* eslint-disable*/
            alert("You selected: " + selectedRows[i].Id);
        }
    }
    getSelectedN(event) {
        const selectedRows = event.detail.selectedRows;
        console.log(selectedRows);
    }
    @track activeSectionMessage = '';

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }

    handleSetActiveSectionC() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'C';
    }
}