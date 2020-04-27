import FileSelectorComponent from "../components/Form/FileSelector";
import { action } from '@storybook/addon-actions';
import React from "react";

export default {
    title: "File Selector",
    component: File
}

export const Default = () => <FileSelectorComponent />;

export const SecondaryColor = () => <FileSelectorComponent color="secondary"/>;

export const ConsoleLogFileName = () => <FileSelectorComponent onChange={(event) => console.log(event.target.files)}/>;

export const LargerOnlyPDF = () => <FileSelectorComponent size="large" accept=".pdf"/>;
