import { studentSchema } from "./student.model";

studentSchema.virtual("coursesNumber").get(function () {
    return this.courses.length;
});

studentSchema.virtual("age").get(function () {
    const today = new Date();
    const birthdate = new Date(this.birthdate);
    let age = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
});

