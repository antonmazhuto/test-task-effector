import { StartParams } from "../../lib/page-routing";
import {attach, createEffect, createEvent, guard, sample} from "effector";

import { contactDraftModel } from '../../features/contact'
import { contactModel } from '../../entities/contact'
import { Contact } from "../../shared/types";
import { LocalStorageService } from "../../lib/contactsStorage";

const localStorageService = new LocalStorageService()


export const getContactsFx = attach({ effect: contactModel.getContactsFx })
export const pageLoaded = createEvent<StartParams>()
export const submitChangesFx = createEffect(async (payload: Omit<Contact, 'id'>) => {
    return localStorageService.setContact({
        title: payload.title,
        phone: payload.phone,
    });
});

export const deleteContactFx = createEffect((id: string | null) => {
    return localStorageService.deleteContact(id)
})

sample({
    source: pageLoaded,
    target: getContactsFx
})

// Обрабатываем отправку формы
guard({
    clock: contactDraftModel.formSubmitted,
    source: contactDraftModel.$draft,
    filter: contactDraftModel.$isValidDraft,
    target: submitChangesFx,
})

// Сбрасываем форму при успешной отправке
sample({
    source: submitChangesFx.done,
    target: [contactDraftModel.formReset, contactModel.getContactsFx],
});

// Удаляем карточку
guard({
    clock: contactDraftModel.deleteButtonClicked,
    source: contactDraftModel.$currentContactId,
    filter: (contactId) => !!contactId,
    target: deleteContactFx
})

sample({
    source: deleteContactFx.doneData,
    target: contactModel.getContactsFx
})