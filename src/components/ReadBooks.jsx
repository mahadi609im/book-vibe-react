import { FaRegStar } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { LuUsers } from 'react-icons/lu';
import { TbPageBreak } from 'react-icons/tb';
import { useNavigate } from 'react-router';

const ReadBooks = ({ book }) => {
  const {
    bookId,
    category,
    author,
    bookName,
    image,
    tags,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book || {};

  const navigate = useNavigate('');

  return (
    <div
      onClick={() => navigate(`/bookDetails/${bookId}`)}
      className="w-full border border-[#13131326] p-6 shadow cursor-pointer mt-8"
    >
      <div className="flex">
        <div className="bg-[#F3F3F3] w-[230px] py-[30px] px-[50px] rounded-2xl">
          <img
            className="w-full max-h-[172px] h-full object-cover"
            src={image}
            alt="Shoes"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p className="font-medium">by : {author}</p>
          <div className="flex gap-4">
            <div>
              <b>Tag</b>{' '}
              {tags &&
                tags.map((el, idx) => (
                  <div
                    key={idx}
                    className="badge bg-[#23be0a0d] text-[#23BE0A]"
                  >
                    {el}
                  </div>
                ))}
            </div>
            <p className="text-[#131313cc] flex gap-1 items-center">
              <FiMapPin />
              Year of Publishing: {yearOfPublishing}
            </p>
          </div>
          <div className="flex gap-4">
            <div>
              {' '}
              <p className="flex gap-1 items-center">
                <LuUsers />
                Publisher: {publisher}
              </p>
            </div>
            <p className="text-[#131313cc] flex gap-1 items-center">
              <TbPageBreak />
              Page {totalPages}
            </p>
          </div>
          <div className="border border-dashed w-full border-[#13131326] my-5"></div>
          <div className="flex gap-4">
            <span className="py-[11px] px-[20px] bg-[#328eff26] text-[#328EFF] rounded-4xl ">
              Category: {category}
            </span>
            <span className="py-[11px] px-[20px] bg-[#ffab3326] text-[#FFAC33] rounded-4xl">
              Rating: {rating}
            </span>
            <button
              onClick={() => navigate(`bookDetails/${bookId}`)}
              className="py-[10px] px-[20px] bg-[#23BE0A] text-white rounded-4xl"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;
