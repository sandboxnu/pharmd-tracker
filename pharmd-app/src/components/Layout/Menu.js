import React, {Fragment} from "react";
import {useSelector} from "react-redux";
import {useMediaQuery} from "@material-ui/core";
import {getResources, usePermissions} from "react-admin";
import {withRouter} from "react-router-dom";
import Divider from "@material-ui/core/Divider";

import NavItemLink from "../Nav/NavItemLink";
import NavIndicator from "../Nav/NavIndicator";


const Menu = ({onMenuClick, logout, ...props}) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down("xs"));
    const location = props.location.pathname;
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    const {permissions} = usePermissions();
    let resources = useSelector(getResources);
    if (permissions === "user") {
        resources = resources.filter(val => val.name !== "upload");
    }
    let flat = resources.reduce((total, val) => total.concat(val.name), []);

    const getCurrentIndex = () => {
        // TEMPORARY SOLUTION WILL FIND A BETTER ONE THAT RELOADS ONLY IF NEEDE
        let curentIndex = flat.indexOf(location.split("/")[1]);
        return curentIndex;
    };

    return (
        <div>

            {resources.map((resource, index) => {
                const isActive = location.includes(resource.name);
                const linkProps = {
                    key: resource.name || index,
                    to: `/${resource.name}`,
                    title: (resource.options && resource.options.label) || resource.name,
                    iconSrc: resource.icon,
                    onClick: onMenuClick,
                    sidebarIsOpen: false,
                    isActive
                };
                if (index === 0) {
                    // const info = JSON.parse(localStorage.getItem("userInfo"));
                    // console.log("INFO", info)
                    // linkProps.to = linkProps.to.concat(`/${info.userID}/show`);
                    return <Fragment key={index}>
                        <NavItemLink {...linkProps} />
                        <Divider variant="middle"/>
                    </Fragment>
                } else {
                    return <NavItemLink {...linkProps} />;
                }
            })}

            <NavIndicator index={getCurrentIndex()}/>
            {logout}
        </div>
    );
};

export default withRouter(Menu);
