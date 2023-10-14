import  express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router(); 
// send data into database
router.post('/', async (request,response) => {
    try{
        if ( !request.body.title || !request.body.author)
        {
           return response.status(400).send({
              message : 'send all required fields : title , author'
           });
        }
        const newBook = {
            title : request.body.title,
            author : request.body.author
        }
        const book = await Book.create(newBook);

        return response.status(201).send(book);

    }catch(error){
       console.log(error.message);
       response.status(500).send({
        message : error.message
       });
    }
});

// get data of books from database
router.get('/' , async(request , response) => {
    try {
        const books = await Book.find({});

        return response.status(200).json({
            count : books.length,
            data : books
        });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({message : error.message});
    }
});

// get data of books by Id from database
router.get('/:id' , async(request,response) => {
    try {
        const { id } = request.params;

        const book = await Book.findById(id);

        return response.status(200).json(book);

    } catch (error) {
        console.log(error.message);
        return response.status(500).send({message : error.message});
    }

});

// update data
router.put('/:id' , async (request,response) => {
    try {
        if (!request.body.title || !request.body.author){
            return response.status(400).send({message : 'send all required fields'});
        }

        const { id } = request.params;

        const bookResult = await Book.findByIdAndUpdate(id , request.body);

        if (!bookResult) {
            return response.status(404).send({message : 'book not found'});
        }
        return response.status(200).send({message : 'updated succesfully'});

    } catch (error) {
        console.log(error.message);
        return response.status(500).send({message : error.message});
    }

});

// delete data by id
router.delete('/:id' , async (request,response) => {
    try {
        
      const { id } = request.params;

      const bookDelete = await Book.findByIdAndDelete(id);

      if (!bookDelete){
        return response.status(404).json({ message : 'book not found'});
      }
      return response.status(200).send({message : "book deleted successfully"});

    } catch (error) {
        console.log(error.message);
        return response.status(500).send({message : error.message});
    }
});

export default router;