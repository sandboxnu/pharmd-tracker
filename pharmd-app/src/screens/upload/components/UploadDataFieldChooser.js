import React, { Component } from "react";
import PropTypes from "prop-types";
import FileUploadService from "../../../services/FileUploadService";

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
    this.state = {
      fieldTypes: new Map()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  // initializeState(props) {
  //   console.log(props)
  //   const stateMap = new Map();
  //   for (let header of props.headers) {
  //     stateMap.set(header, FileUploadService.gradeInputTypes.UNUSED)
  //   }
  //   for (let header of props.headers) {
  //     if (header.includes("Student"))
  //       stateMap.set(header, FileUploadService.gradeInputTypes.STUDENT_NAME)
  //
  //     if (header.includes("Exam"))
  //       stateMap.set(header, FileUploadService.gradeInputTypes.EXAM)
  //   }
  //   console.log(stateMap)
  //   return stateMap;
  // }

  handleChange(event) {
    const [field, type] = (event.target.value.split(','));
    this.setState((prevState, props) => ({
      fieldTypes: prevState.fieldTypes.set(field, type)
      })
    );

  }

  handleConfirm() {
    const data = {
      courseName: '',
      exams: []
    };
    let IDField, courseNameField, studentNameField;
    for (const entry of this.state.fieldTypes.entries()) {
      const [field, type] = entry;
      if (FileUploadService.gradeInputTypes[type] === FileUploadService.gradeInputTypes.ID) {
        IDField = field;
      }
      if (FileUploadService.gradeInputTypes[type] === FileUploadService.gradeInputTypes.SECTION) {
        courseNameField = field;
      }
      if (FileUploadService.gradeInputTypes[type] === FileUploadService.gradeInputTypes.STUDENT_NAME) {
        studentNameField = field;
      }
    }
    for (const entry of this.state.fieldTypes.entries()) {
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
    this.props.confirmData(data);
  }

  /*
  Structure of assessment object:
  - Name
  - Percentage
  - CourseID
  - StudentID

  Structure of homework object
  - Name
  - Percentage
  - CourseID
  - StudentID
   */

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              {this.props.headers.map(header => (
                <td>
                  <select id={header} onChange={this.handleChange} key={header}>
                    {Object.keys(FileUploadService.gradeInputTypes).map((inputType) => {
                      return (
                        <option value={[header, inputType]} key={header + inputType}>
                          {FileUploadService.gradeInputTypes[inputType]}
                        </option>
                      );
                    })}
                  </select>
                </td>
              ))}
            </tr>
            <tr>
              {this.props.headers.map(header => (
                  <th key={header}>{!header.includes("EMPTY") && header}</th>
              ))}
            </tr>
            {/*<tr>*/}
            {/*  {this.props.subHeaders.map((subHeader, index) => (*/}
            {/*      <th style={{fontSize: '80%'}} key={index}>{subHeader}</th>*/}
            {/*  ))}*/}
            {/*</tr>*/}
          </thead>
          <tbody>
            {this.props.studentData.map((student, index) => {
              return (
                  <tr key={index}>
                    {this.props.headers.map((field, index) => {
                      return <td style={{textAlign: 'center'}} key={index}>{student[field]}</td>;
                    })}
                  </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={this.handleConfirm}>Confirm Data</button>
      </div>
    );
  }
}

export default UploadDataFieldChooser;
