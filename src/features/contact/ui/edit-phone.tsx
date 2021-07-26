import React from "react";
import {useEvent, useStore} from "effector-react";

import * as model from '../model';

import './style.css'

export const EditPhone = () => {
    const phone = useStore(model.$phone)
    const phoneChanged = useEvent(model.phoneChanged)

    return (
        <input
            className='form-input'
            type="text"
            placeholder='Номер телефона'
            value={phone}
            onChange={(e) => phoneChanged(e.target.value)}
        />
    )
}