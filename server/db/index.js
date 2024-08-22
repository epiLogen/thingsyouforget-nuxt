import mongoose from "mongoose"

const config = useRuntimeConfig()
const URL = `mongodb+srv://${config.MONGO_ADMIN}:${config.MONGO_ADMIN_PASS}@${config.MONGO_HOST}/${config.MONGO_DB}?retryWrites=true&w=majority`

export default async () => {
  try {
    await mongoose.connect(URL)
    console.log("DB connection established.")
  } catch (err) {
    console.log("DB connection failed.", err)
  }
};