import {storeDocument} from "@/mongoose/weather/service";
import {MongoMemoryServer} from "mongodb-memory-server";
import mongoose from "mongoose";

export const dbConnect = async(): Promise<any | string>  => {
    const mongoServer = await MongoMemoryServer.create();
    const MONGOIO_URI = mongoServer.getUri();

    await mongoose.disconnect();

    await mongoose.connect(MONGOIO_URI, {
        dbName : "Weather"
    })

    await storeDocument({
        zip: "96815",
        weather: "sunny",
        tempC: "25C",
        tempF: "60F",
        friends: ["96814", "96826"]
    })

    await storeDocument({
        zip: "96814",
        weather: "rainy",
        tempC: "25C",
        tempF: "60F",
        friends: ["96815", "96826"]
    })

    await storeDocument({
        zip: "96826",
        weather: "cold",
        tempC: "25C",
        tempF: "60F",
        friends: ["96814", "96815"]
    })

    return mongoServer;
} 
