import { Model, Schema } from "mongoose";

const level = {
    BASE: "base",
    INTERMEDITE: "intermediate",
    ADVANCED: "advanced",
}

export const courseSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    level: {
        type: String,
        enum: Object.values(level),
        required: [true, "Level is required"]
    },
    price: {
        type: Number,
        min: [0, "Price can't be negative"],
        required: [true, "Price is required"]
    },
    students: [{ type: Schema.Types.ObjectId, ref: "Student", unique: [true, "Student already subcribed to this course"], default: [] }],
    studentsNumber: {
        type: Number,
        min: [0, "Number of students can't be negative"],
        default: 0,
    },
    rating: {
        type: Number,
        min: [0, "Rating can't be negative"],
        max: [5, "Rating can't be more than 5"],
        default: 0
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
});

export const Course = Model("Course", courseSchema);

