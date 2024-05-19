import { motion } from 'framer-motion';
import { Info, X, GripHorizontal } from 'lucide-react';
import { useRef, useState } from 'react'


export default function Modal() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  return (
    <motion.div ref={ref} className="z-50 mt-4 flex  w-[25rem] flex-shrink flex-col items-center justify-center space-y-2 rounded-2xl bg-white px-5 py-3 pb-3 md:mr-4">
      <button
        onClick={() => setShow(!show)}
        className="flex items-center justify-between space-x-3 px-2 text-2xl font-semibold text-black"
      >
        <p>Deforestation in Jalisco</p>
        {show ? <Info size={24} /> : <X size={24} />}
      </button>
      {show && (
        <div className="flex h-full w-full items-start justify-center space-y-2 text-left text-black">
          <p className="">
            Reported new COVID-19 cases per 100,000 residents during the week of
            August 16, 2020
          </p>
        </div>
      )}
      <div className="flex h-5 w-full items-center justify-center">
        <GripHorizontal size={30} className="stroke-gray-600" />
      </div>
    </motion.div>
  );
}