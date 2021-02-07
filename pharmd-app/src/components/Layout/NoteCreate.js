import React from 'react';
import { Create, TextInput, SimpleForm, required } from 'react-admin';

const NoteCreate = props => (
    <Create {...props} resource="notes" onSuccess={props.onSuccess}>
        <SimpleForm initialValues={ {studentId: props.id} }>
            <TextInput label="Note Title" source="title" validate={required()} />
            <TextInput label="Note Content" source="body" validate={required()} />
        </SimpleForm>
    </Create>
)

export default NoteCreate;
