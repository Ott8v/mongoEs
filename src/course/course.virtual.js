import { courseSchema } from "./course.model";

courseSchema.virtual("Number").get(function () {
    return this.students.length;
});

courseSchema.set("toJson", {
    virtuals: true,
    getters: true,
    transform: function (doc, ret) {
        return ret;
    }
})