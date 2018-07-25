const { mongoose, Schema } = new (require('../core/Model'));

const GenreSchema = new Schema(
  {
    name: { type: String, required: true, max: 100, min: 3 },
  }, 
  {
    collection: 'genres'
  }
);

// Virtual for bookinstance's URL
GenreSchema
.virtual('url')
.get( () => `/catalog/genre/${this._id}`);

//Export model
module.exports = mongoose.model('Genre', GenreSchema);