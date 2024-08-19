import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
    skill: [String],
    projects: [
        {
            projectName: String,
            desc: String,
            role: String,
            startDate: Date,
            endDate: Date
        }
    ],
    employments: [
        {
            company: String,
            role: String,
            startDate: Date,
            endDate: Date
        }
    ],
    userId: String
});

const CareerModel = mongoose.model('career', careerSchema);

export default CareerModel;