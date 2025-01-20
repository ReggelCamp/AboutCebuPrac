"use client";

import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Body() {
  return (
    <div className="flex flex-col w-full overflow-auto">
      <div className="flex relative w-full h-screen">
        <Image
          alt="cebu"
          className="w-screen h-screen object-cover  brightness-50"
          src="https://cdn.sweetescape.com/images/cities/cebu/cover/536c91dc-154e-4c60-b951-2de168d80e0d.jpg"
        />
        <div className=" w-full h-screen absolute inset-0 z-10 flex justify-center items-center">
          <motion.p
            className=" text-5xl font-bold text-white"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: -0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
          >
            TOP TOURIST DESTINATIONS
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col w-full h-full overflow-hidden bg-black">
        <div className="items-center gap-10 p-10 font-bold w-full h-full flex flex-col">
          <p className="text-5xl  text-white  font-bold  ">WHY VISIT CEBU?</p>
          <motion.div
            className="flex text-white justify-center  items-center w-full"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: -0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="flex items-center justify-end w-full h-full">
              <Image
                className="w-96 h-full rounded-lg"
                alt="cebu"
                src="https://images.unsplash.com/photo-1579957023433-7fad5b83efae?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <p className="w-full text-white  m-10 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </motion.div>

          <motion.div
            className="flex text-white justify-center items-center w-full "
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: -0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="flex items-center justify-end w-full h-full">
              <Image
                className="w-96 h-full rounded-lg"
                alt="cebu"
                src="https://i.pinimg.com/originals/9b/2e/27/9b2e2739215f0f852c6d1de523da82aa.jpg"
              />
            </div>
            <p className="w-full text-white m-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </motion.div>

          <motion.div
            className="flex text-white justify-center items-center w-full"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: -0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="flex items-center justify-end w-full h-full">
              <Image
                className="w-96 h-full rounded-lg"
                alt="cebu"
                src="https://2.bp.blogspot.com/-hySTNJkRpa4/XSfivWLeYTI/AAAAAAAADug/nALsEjcjrqYTiGfVwVqjdBkCAlHiPGajwCLcBGAs/s1600/maravilla-beach-tabuelan-cebu-6.jpg"
              />
            </div>
            <p className="w-full text-white m-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </motion.div>

          <motion.div
            className="flex text-white justify-center items-center w-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: -0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <div className="flex items-center justify-end w-full h-full">
              <Image
                alt="cebu"
                className="w-96 h-full rounded-lg"
                src="https://www.journeyera.com/wp-content/uploads/2016/10/osmena-peak-cebu-03227.jpg"
              />
            </div>
            <p className="w-full text-white m-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
