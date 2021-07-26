import {Contact} from "../shared/types";
import { v4 as uuidv4 } from 'uuid';

export class LocalStorageService {
    async setContact({phone, title}: Omit<Contact, 'id'>) {
        const uuid = uuidv4()
        const contacts = await JSON.parse(<string>localStorage.getItem('contacts'));
        if (contacts?.length > 0) {
            return localStorage.setItem(
                'contacts',
                JSON.stringify([
                    ...contacts,
                    {
                        id: uuid,
                        phone,
                        title
                    }
                ])
            )
        }
        return localStorage.setItem(
            'contacts',
            JSON.stringify([{
                id: uuid,
                phone,
                title
            }])
        )
    }

    async getContacts() {
        return await JSON.parse(<string>localStorage.getItem('contacts'))
    }

    async deleteContact(id: string | null) {
        let contacts = await JSON.parse(<string>localStorage.getItem('contacts'));
        const idx = contacts.findIndex((c: Contact) => c.id === id)
        if (idx > -1) {
            contacts = [...contacts.slice(0, idx), ...contacts.slice(idx+1, contacts.length)]
            localStorage.setItem(
                'contacts',
                JSON.stringify(contacts),
            )
        }
    }
}