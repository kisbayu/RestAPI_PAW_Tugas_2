module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            title : String,
            author : String,
            year : Number,
            avaibility : Boolean
        }
    )

    schema.method("toJSON", function(){
        const{__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Book = mongoose.model("books", schema)
    return Book

}