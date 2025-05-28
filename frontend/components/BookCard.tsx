type BookCardProps = {
  title: string;
  author: string;
  available: boolean;
  onAction?: () => void;
};

const BookCard = ({ title, author, available, onAction }: BookCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-bold text-indigo-700">{title}</h2>
      <p className="text-gray-600">by {author}</p>
      <p
        className={`mt-2 font-semibold ${
          available ? "text-green-600" : "text-red-600"
        }`}
      >
        {available ? "Available" : "Issued"}
      </p>
      {onAction && (
        <button
          onClick={onAction}
          disabled={!available}
          className={`mt-4 w-full px-4 py-2 rounded-xl font-semibold text-white ${
            available
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-gray-400 cursor-not-allowed"
          } transition duration-200`}
        >
          {available ? "Issue Book" : "Not Available"}
        </button>
      )}
    </div>
  );
};

export default BookCard;