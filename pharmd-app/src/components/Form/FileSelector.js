import React from "react";
import Button from './Button';
import PropTypes from "prop-types";

class Selector extends React.Component {
    static propTypes = {
        onChoose: PropTypes.func
    };

    static defaultProps = {
        onChoose() {}
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
        this.props.onChoose(file)
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
                tw="hidden"
                onChange={this.onChooseFile}
                accept={this.props.accept}
            />
        </Button>;
    }

}

export default Selector;
