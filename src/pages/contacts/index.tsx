import React from "react";
import { useStart, withStart } from "../../lib/page-routing";

import * as model from './model';
import {EditName, EditPhone, ResetChanges, SubmitChanges} from "../../features/contact/ui";

import './style.css'
import {ContactsList, contactModel} from "../../entities/contact";
import {useStore} from "effector-react";

export const ContactsPage = () => {
    useStart(model.pageLoaded);

    const contacts = useStore(contactModel.$contacts)

    return (
        <div className="wrapper">
            <div className="contacts">
                <div className="contact-form">
                    <form>
                        <EditName />
                        <EditPhone />
                        <div className="button-group">
                            <SubmitChanges />
                            <ResetChanges />
                        </div>
                    </form>
                </div>
                <div className="contacts-list">
                    <div className="title">Список контактов</div>
                    <ContactsList contacts={contacts} />
                </div>
            </div>
        </div>
    )
}

withStart(model.pageLoaded, ContactsPage)