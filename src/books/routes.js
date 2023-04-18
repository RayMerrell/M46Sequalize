const {Router} = require("express");
const bookRouter = Router();

const {addBook}=require("./controllers");
const {getAllBooks}=require("./controllers");
const {updateBook}=require("./controllers");
const {deleteBook}=require("./controllers");

bookRouter.post("/books/addbook", addBook);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.post("/books/updateBook", updateBook);
bookRouter.delete("/books/deleteBook", deleteBook);

module.exports=bookRouter;