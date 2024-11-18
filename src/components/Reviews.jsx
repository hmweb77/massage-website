const ReviewsSection = () => {
    const reviews = [
      {
        name: 'John Doe',
        feedback: 'Amazing massage experience. Felt rejuvenated!',
      },
      {
        name: 'Jane Smith',
        feedback: 'The therapist was very professional and kind.',
      },
      {
        name: 'Emma Brown',
        feedback: 'Highly recommend! Great ambiance and service.',
      },
    ];
  
    return (
      <div
        id="reviews"
        className=" px-4 sm:px-16 py-12 md:py-16"
        style={{ backgroundColor: '#d6f3f3' }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-sm bg-white"
            >
              <p className="italic text-gray-600">"{review.feedback}"</p>
              <p className="mt-4 font-bold text-right text-blue-500">
                - {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ReviewsSection;
  