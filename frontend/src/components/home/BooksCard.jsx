import SingleBookCard from "./SingleBookCard.jsx";

const BooksCard = ( {books} ) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {books.map((item,index) => (
            <SingleBookCard key={item._id} book={item} index={index}/>
        ))}

    </div>
  )
}

export default BooksCard