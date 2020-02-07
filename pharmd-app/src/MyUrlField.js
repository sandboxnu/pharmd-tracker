import React from 'react';
import { styled } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const MyLink = styled('a')({
  link: {
    textDecoration: 'none',
  },
  icon: {
    width: '0.5em',
    paddingLeft: 2,
  },
});

const MyUrlField = ({ record = {}, source }) => {
    return (
      <MyLink href={record[source]} >
          {record[source]}
          <LaunchIcon />
      </MyLink>
  );
}

export default MyUrlField;
