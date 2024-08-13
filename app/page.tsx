

"use client"

import {
  useMotionValue,
  useMotionTemplate,
  motion,

} from "framer-motion";
import React, { useEffect, useRef } from "react"

export default function CompSlider() {

  let XX = useMotionValue(50);
  let xab = useMotionValue(0);
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    if (ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      const centerPosition = (width / 2);
      xab.set(centerPosition)
      XX.set((centerPosition / width) * 100)


    }

  }, [])



  const HandlePosition = (e: React.MouseEvent) => {
    let { left, width } = e.currentTarget.getBoundingClientRect();

    const X = (e.clientX - left);
    const Y = e.clientY
    XX.set(((e.clientX - left) / width) * 100)
    xab.set(X)



  }



  var Xpos = useMotionTemplate`polygon(${XX}% 0%, 100% 0%, 100% 100%, ${XX}% 100%)`;
  var Xab = useMotionTemplate`${xab}px`;
  var XabT = useMotionTemplate`${XX}%`;




  return (

    <div className=" w-full  flex items-center h-screen overflow-hidden ">

      {/* 2 */}
      <div className=" flex  w-full h-full items-center justify-center " >

        <motion.div className=" max-w-[600px] relative h-full w-full " ref={ref}
          onMouseMove={HandlePosition}
        >
          {/* 1 */}
          <motion.div className=" absolute inset-0 w-full h-full "
          >
            <div className="absolute text-xs text-black bg-white/70 rounded-xl font-bold px-3 py-1 top-4 left-4">Before</div>

            <img src="https://r2.clarityai.co/inputs/13_before.webp" alt="befoer" className=" w-full h-full object-cover  " />
          </motion.div>
          {/* 2 */}
          <motion.div className=" absolute inset-0 w-full h-full "
            style={{
              clipPath: Xpos
            }}
          >
            <div className="absolute text-xs text-white rounded-xl font-bold px-3 py-1 top-4 right-4 bg-gradient-to-r via-blue-500  to-emerald-600 from-sky-400 background-animate">After</div>

            <img src="https://r2.clarityai.co/inputs/13_after.webp" alt="after" className=" w-full h-full object-cover  " />
          </motion.div>
          <motion.div className=" absolute size-10 rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2     "
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: Xab ? 1 : 0
            }}
            style={{
              left: Xab,
            }}
          >
            <div className=" relative z-10 ">

              <svg xmlns="http://www.w3.org/2000/svg" className="  text-white fill-white stroke-[2px] stroke-white w-full h-full " viewBox="-8 -3 16 6"> <path d="M -5 -2 L -7 0 L -5 2 M 5 -2 L 7 0 L 5 2" fill="none" vector-effect="non-scaling-stroke"></path>
              </svg>

            </div>



          </motion.div>
          <motion.div className=" absolute w-1  h-full bg-white/90  -translate-x-1/2 "
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: Xab ? 1 : 0
            }}
            style={{
              left: Xab,
              top: `0px`,
            }}
          />
        </motion.div>

      </div>
    </div>

  )



}











