import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Skeleton from "@material-ui/lab/Skeleton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import ListItemSecondaryActionMaterial from "@material-ui/core/ListItemSecondaryAction";

const ListItemSecondaryAction = styled(ListItemSecondaryActionMaterial)`
  ${tw`right-1`}
`;

const ScoredListItemSkeleton = ({ variant = "primary", ...rest }) => {
  return (
    <ListItem {...rest}>
      <ListItemIcon>
        <Skeleton variant="circle" width={"24px"} height={"24px"} />
      </ListItemIcon>
      <ListItemText
        primary={<Skeleton variant="text" width="75%" />}
        secondary={variant === "secondary" ? <Skeleton variant="text" width="50%" /> : null}
      />
      <ListItemSecondaryAction>
        <Skeleton variant="rect" width={16} height={16} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

ScoredListItemSkeleton.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired
};

export default ScoredListItemSkeleton;
