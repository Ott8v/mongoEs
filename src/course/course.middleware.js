import { courseSchema } from "./course.model";

courseSchema.pre("save", function (next) {
    if(this.isModified("students")) {
        this.numberStudents = this.students.length;
    }
    next();
});