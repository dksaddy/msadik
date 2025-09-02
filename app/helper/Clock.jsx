"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MatrixClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getFilledBoxes = (totalBoxes, value, unitSize) => {
    return Math.floor(value / unitSize);
  };

  const getFilledBoxesProgress = (totalBoxes, value, step) => {
    // Number of ranges completed (including current one)
    const boxesLit = Math.ceil(value / step);
    return Math.min(boxesLit, totalBoxes);
  };

  const renderMatrix = (filledCount, totalBoxes, isHour = false) => {
    return (
      <div className="grid grid-cols-3 gap-[5px]">
        {Array.from({ length: totalBoxes }).map((_, i) => {
          const isFilled = i < filledCount;
          const boxColor = isFilled
            ? "bg-black dark:bg-white"
            : "bg-green-500 dark:bg-green-500";

          return (
            <div
              key={i}
              className={`w-2 h-2 flex items-center justify-center rounded ${boxColor}`}
            >
            </div>
          );
        })}
      </div>
    );
  };


  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const filledHours = getFilledBoxes(12, hours, 1); // old style
  const filledMinutes = getFilledBoxesProgress(12, minutes, 5); // range+progress
  const filledSeconds = getFilledBoxesProgress(12, seconds, 5); // range+progress


  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-3 p-3 font-sans w-full max-w-xs mx-auto md:mt-5"
    >
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center">
          {renderMatrix(filledHours, 12, true)}
        </div>

        <div className="flex flex-col items-center">
          {renderMatrix(filledMinutes, 12)}
        </div>

        <div className="flex flex-col items-center">
          {renderMatrix(filledSeconds, 12)}
        </div>
      </div>
    </motion.div>
  );
}
