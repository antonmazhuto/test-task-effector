import React from "react";
import {DeleteContact} from "../../../features/contact/ui";

interface Props {
    id: string;
    title: string;
    phone: string;
}

export const ContactPreview:React.FC<Props> = ({ id, title, phone}) => {
    return (
        <div className='contact-card'>
            <div className="contact-title">{title}</div>
            <div className="contact-phone">{phone}</div>
            <DeleteContact id={id ?? null} />
        </div>
    )
}