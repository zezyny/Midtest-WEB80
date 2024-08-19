import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    fullName: String,
    dob: Date,
    pob: String,
    nation: String,
    education: [
        {
            school: String,
            yearStart: Number,
            yearEnd: Number
        }
    ],
    userId: String
});

const ProfileModel = mongoose.model('profiles', profileSchema);

export default ProfileModel;