import mongoose from 'mongoose';

const otherSchema = new mongoose.Schema({
    hobby: [String],
    intent: [String],
    userId: String
});

const OtherModel = mongoose.model('others', otherSchema);

export default OtherModel;