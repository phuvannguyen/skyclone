import  mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    username: {
        type: String,
        index: true,
        unique: true,       
        
    },
    email: {
        type: String,
        index: true,
        unique: true,     
        
    },
    password: {
        type: String        
    },    
    github: { type: String, unique: true, sparse: true },
    google: { type: String, unique: true, sparse: true },    
    profile: {
        name: String,
        avatar_url: String,
        location: String,
        gender: String,
        status: String

    }
       	    
    
}, {timestamps: true});



const Users = mongoose.model('users', userSchema);
export default Users;