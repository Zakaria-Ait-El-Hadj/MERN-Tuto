import {PiBookOpenTextLight} from 'react-icons/pi';
import {BiUserCircle , BiShow} from 'react-icons/bi';
import {AiOutlineEdit , AiOutlineKey} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineDelete} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookModal from './BookModal';


const SingleBookCard = ({book,index}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 my-2 m-4 relative hover:shadow-xl'>  
                 <div className='flex justify-start books-center gap-x-2'>
                 <AiOutlineKey className='text-red-300 text-2xl my-2'/>                 
                  <h2 className='my-2 text-grey-400'>{book._id}</h2>
                  <h4 className='absolute top-1 right-2 px-3 py-1 bg-red-300 rounded-lg'>
                       {index + 1}
                  </h4>
                 </div>
                  
                <div className='flex justify-start books-center gap-x-2'>
                   <PiBookOpenTextLight className='text-red-300 text-2xl'/>
                   <h2 className='py-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start books-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl'/>
                    <h2 className='py-1'>{book.author}</h2>
                </div>
                <div className='flex justify-between books-center gap-x-2 mt-4 p-4'>
                    <BiShow className='text-2xl text-blue-800 hover:text-black cursor-pointer'
                            onClick={() => setShowModal(true)}/>

                    <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className='text-2xl text-green-800 hover:text-black'/>
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-500 hover:text-black'/>
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className='text-2xl text-red-500 hover:text-black'/>
                    </Link>    
                </div>
                {
                    showModal && ( <BookModal book = {book} onClose={ () => setShowModal(false)}/>)
                }
            </div>
  )
}

export default SingleBookCard