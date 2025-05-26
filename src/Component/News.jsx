import React from "react";

const News = () => {
  const mediaLogos = [
    { src: "https://digitallabourchowk.com/wp-content/uploads/2024/12/20-1.png", alt: "CNBC TV18" },
    { src: "https://digitallabourchowk.com/wp-content/uploads/2024/12/16.png", alt: "YourStory" },
    { src: "https://digitallabourchowk.com/wp-content/uploads/2024/12/18.png", alt: "Gyan Darshan" },
    { src: "https://digitallabourchowk.com/wp-content/uploads/2024/12/13.png", alt: "NBT" },
    { src: "https://digitallabourchowk.com/wp-content/uploads/2024/12/18.png", alt: "Jagran Business" },
  ];

  const newsLogos = [
    { src: "https://digitallabourchowk.com/wp-content/uploads/2024/12/14-1.png", alt: "Sahara" },
    { src: "https://digitallabourchowk.com/wp-content/uploads/2024/12/15-1.png", alt: "Ganadesh" },
    { src: "https://digitallabourchowk.com/wp-content/uploads/2024/12/16-1.png", alt: "Morning India" },
    { src: "https://digitallabourchowk.com/wp-content/uploads/2024/12/19-1.png", alt: "Dainik Bhaskar" },
    { src: "https://digitallabourchowk.com/wp-content/uploads/2024/12/17-1.png", alt: "Prabhat Khabar" },
  ];

  return (
    <div className="py-12 bg-white text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-8">Media Coverage</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center mb-12">
        {mediaLogos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="h-50 w-auto p-8 object-contain" />
        ))}
      </div>

      <h2 className="text-4xl font-bold text-blue-700 mb-8">News Coverage</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
        {newsLogos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="h-50 w-auto p-8 object-contain" />
        ))}
      </div>

      
    </div>

    
  );
};

export default News;
