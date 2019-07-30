import {
    LightningElement,
    track
} from 'lwc';

export default class RadioButtonGroup extends LightningElement {

    @track
    options = [{
            'label': 'Ross',
            'value': 'option1'
        },
        {
            'label': 'Rachel',
            'value': 'option2'
        },
    ];

    // Select option1 by default
    @track
    value = 'option1';

    handleChange(event) {
        const selectedOption = event.detail.value;
        // eslint-disable-next-line no-console
        console.log(`Option selected with value: ${selectedOption}`);
    }
}