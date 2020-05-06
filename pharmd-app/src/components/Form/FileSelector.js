import React from "react";
import Button from './Button';
import PropTypes from "prop-types";

class Selector extends React.Component {
    static propTypes = {
        /**
         * @typedef {Function<File>}
         */
        onChange: PropTypes.func
    };

    static defaultProps = {
        onChange() {}
    };

    constructor(props) {
        super(props);
        this.state = {
            fileName: 'Upload File'
        };
        this.onChooseFile = this.onChooseFile.bind(this);
    }

    onChooseFile(event) {
        const file = event.target.files[0];
        this.setState({
            fileName: file.name
        });
        this.props.onChange(file)
    }

    render() {
        return <Button
            variant="outlined"
            color="primary"
            component="label"
            {...this.props}
        >
            {this.state.fileName}
            <input
                type="file"
                style={{ display: "none" }}
                onChange={this.onChooseFile}
                accept={this.props.accept}
            />
        </Button>;
    }

}

export default Selector;
