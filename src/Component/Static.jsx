import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const intervalTime = 10;
    const steps = duration / intervalTime;
    const increment = value / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.span
      className="text-2xl md:text-3xl font-bold"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {count.toLocaleString()}+
    </motion.span>
  );
};

const Static = () => {
  return (
    <div className="bg-blue-600 text-white py-10 ml-3 mt-3" style={counterStyle}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="flex flex-col">
            <Counter value={100000} />
            <span className="text-sm md:text-base">Registered workers</span>
          </div>

          <div className="flex flex-col">
            <Counter value={3500} />
            <span className="text-sm md:text-base">Customers</span>
          </div>

          <div className="flex flex-col">
            <Counter value={15} />
            <span className="text-sm md:text-base">Total Skills</span>
          </div>

          <div className="flex flex-col">
            <Counter value={1000} />
            <span className="text-sm md:text-base">Daily Jobs</span>
          </div>

          <div className="flex flex-col">
            <Counter value={27} />
            <span className="text-sm md:text-base">States Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};


const counterStyle ={
  borderBottomLeftRadius:"50px",
  borderTopLeftRadius:"50px",
  borderTopRightRadius:"50px",
  borderBottomRightRadius:"50px",
}






export default Static;