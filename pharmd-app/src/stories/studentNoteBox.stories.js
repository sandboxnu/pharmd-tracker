import React from "react";
import StudentNoteBox from "../screens/student/StudentNoteBox";

export default {
    title: "Student Note Box",
    component: StudentNoteBox,
};

const note1 = {
    id: 1,
    date: new Date(),
    tags: [],
    title: "Fun Note!",
    body: "Four score and seven years ago..."
}

const note2 = {
    id: 2,
    date: new Date(2000, 10, 3),
    tags: ["Urgent", "Extreme", "Expired"],
    title: "Fun Note!",
    body: "We the people, in order to form a more perfect Union..."
}

export const Note1 = () => <StudentNoteBox {...note1} />
export const Note2 = () => <StudentNoteBox {...note2} />
