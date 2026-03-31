import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class AccountEditor extends LightningElement {

    @api recordId;

    objectApiName = ACCOUNT_OBJECT;

    fields = [NAME_FIELD, INDUSTRY_FIELD, WEBSITE_FIELD];

    handleSuccess() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Saved',
                message: 'Account updated',
                variant: 'success'
            })
        );
    }

    handleError(event) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error',
                message: event.detail.message,
                variant: 'error'
            })
        );
    }
}
