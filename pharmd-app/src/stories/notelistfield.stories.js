import NoteListField from "../components/Fields/NoteListField";
import { action } from '@storybook/addon-actions';
import React from "react";

export default {
    title: "NoteListField",
    component: NoteListField
}

const notesData = [
    {
        data: {
            text: 'FooFooFoo',
            title: "FooTitle",
            created: new Date(2018, 8, 10),
            lastEdit: new Date(2018, 9, 10),
            id: 1
        }
    },
    {
        data: {
            text: 'BarBarBar',
            title: "BarTitle",
            created: new Date(2018, 8, 10),
            lastEdit: new Date(2020, 8, 15),
            id: 2
        }
    }
]

export const Default = () => <NoteListField record={{notesData: []}} source="notesData"/>;

export const Many = () => <NoteListField record={{notesData}} source="notesData" />
