import mongoose from '../dbConnect';

let Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

UserSchema.set('collection', 'user');

const UserModel = mongoose.model('user', UserSchema);

export {
    mongoose,
    UserModel,
};