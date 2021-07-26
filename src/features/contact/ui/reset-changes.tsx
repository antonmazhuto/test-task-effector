import React from "react";
import { useEvent, useStore } from "effector-react";

import * as model from '../model';

import './style.css';

const CANCEL_WARN = 'Are you sure you want to undo the changes? The action is not reversible!';

export const ResetChanges = () => {
    const formReset = useEvent(model.formReset);

    return (
        <button
            onClick={() => {
                if (!window.confirm(CANCEL_WARN)) return;
                formReset();
            }}
        >
            Отменить
        </button>
    )
}