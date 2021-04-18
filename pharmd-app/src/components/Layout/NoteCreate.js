import React from 'react';
import { Create, TextInput, SimpleForm, required } from 'react-admin';

const NoteCreate = props => {
    // Input --> Record
    const parseInput = input => input && input.split(" ")

    // Record --> Input
    const formatInput = record => record && record.join(" ")

    return (
        <Create {...props} resource="notes" onSuccess={props.onSuccess} basePath="notes">
            <SimpleForm initialValues={ {student: props.match.params.id} }>
                <TextInput label="Note Title" source="title" validate={required()} />
                <TextInput label="Note Content" source="body" validate={required()} />
                <TextInput label="Tags" source="tags" validate={required()} format={formatInput} parse={parseInput} />
            </SimpleForm>
        </Create>
    )
}

export default NoteCreate;
