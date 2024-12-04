import { Model, Schema } from "mongoose";

export const reviewSchema = new Schema({
    value: {
        type: Number,
        min: [1, "Rating can't be less than 1"],
        max: [5, "Rating can't be more than 5"],
        required: [true, "Rating is required"]
    },
    comment: String,
    course: { 
        type: Schema.Types.ObjectId, 
        ref: "Course", 
        required: [true, "Course is required"]
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: [true, "Student is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

export const Review = Model("Review", reviewSchema);