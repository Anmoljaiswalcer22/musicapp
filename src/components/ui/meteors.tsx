



'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // adjust this import if your `cn` function is elsewhere

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Only runs on the client
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
    >
      {Array.from({ length: number }).map((_, idx) => {
        const position = (idx * (screenWidth / number));

        return (
          <span
            key={`meteor-${idx}`}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: "-40px",
              left: `${position}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.floor(Math.random() * 5 + 5)}s`,
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};
