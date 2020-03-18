import React, { Component } from "react";
import StudentFilter from "./StudentFilter";

const FilterContext = React.createContext();

export class SharedFilterProvider extends Component {
  state = { filterProps: {} };

  updateFilterProps = newProps => {
    console.log("UPDATE CONTEXT", newProps);
    if (newProps.context !== "button") {
      this.setState({ filterProps: { ...this.state.filterProps, ...newProps } });
    }
  };

  render() {
    return (
      <FilterContext.Provider
        value={{
          filterProps: this.state.filterProps,
          updateProps: this.updateFilterProps
        }}
      >
        {this.props.children}
      </FilterContext.Provider>
    );
  }
}

export const SharedFilterConsumer = FilterContext.Consumer;
