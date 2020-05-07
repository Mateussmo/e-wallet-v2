import mongoose from "mongoose";

require("dotenv").config();

class Mongo {
  public mongoConnection: Promise<mongoose.Mongoose>;

  constructor() {
    this.init();
  }

  private init(): void {
    this.mongoConnection = mongoose.connect(process.env.MONGO_DB as string, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }
}
export default new Mongo();
