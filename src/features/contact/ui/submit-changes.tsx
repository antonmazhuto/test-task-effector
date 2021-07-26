import React from "react";
import { useEvent, useStore } from "effector-react";

import * as model from '../model';

import './style.css';

export const SubmitChanges = () => {
    const submitForm = useEvent(model.formSubmitted);
    const isValidForm = useStore(model.$isValidDraft);

    return (
        <button onClick={() => submitForm()} disabled={!isValidForm}>Добавить</button>
    )
}