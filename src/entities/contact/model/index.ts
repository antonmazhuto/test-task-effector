import type {Contact} from "../../../shared/types";
import {createEffect, createStore} from "effector";
import {LocalStorageService} from "../../../lib/contactsStorage";

const localStorageService = new LocalStorageService()

export const getContactsFx = createEffect(async () => {
    return await localStorageService.getContacts()
})

export const $contacts = createStore<Contact[]>([])
    .on(getContactsFx.doneData,
        (_, payload) => payload)