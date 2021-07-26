import {createDomain, createStore, createEvent, combine} from "effector";
import { every } from 'patronum/every';
import { isNonEmpty } from "../../lib/fp";

import type { Contact } from "../../shared/types";


export const titleChanged = createEvent<string>();
export const phoneChanged = createEvent<string>();
export const deleteButtonClicked = createEvent<string | null>()
export const formSubmitted = createEvent();
export const formReset = createEvent();


const draft = createDomain()
export const $title = draft.createStore<string>('');
export const $phone = draft.createStore<string>('');

export const $currentContactId = createStore<string | null>(null)
    .on(deleteButtonClicked, (_, payload) => payload)

export const $isValidTitle = $title.map(isNonEmpty)
export const $isValidPhone = $phone.map(phone => {
    return phone.length === 12 && phone.startsWith('+7')
})

export const $isValidDraft = every({
    predicate: true,
    stores: [$isValidTitle, $isValidPhone]
});


export const $draft = combine<Omit<Contact, 'id'>>({
    title: $title,
    phone: $phone,
});

// Update
$title.on(titleChanged, (_, payload) => payload);
$phone.on(phoneChanged, (_, payload) => payload);

// Reset
draft.onCreateStore((store) => {
    store.reset(formReset)
})