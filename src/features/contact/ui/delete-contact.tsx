import React from "react";
import { useEvent } from "effector-react";

import * as model from '../model';

import './style.css'

interface Props {
    id: string
}

export const DeleteContact:React.FC<Props> = ({ id }) => {
    const deleteButtonClicked = useEvent(model.deleteButtonClicked)
    return (
        <button onClick={() => deleteButtonClicked(id)}>Удалить</button>
    )
}