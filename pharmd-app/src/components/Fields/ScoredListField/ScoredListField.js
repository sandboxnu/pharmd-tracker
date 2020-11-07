import React from "react";
import { useGetOne } from "react-admin";

import ScoredListItem from "./ScoredListItem";
import List from "@material-ui/core/List";

const ScoredListField = ({ record = {}, source }) => {
  let courses = record[source];
  console.log("COURSES", courses);
  return (
    <List>
      {courses.map((course, index) => {
        // TODO: Need to fix render issue here
        const { data, loading, error } = useGetOne("courses", course.course_id);

        return (
          <ScoredListItem
            key={index}
            primaryText={data ? data.name : ""}
            value={course ? course.grade : ""}
            loading={loading}
            error={error}
            disableGutters
            divider={index !== courses.length - 1}
          />
        );
      })}
    </List>
  );
};

export default ScoredListField;
