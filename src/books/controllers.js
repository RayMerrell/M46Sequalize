const Book= require("./model");

const addBook = async(req, res) =>{
    try {
        const book = await Book.create({ 
            title: req.body.title,
            author:req.body.author,
            genre:req.body.genre
        });
        const successResponse= {
            message:"Success",
            book:book
        };
        res.status(201).json({});
    } catch (error) {
        console.error(error);        
    }
}
const getAllBooks = async (req, res) =>{
    try {
        const bookList = await Book.findAll();
        res.status(200).json({message:"Success",books:bookList});
    } catch (error) {
        console.error(error);
    }
} 
const updateBook = async (req, res)=>{
    try {
        const newBook =await Book.update(
            {author:req.body.newAuthor},
            {where:
                {title:req.body.title}
            }
        )
        res.status(201).json({message:"Success", newBook:newBook})
    } catch (error) {
        console.error(error);        
    }
}
const deleteBook = async(req, res)=>{
    try {
        rc = await Book.destroy({
            where:{title:req.body.title}
        })
        res.status(201).json({message:"successfully deleted", return:rc});
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    addBook,
    getAllBooks,
    updateBook,
    deleteBook
};