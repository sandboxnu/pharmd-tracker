import React, { Fragment } from "react";
import { Field } from "redux-form";
import { ReferenceInput, SelectInput } from "react-admin";

import PostProfilePreviewButton from "./PostProfilePreviewButton";

const PostReferenceInput = props => (
  <Fragment>
    <ReferenceInput {...props}>
      <SelectInput optionText="id" />
    </ReferenceInput>

    {/* We use Field to get the current value of the `post_id` field */}
    <Field
      name="id"
      component={({ input }) => input.value && <PostProfilePreviewButton id={input.value} />}
    />
  </Fragment>
);

export default PostReferenceInput;
