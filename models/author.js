const { mongoose, Schema } = new (require('../core/Model'));

const AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }, 
  {
    collection: 'authors'
  }
);

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () { 
  return `${this.family_name}, ${this.first_name}`;
});

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () { 
  return `/catalog/author/${this._id}`;
});

module.exports = mongoose.model('Author', AuthorSchema);