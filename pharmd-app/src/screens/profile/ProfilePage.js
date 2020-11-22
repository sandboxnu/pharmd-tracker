import React, { Fragment } from "react";

import styled from "styled-components/macro";
import tw from "tailwind.macro";
import PropTypes from 'prop-types';

import AppBar from "../../components/Nav/AppBar";

const MainContent = styled.div`
    ${tw`p-12 pt-2`}
    flex-grow: 1;
    flex-direction: row;
`;

const ProfilePage = props => {
    return (
        <Fragment>
            <MainContent>
                <AppBar title={"Profile ".concat(props.pageName)} />
                {props.children}
            </MainContent>
        </Fragment>
    )
};

ProfilePage.propTypes = {
    pageName: PropTypes.string.isRequired,
};

export default ProfilePage;
