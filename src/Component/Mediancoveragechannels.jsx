import React, { useEffect, useState } from 'react';
import Mcchannel from'./Mcchannel'
import MediaC2 from './MediaC2';
import Footer from './Footer';

export const Mediancoveragechannels = () => {
  const [startSlide, setStartSlide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartSlide(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="px-6 pt-0 pb-0 overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4 mt-0">
          Media Coverage
        </h2>

        <div className="w-full overflow-hidden">
          <div
            className={`flex flex-nowrap gap-8 transition-transform duration-1000 ease-in-out ${
              startSlide ? '-translate-x-24' : ''
            }`}
          >
            {Mcchannel.map((i, index) => (
              <div className="w-48 flex-shrink-0" key={index}>
                <img
                  src={i.src}
                  alt={i.name}
                  className="object-contain mx-auto"
                  style={{ height: '200px', width: '200px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <MediaC2 />
      <Footer />
    </>
  );
};
  {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-4">
    {MCchannels.map((i, index) => (
      <div
        key={index}
        className="bg-white p-4 w-full flex items-center justify-center shadow-red-200"
      >
        <img
          src={i.src}
          alt={i.name}
          className="object-contain"
          style={{ height: '400px', width: '200px', marginTop: '-3px' }}
        />
      </div>
    ))}
  </div> */}

//   <h2 className="text-3xl font-bold text-center text-blue-600 my-6">
//     News Coverage
//   </h2>
//   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
//     {MediaC2.map((i, index) => (
//       <div
//         key={index}
//         className="bg-white p-4 w-full flex items-center justify-center"
//       >
//         <img
//           src={i.ssrc}
//           alt={i.nname}
//           className="object-contain"
//           style={{ height: '400px', width: '200px', marginTop: '-3px' }}
//         />
//       </div>
//     ))}
//   </div>
// </div>




//     <section className="py-12 bg-white flex justify-center">
//       <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-7xl">
//         {/* Business Card */}
//         <div className="bg-blue-700 text-white p-10 rounded-3xl shadow-xl w-full md:w-[620px] ml--4" style={{height:'400px', width:'550px'}}>
//           <h2 className="text-3xl font-bold">Hire the best talent</h2>
//           <p className="mt-3 text-gray-200 text-lg">
//             "Streamline your hiring process and find top talent effortlessly! Download Digital Labour Chowk today!"
//           </p>
//           <div className="mt-6 text-4xl font-bold">100,000+</div>
//           <p className="text-gray-300 text-lg">Worker network</p>
//           <div className="mt-2 text-4xl font-bold">10+</div>
//           <p className="text-gray-300 text-lg">Worker skills</p>
//           <button className="btn mt-6 rounded-full bg-white text-blue-700 border-none px-6 py-3 text-lg font-bold hover:bg-gray-200">
//             ⬇ DOWNLOAD BUSINESS APP
//           </button>
//         </div>

//         {/* Worker Card */}
//         <div className="bg-blue-700 text-white p-10 rounded-3xl shadow-xl w-full md:w-[620px] ml-10" style={{height:'400px', width:'550px'}}>
//           <h2 className="text-3xl font-bold">Find your next job</h2>
//           <p className="mt-3 text-gray-200 text-lg">
//             "Unlock endless job opportunities and secure your future with just one click! Download Digital Labour Chowk now!"
//           </p>
//           <div className="mt-6 text-4xl font-bold">3,000+</div>
//           <p className="text-gray-300 text-lg">Employers for you</p>
//           <div className="mt-2 text-4xl font-bold">1,000+</div>
//           <p className="text-gray-300 text-lg">Monthly job openings</p>
//           <button className="btn mt-6 rounded-full bg-white text-blue-700 border-none px-6 py-3 text-lg font-bold hover:bg-gray-200">
//             ⬇ DOWNLOAD WORKER APP
//           </button>
//         </div>
//       </div>

   
//     </section>
  
 
<Footer/>
    
    
  

export default Mediancoveragechannels