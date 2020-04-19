import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Skeleton from "@material-ui/lab/Skeleton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import ListItemTextMaterial from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import ListItemSecondaryActionMaterial from "@material-ui/core/ListItemSecondaryAction";
import StatusBullet from "../../Basic/StatusBullet";

const ListItemText = styled(ListItemTextMaterial)`
  & .MuiListItemText-primary {
    ${tw`fontStyle-4 leading-6 font-medium block truncate`}
  }

  & .MuiListItemText-secondary {
    ${tw`fontStyle-2 text-gray-600`}
  }
`;

const ListItemSecondaryAction = styled(ListItemSecondaryActionMaterial)`
  ${tw`fontStyle-4 tracking-wider font-bold text-gray-900 right-1`}
`;

const ScoredListItemError = ({ errorText, ...rest }) => {
  return (
    <ListItem {...rest}>
      <ListItemIcon>
        <StatusBullet color="neutral" size="md" />
      </ListItemIcon>
      <ListItemText primary={errorText} />
      <ListItemSecondaryAction>{"000"}</ListItemSecondaryAction>
    </ListItem>
  );
};

ScoredListItemError.propTypes = {
  erorText: PropTypes.string
};

export default ScoredListItemError;