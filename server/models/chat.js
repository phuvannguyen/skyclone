import mongoose  from 'mongoose';

const  { Schema } = mongoose

const chatSchema = new Schema({
    receiverId: {
        type: Schema.ObjectId
        
    },
    isGroup: Boolean,
    parent: {
        type: Schema.ObjectId,
        ref: "Chat",
    },

    title: String,
    description: String,
    
    firstMessageDate: Date,
    lastMessageDate: Date,
    
    sticky: {
        type: Schema.ObjectId,
        ref: 'Message',
      },
    
    closed: Boolean,
    
    

},{timestamps: true});

const Chat = mongoose.model('chat', chatSchema);

export default Chat;