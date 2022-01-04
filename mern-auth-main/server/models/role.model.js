const mongoose = require('mongoose');

const { Schema } = mongoose;

const RoleSchema = new Schema({
  name: { type: String, required: true },
});

// Export model
module.exports = mongoose.model('Role', RoleSchema);
