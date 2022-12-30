// const books = require('../data/books')
const { findByIdAndUpdate } = require('../models/Book')
const Book =  require('../models/Book')

const getAllBooks = (req,res)=>{
    Book.find().then((books)=>{
        res.json(books)
    }).catch(
        (err) =>{
            console.log(err)
        }
    )
}

const postnewbooks = (req,res)=>{
//     let new_book = {
//         'id' : books[books.length-1].id + 1,
//         'title' : req.body.title,
//         'author' : req.body.author
//     }
//     console.log(new_book)
//     books.push(new_book)
//     res.status(201).send(books)
// }

Book.create(req.body).then((book)=>{
    res.status(201).json(book)
})
.catch((err)=>{
    console.log(err)
}
)
}

const putbook = (req,res)=>{
    res.status(501).send({"reply":"Put request not supported"})
    }

const updateBook=(req,res)=>{
    By.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    .then((book)=>{
        res.json(book)
    }).catch(next)
}

const  deletebooks = (req,res) =>{
    Book.findByIdAndDelete(re.params.id)
        .then((reply)=>{
            res.json(reply)
        }).catch(next)

}

const deletebookbyId=(req,res,nect)=>{
    Book.findByIdAndDelete(req.params.id)
}

const getonebook = (req,res)=>{   
    the_books = books.find((item)=> item.id ==req.params.id) 
    if(!the_books) res.status(404).json({"reply" : " book not found"})
    res.json(the_books)
}

const postonebook  = (req,res)=>{
    the_books = books.find((item)=> item.id ==req.params.id) 
    if(!the_books) {
       
        let new_book = {
            'id' : books[books.length-1].id + 1,
            'title' : req.body.title,
            'author' : req.body.author
        }
        console.log(new_book)
        books.push(new_book)
        res.status(201).json(books)

    }else{
    res.status(504).json({"reply": "Cannot post new book in the current id"})
    }

   

    
}
const deletebook = (req,res) =>{
    let newlist = books.filter(function (items){
        return items.id != req.params.id
    })
    res.json(newlist)

}

const putonebook = (req,res) =>{
  let updatedbooks = books.map((item)=>{
    if(item.id == req.params.id){
        item.title = req.body.title
        item.author = req.body.author
    }
    return item
   })
   res.json(updatedbooks)

}
module.exports = {getAllBooks,postnewbooks,putbook,deletebooks,getonebook,postonebook,deletebook,putonebook,updateBook,deletebookbyId}