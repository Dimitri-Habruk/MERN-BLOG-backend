import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            uniqur: true
        },
        password: {
            type: String,
            required: true,
        },
        posts:[{
            type: mongoose.Schema.Types.ObjectID,
            ref: 'Post'
        }]
    },
    {
        timestamps: true
    }
)

export default mongoose.model('User', UserSchema)