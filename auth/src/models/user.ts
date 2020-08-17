import mongoose from 'mongoose';

// NOTE :: User Attributes Properties
interface UserAttrs {
  email: string;
  password: string;
}

// NOTE :: User Model Properties
interface UserModel extends mongoose.Model<any> {
  build(attrs: UserAttrs): any;
}

// NOTE :: User Document Properties
// interface UserDoc extends

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<any, UserModel>('User', userSchema);

export { User };
