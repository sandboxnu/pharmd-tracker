import NoteField from "../components/Fields/NoteField";
import { action } from '@storybook/addon-actions';
import React from "react";

export default {
    title: "NoteField",
    component: NoteField
}

const note1 = {
    text: 'FooFooFoo',
    title: "FooTitle",
    created: new Date(2018, 8, 10),
    lastEdit: new Date(2018, 9, 10),
    id: 1
}

const note2 = {
    text: 'BarBarBar',
    title: "BarTitle",
    created: new Date(2018, 8, 10),
    lastEdit: new Date(2020, 8, 15),
    id: 2
}

export const Default = () => <NoteField {...note1} />;

export const Note2 = () => <NoteField {...note2} />;