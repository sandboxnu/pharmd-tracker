import React from "react";
import { Route } from "react-router-dom";

import StudentDetailsScreen from "../screens/studentDetails/StudentDetailsResource";
import { STUDENT_DETAILS } from "../constants/routes";

export default [<Route exact path={STUDENT_DETAILS} component={StudentDetailsScreen} />];
