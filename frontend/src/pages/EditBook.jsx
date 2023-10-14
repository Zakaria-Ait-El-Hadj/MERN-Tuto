import React , {useEffect, useState} from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {

  const [title , setTitle] = useState('');
  const [author , setAuthor] = useState('');
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar} = useSnackbar();

  useEffect( () => {
    setLoading(true);
    axios.get(`http://localhost:3000/books/${id}`)
    .then((response) => {
      setAuthor(response.data.author);
      setTitle(response.data.title);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error)
      setLoading(false);
    })
  },[]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
    };
    setLoading(true);
    axios.put(`http://localhost:3000/books/${id}`, data)
    .then( () =>{
      setLoading(false);
      enqueueSnackbar('Book edited successfully' , {variant : 'success'});
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
      enqueueSnackbar('Book edition failed' , {variant : 'error'});
      setLoading(false);
    })
  }

  return (
    <div className='p-4'>
       <BackButton/>
       <h1 className='text-3xl my-4 '>Edit Book</h1>
       {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl text-gray-500'>Title</label>
          <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          ></input>
        </div>
        <div className='my-4'>
          <label className='text-xl text-gray-500'>Author</label>
          <input
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          ></input>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>Edit</button>
      </div>
    </div>
  )
}

export default EditBook