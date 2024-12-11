import { courseSchema } from "./course.model";

courseSchema.virtual("studentsNumber").get(function () {
    return this.students.length;
});
