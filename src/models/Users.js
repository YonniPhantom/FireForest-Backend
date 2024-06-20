const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    dateOfBirth: Date,
    avatar: Buffer,
    verified: Boolean,
    enable: Boolean,
    level: Number,
    functionUsageCount: { type: Number, default: 0 },
    lastFunctionUsage: Date,
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;