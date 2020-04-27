import React from "react";
import Button from './Button';

class Selector extends React.Component {
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
        this.setState({
            fileName: event.target.files[0].name
        });
        this.props.onChange(event)
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
