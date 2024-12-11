import { writeThrough } from "../redis/help";
import Course from "./course.model";
import redis from "../redis";

const write = new writeThrough(redis, Course);

write.create({name: "Ciao", description: "Ciao", level: "base", price: 0, students: [], studentsNumber: 0, rating: 0});
write.create({name: "Hello", description: "Hello", level: "intermediate", price: 0, students: [], studentsNumber: 0, rating: 0});
