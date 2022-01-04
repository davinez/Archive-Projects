const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  // Array type because it can contain multiple 'Roles' references
  roles: [{ type: Schema.Types.ObjectId, ref: 'Role', required: true }],
});

// Export model
module.exports = mongoose.model('User', UserSchema);
