import { Model, Schema } from "mongoose";

const expirence = {
    JUNIOR: "junior",
    MIDDLE: "middle",
    SENIOR: "senior"

}

const studentSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    surname: {
        type: String,
        required: [true, "Surname is required"]
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email is already in use"],
        validate: {
            validator: (value) => {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            },
            message: (props) => `${props.value} is not a valid email`
        }
    },
    expirence:{
        type: String,
        enum: Object.values(expirence),
        required: [true, "Level of expirence is required"]
    },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course", unique: [true, "Already subcribed to this course"], default: [] }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }

});

const Student = Model("Student", studentSchema);

export default Student;