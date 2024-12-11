import Redis from "ioredis";

const redis = new Redis({
    host: "localhost",
    port: 6379,
});

await redis.set("user:1", "John Doe");
await redis.set("user:2", "John Doe", "EX", 3000);

const value = await redis.get("user:1");

await redis.del("user:1");

await redis.hset("user:2", {
    name: "John Doe",
    email: "johndoe@example.com",
    age: "25"
});

const name = await redis.hget("user:2", "name");

const user = await redis.hgetall("user:2");