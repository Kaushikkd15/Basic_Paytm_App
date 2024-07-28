import { mongoose} from "mongoose";
import { DB_URL } from "./config.js";
mongoose.connect(DB_URL);

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
   
});

const accountSchema = new mongoose.Schema({
    userId : {type: mongoose.Schema.Types.ObjectId , ref: "user"},
    balance: {
        type: Number,
        required: true
    }
})

export const account = mongoose.model('account', accountSchema);
export const user= mongoose.model('user', userSchema);
