const AboutSection = () => {
    return (
      <div
        id="about"
        className=" mx-auto px-4 py-12 md:py-16 bg-light-blue"
        style={{ backgroundColor: '#d6f3f3' }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/jurica-koletic-7YVZYZeITc8-unsplash.jpg"
              alt="Massage Expert"
              className="h-64 w-64 object-cover rounded-full shadow-lg"
            />
          </div>
  
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Aligning Your Career with Vision and Passion
            </h2>
            <p className="text-gray-700 text-lg">
              With years of experience in therapeutic massage, we specialize in
              helping clients achieve relaxation, relieve pain, and enhance
              well-being. Let our expertise help you unwind and find your inner
              peace. Our proven track record of delivering high-quality care
              sets us apart.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutSection;
  