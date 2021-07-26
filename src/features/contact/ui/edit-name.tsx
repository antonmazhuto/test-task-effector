import React from "react";
import {useEvent, useStore} from "effector-react";

import * as model from '../model';

import './style.css'

export const EditName = () => {
    const name = useStore(model.$title)
    const nameChanged = useEvent(model.titleChanged)

    return (
        <input
            className='form-input'
            type="text"
            placeholder='ФИО'
            value={name}
            onChange={(e) => nameChanged(e.target.value)}
        />
    )
}