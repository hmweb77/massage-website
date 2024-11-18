const HeroSection = () => {
    return (
      <div
        className="h-screen flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
        }}
      >
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Relax, Refresh, Renew
          </h1>
          <p className="text-base md:text-lg lg:text-xl mt-4">
            Experience the healing touch of a professional massage expert.
          </p>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  