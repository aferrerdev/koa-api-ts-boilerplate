import mongoose from "mongoose";
import "dotenv/config";

export default class MongoDbConnection {

    public connect() {
        try {
            // Load configuration from .env file
            const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
            mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

            // Initialize events
            mongoose.connection.on("connected", this.onConnected);
            mongoose.connection.on("error", this.onError);
            mongoose.connection.on("disconnected", this.onDisconnect);
        }
        catch (error) {
            console.log("Error connecting to mongodb");
        }
    }

    private onConnected() {
        console.log("Connected to mongodb");
    }

    private onError() {
        console.log("Error connecting to mongodb");
    }

    private onDisconnect() {
        console.log("Disconnected from mongo");
    }
}