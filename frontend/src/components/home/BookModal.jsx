import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 bottom-0 left-0 right-0 z-50 flex justify-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="text-red-600 cursor-pointer text-3xl top-6 right-6 absolute"
          onClick={onClose}
        />
        <div className="flex justify-start books-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="py-1">{book.title}</h2>
        </div>
        <div className="flex justify-start books-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="py-1">{book.author}</h2>
        </div>
        <p className="flex justify-center items-center">Description</p>
        <p className="my-2 first-letter:text-red-600">
          ha oahi eai jbai ofhziy l n ifbiza jiuouza ia azoubfi aibf ndj zb ibaf
          biz gf oub a izbiu abd iu ay dbidb iu b a u baiu idb abdia b i abdj
          baiubd yi ab ij adiba iud babd oi an d abd iuadlandoia nua b yv ayfa
          dajdiad uvadyub aob ajodbaibfdu avdebforngojesbigybezgbzengozinzuegiez
          ze guibzrigu biugoeo ieubenojen
        </p>
      </div>
    </div>
  );
};

export default BookModal;
