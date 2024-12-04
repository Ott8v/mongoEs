import { reviewSchema } from "./review.model";

reviewSchema.post("save", function (doc, next) {
    
    next();
});