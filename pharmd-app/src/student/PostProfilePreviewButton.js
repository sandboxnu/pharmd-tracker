// in PostQuickPreviewButton.js
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";

import IconImageEye from "@material-ui/icons/RemoveRedEye";
import IconKeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Button, SimpleShowLayout, TextField } from "react-admin";

const styles = theme => ({
    field: {
        // These styles will ensure our drawer don't fully cover our
        // application when teaser or title are very long
        "& span": {
            display: "inline-block",
            maxWidth: "20em",
        },
    },
});

const PostPreviewView = ({ classes, ...props }) => (
    <SimpleShowLayout {...props}>
        <TextField source="name" />
        <TextField source="studentId" />
        <TextField source="graduationYear"/>
        <TextField source="notes"/>
    </SimpleShowLayout>
);

const mapStateToProps = (state, props) => ({
    // Get the record by its id from the react-admin state.
    record: state.admin.resources[props.resource]
        ? state.admin.resources[props.resource].data[props.id]
        : null,
    version: state.admin.ui.viewVersion,
});

const PostPreview = connect(
    mapStateToProps,
    {}
)(withStyles(styles)(PostPreviewView));

class PostProfilePreviewButton extends Component {
    state = { showPanel: false };

    handleClick = () => {
        this.setState({ showPanel: true });
    };

    handleCloseClick = () => {
        this.setState({ showPanel: false });
    };

    render() {
        const { showPanel } = this.state;
        const { id } = this.props;
        return (
            <Fragment>
                <Button onClick={this.handleClick} label="ra.action.show">
                    <IconImageEye />
                </Button>
                <Drawer anchor="right" open={showPanel} onClose={this.handleCloseClick}>
                    <div>
                        <Button label="Close" onClick={this.handleCloseClick}>
                            <IconKeyboardArrowRight />
                        </Button>
                    </div>
                    <PostPreview id={id} basePath="/student" resource="student" />
                </Drawer>
            </Fragment>
        );
    }
}

export default connect()(PostProfilePreviewButton);