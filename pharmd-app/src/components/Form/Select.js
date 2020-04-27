import React from "react";
import { Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const StyledFormControl = styled(FormControl)`
    ${tw`m-4`};
    min-width: 12rem;
`;

/**
 * @class CustomSelect a component for creating an easy select menu
 */
class CustomSelect extends React.Component {
    static defaultProps = {
        title: '',
        onChange() {},
        selectItems: []
    };

    constructor(props) {
        super(props);
        this.state = {
            currentValue: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    /**
     * Responds to changes of the currently selected item
     */
    handleOnChange($event) {
        const newVal = $event.target.value;
        this.setState({
            currentValue: newVal
        });
        this.props.onChange(newVal);
    }


    render() {
        return (
            <StyledFormControl>
                <InputLabel id="select-label">{this.props.title}</InputLabel>
                <Select
                    labelId="select-label"
                    id="simple-select"
                    value={this.state.currentValue}
                    onChange={this.handleOnChange}
                    label={this.props.title}
                >
                    {this.props.selectItems.map((item, index) => (
                        <MenuItem value={item.value} key={index}>{item.displayValue}</MenuItem>
                    ))}
                </Select>
            </StyledFormControl>
        );
    }

}

CustomSelect.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func,
    selectItems: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any,
        displayValue: PropTypes.string
    })),
};


export default CustomSelect;
