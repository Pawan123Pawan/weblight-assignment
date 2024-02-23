import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categoryModels = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});
// export default category = mongoose.model('Category', categoryModels)

export default mongoose.model("Categorys", categoryModels);
