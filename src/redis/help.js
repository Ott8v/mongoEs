export class writeThrought {
    constructor(redis, mongoose){
        this.redis = redis;
        this.model = mongoose.model;
    }

    async create(data){
        const document = await this.model.create(data);

        await this.redis.set(`${this.model.modelName}:${document._id}`, JSON.stringify(document), "EX", 3000);
        return document;
    }

    async update(id, data){
        const document = await this.model.findByIdAndUpdate(id, data, {new: true});
        await this.redis.set(`${this.model.modelName}:${document._id}`, JSON.stringify(document), "EX", 3000);
        return document;
    }
}