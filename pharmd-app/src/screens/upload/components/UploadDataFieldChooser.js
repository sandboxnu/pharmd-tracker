import React, { Component } from "react";
import PropTypes from "prop-types";
import FileUploadService from "../../../services/FileUploadService";
import { Select } from '../../../components/Form'
import Button from '@material-ui/core/Button'

// Style Imports
import tw, { styled } from "twin.macro";

class UploadDataFieldChooser extends Component {
  static propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string),
    subHeaders: PropTypes.arrayOf(PropTypes.string),
    studentData: PropTypes.arrayOf(PropTypes.object),
    confirmData: PropTypes.func
  };

  static defaultProps = {
    headers: [],
    subHeaders: [],
    studentData: [],
    confirmData() {}
  };

  constructor(props) {
    super(props);
    this.fieldTypes = new Map();
    this.handleChange = this.handleChange.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  /**
   * Handles the selecting of an element from a dropdown menu
   * @param value {Array}
   */
  handleChange(value) {
    const [field, type] = value;
    this.fieldTypes.set(field, type);
  }

  handleConfirm() {
    const data = {
      courseName: '',
      exams: []
    };
    let IDField, courseNameField, studentNameField;
    for (const entry of this.fieldTypes.entries()) {
      const [field, type] = entry;
      if (FileUploadService.gradeInputTypes[type] === FileUploadService.gradeInputTypes.STUDENT_ID) {
        IDField = field;
      }
      if (FileUploadService.gradeInputTypes[type] === FileUploadService.gradeInputTypes.SECTION) {
        courseNameField = field;
      }
      if (FileUploadService.gradeInputTypes[type] === FileUploadService.gradeInputTypes.STUDENT_NAME) {
        studentNameField = field;
      }
    }

    const missing = [];
    !IDField && missing.push(FileUploadService.gradeInputTypes.STUDENT_ID);
    !courseNameField && missing.push(FileUploadService.gradeInputTypes.SECTION);
    !studentNameField && missing.push(FileUploadService.gradeInputTypes.STUDENT_NAME);
    if (missing.length > 0) {
      alert(`The following fields are required for upload:\n ${missing.join(',\n ')}`);
      return;
    }

    for (const entry of this.fieldTypes.entries()) {
      const [field, type] = entry;
      if (FileUploadService.gradeInputTypes[type] === FileUploadService.gradeInputTypes.SECTION) {
        data.courseName = this.props.studentData[0][field]
      }
      if (FileUploadService.gradeInputTypes[type] === FileUploadService.gradeInputTypes.EXAM) {
        for (const studentRow of this.props.studentData) {
          data.exams.push({
            NUID: studentRow[IDField],
            studentName: studentRow[studentNameField],
            courseName: studentRow[courseNameField],
            examName: field,
            percentage: studentRow[field]
          })
        }

      }
    }
    if (data.exams.length === 0) {
      alert("You must upload at least one exam's grades");
      return;
    }
    this.props.confirmData(data);
  }

  /**
   * Gets the items for a select menu
   * @param {string} header
   * @return Array
   **/
  getSelectItems(header) {
    return Object.keys(FileUploadService.gradeInputTypes).map(inputType => (
        {
          value: [header, inputType],
          displayValue: FileUploadService.gradeInputTypes[inputType]
        }
    ))
  }

  render() {
    return (
      <div>
        <Button color="primary" variant="contained" tw="fixed right-10px top-12 z-10" onClick={this.handleConfirm}>Confirm Data</Button>
        <table>
          <thead>
            <tr>
              {this.props.headers.map((header, index) => (
                <td key={index} >
                  <Select id={header} onChange={this.handleChange} title="Value Type"
                               selectItems={
                                 this.getSelectItems(header)
                               } />
                </td>
              ))}
            </tr>
            <tr>
              {this.props.headers.map((header, index) => (
                  <th key={index}>
                    {header === FileUploadService.EMPTY_CELL_VAL ?  this.props.subHeaders[index] : header}
                  </th>
              ))}
            </tr>
            <tr>
              {this.props.subHeaders.map((subHeader, index) => (
                  <th tw="text-80%" key={index}>
                    {this.props.headers[index] === FileUploadService.EMPTY_CELL_VAL || subHeader === FileUploadService.EMPTY_CELL_VAL ? "" : subHeader}
                  </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.studentData.map((student, index) => {
              return (
                  <tr key={index}>
                    {this.props.headers.map((field, index) => {
                      return <td tw="text-center" key={index}>{student[field]}</td>;
                    })}
                  </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UploadDataFieldChooser;
