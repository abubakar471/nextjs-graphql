/*
 * @jest-environment node 
* */

import {dbConnect} from "../../middlewares/db-connect";
import {MongoMemoryServer} from "mongodb-memory-server";
import mongoose from "mongoose";

describe("dbConnect", () => {
    let connection: any;

    afterEach(async() => {
        jest.clearAllMocks();
        
        if(connection){
            await connection.stop();
        }

        await mongoose.disconnect();
    });

    afterAll(async() => {
        jest.restoreAllMocks();
    });

    test("calls MongoMemoryServer.create()", async() => {
        const spy = jest.spyOn(MongoMemoryServer, "create");

        connection = await dbConnect();

        expect(spy).toHaveBeenCalled();
    });

    test("calls mongoose.disconnect()", async() => {
        const spy = jest.spyOn(mongoose, "disconnect");

        connection = await dbConnect();

        expect(spy).toHaveBeenCalled();
    });

    test("calls mongoose.connect()", async() => {
        const spy = jest.spyOn(mongoose, "connect");

        connection = await dbConnect();

        const MONGO_URI = connection.getUri();

        expect(spy).toHaveBeenCalledWith(MONGO_URI, {dbName : "Weather"});
    })
})
