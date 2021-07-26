import React from "react";
import {Contact} from "../../../shared/types";
import {ContactPreview} from "./contact-preview";

interface Props {
    contacts: Contact[];
}

export const ContactsList: React.FC<Props> = ({ contacts}) => {
    if (!contacts || contacts.length === 0) {
        return <div className='empty-list'>Список контактов пуст...</div>
    }
    return(
        <div>
            {contacts.map(({title, phone, id}) => (
                <ContactPreview
                    key={id}
                    id={id}
                    title={title}
                    phone={phone}
                />
            ))}
        </div>
    )
}