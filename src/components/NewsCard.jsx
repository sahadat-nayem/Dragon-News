

import { AiFillEye, AiOutlineShareAlt, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="max-w-md p-4 bg-white rounded-lg shadow-md border border-gray-200 mx-auto">
      {/* Author and Date */}
      <div className="flex items-center mb-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold">{news.author.name}</h3>
          <p className="text-sm text-gray-500">{news.author.published_date}</p>
        </div>
        <div className="ml-auto text-gray-500">
          <AiOutlineShareAlt size={20} />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{news.title}</h2>

      {/* Image */}
      <img
        src={news.image_url}
        alt="News"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Details */}
      <p className="text-gray-700 text-sm mb-2">
        {news.details.slice(0, 100)}...{" "}
        <Link to={`/news/${news._id}`} className="text-blue-500 font-semibold cursor-pointer">Read More</Link>
      </p>

      {/* Rating and Views */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <AiFillStar className="text-yellow-500" size={20} />
          <AiFillStar className="text-yellow-500" size={20} />
          <AiFillStar className="text-yellow-500" size={20} />
          <AiFillStar className="text-yellow-500" size={20} />
          <AiFillStar className="text-yellow-500" size={20} />
          <span className="text-gray-600 ml-2">{news.rating.number}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <AiFillEye size={20} />
          <span className="ml-1">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
