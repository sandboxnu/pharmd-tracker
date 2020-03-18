import React, { Component } from "react";
import PropTypes from "prop-types";
import FileUploadService from "../../services/FileUploadService";
import CourseService from "../../services/CourseService";

class SpreadsheetFieldChooser extends Component {
  static propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string),
    studentData: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    headers: [],
    studentData: []
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            {this.props.headers.sort().map(header => (
              <select id={header}>
                {Object.keys(FileUploadService.gradeInputTypes).map(inputType => {
                  return (
                    <option value={inputType}>
                      {FileUploadService.gradeInputTypes[inputType]}
                    </option>
                  );
                })}
              </select>
            ))}
          </tr>
        </table>
        <table>
          <tr>
            {this.props.headers.sort().map(header => (
              <th>{header}</th>
            ))}
          </tr>
          {this.props.studentData.map(student => {
            return (
              <tr>
                {this.props.headers.sort().map(field => {
                  return <td>{student[field]}</td>;
                })}
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default SpreadsheetFieldChooser;
