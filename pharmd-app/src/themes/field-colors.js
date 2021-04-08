import { FIELD_COLOR_NAMES, FIELD_COLOR_VALUES } from "./light-theme";
import { LETTER_GRADE, STUDENT, STUDENT_COURSE, STUDENT_STATUS } from "../constants/apiObjects";

// get color value for the given field
export const getFieldColor = ({ record, source }) =>
  getFieldColorValue(getFieldColorName({ record, source }));

// get color value for the given field
export const getFieldBackgroundColor = ({ record, source }) =>
  getFieldBackgroundColorValue(getFieldColorName({ record, source }));

// get value of color w/given name
export const getFieldColorValue = colorName => FIELD_COLOR_VALUES[colorName];

// get value of background color for the color w/ given name
export const getFieldBackgroundColorValue = colorName =>
  getFieldColorValue(colorName).replace("1)", "0.3)");

// get color name for given field
export const getFieldColorName = ({ record, source }) => {
  switch (source) {
    case STUDENT.GPA:
      return getGPAColor({ record });
    case STUDENT_COURSE.LETTER_GRADE:
      return getLetterGradeColor({ record });
    case STUDENT_COURSE.PERCENTAGE:
      return getPercentageColor({ record });
    case STUDENT.STATUS:
      return getStudentStatusColor({ record });
    default:
      return FIELD_COLOR_NAMES.DEFAULT;
  }
};

const getLetterGradeColor = ({ record }) => {
  switch (record[STUDENT_COURSE.LETTER_GRADE]) {
    case LETTER_GRADE.A:
    case LETTER_GRADE.A_MINUS:
    case LETTER_GRADE.B_PLUS:
    case LETTER_GRADE.B:
      return FIELD_COLOR_NAMES.GREEN;
    case LETTER_GRADE.B_MINUS:
    case LETTER_GRADE.C_PLUS:
    case LETTER_GRADE.C:
    case LETTER_GRADE.C_MINUS:
      return FIELD_COLOR_NAMES.ORANGE;
    case LETTER_GRADE.D_PLUS:
    case LETTER_GRADE.D:
    case LETTER_GRADE.D_MINUS:
    case LETTER_GRADE.F:
      return FIELD_COLOR_NAMES.RED;
    default:
      return FIELD_COLOR_NAMES.DEFAULT;
  }
};

const getGPAColor = ({ record }) => {
  const gpa = record[STUDENT.GPA];
  if (gpa >= 3.7) {
    return FIELD_COLOR_NAMES.GREEN;
  }
  if (gpa >= 1.7) {
    return FIELD_COLOR_NAMES.ORANGE;
  }
  return FIELD_COLOR_NAMES.RED;
};

const getPercentageColor = ({ record }) => {
  const percentage = record[STUDENT_COURSE.PERCENTAGE];
  if (percentage >= 83) {
    return FIELD_COLOR_NAMES.GREEN;
  }
  if (percentage >= 70) {
    return FIELD_COLOR_NAMES.ORANGE;
  }
  return FIELD_COLOR_NAMES.RED;
};

const getStudentStatusColor = ({ record }) => {
  switch (record[STUDENT.STATUS]) {
    case STUDENT_STATUS.COOP:
      return FIELD_COLOR_NAMES.PRIMARY;
    case STUDENT_STATUS.ENROLLED:
      return FIELD_COLOR_NAMES.GREEN;
    case STUDENT_STATUS.DROP_BACK:
      return FIELD_COLOR_NAMES.RED;
    case STUDENT_STATUS.LEAVE:
      return FIELD_COLOR_NAMES.ORANGE;
    case STUDENT_STATUS.GRADUATED:
      return FIELD_COLOR_NAMES.TERTIARY;
    default:
      return FIELD_COLOR_NAMES.DEFAULT;
  }
};
