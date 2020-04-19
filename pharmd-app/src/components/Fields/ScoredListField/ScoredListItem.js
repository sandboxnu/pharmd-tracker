import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Skeleton from "@material-ui/lab/Skeleton";
import ScoredListItemSkeleton from "./ScoredListItemSkeleton";
import PropTypes from "prop-types";
import ScoredListItemError from "./ScoredListItemError";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import ListItemTextMaterial from "@material-ui/core/ListItemText";
import ListItemSecondaryActionMaterial from "@material-ui/core/ListItemSecondaryAction";
import StatusBullet from "../../Basic/StatusBullet";

function statusMapping(value) {
  if (value >= 90) {
    return "success";
  } else if (value >= 80) {
    return "good";
  } else if (value >= 70) {
    return "warning";
  } else if (value >= 0) {
    return "danger";
  } else {
    return "neutral";
  }
}

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

export const ScoredItem = ({ primaryText, secondaryText, value, ...rest }) => {
  return (
    <ListItem {...rest}>
      <ListItemIcon>
        <StatusBullet color={statusMapping(value)} size="md" />
      </ListItemIcon>
      <ListItemText primary={primaryText} secondary={secondaryText} className={"good"} />
      <ListItemSecondaryAction>
        <span>{value}</span>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

ScoredItem.muiName = "ListItem";

const ScoredListItem = ({
  primaryText,
  secondaryText,
  value,
  variant,
  loading,
  error,
  errorText,
  ...rest
}) => {
  console.log("PROPS", rest, ListItem.muiName);
  if (loading) {
    return <ScoredListItemSkeleton variant={variant} {...rest} />;
  }
  if (error) {
    return <ScoredListItemError errorText={errorText} {...rest} />;
  }
  return (
    <ScoredItem
      primaryText={primaryText}
      secondaryText={secondaryText}
      value={value}
      {...rest}
    />
  );
};

ScoredListItem.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string,
  value: PropTypes.number,
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string
};

ScoredListItem.defaultProps = {
  variant: "primary",
  errorText: "Error Loading Data"
};
export default ScoredListItem;
