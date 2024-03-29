import React from "react";

import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import KeyWest from "../assets/keywest.jpg";
import SelectCards from "./SelectCards";


const Selects = () => {
  return (
    <>
      <div className=" max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SelectCards bg={BoraBora} text={"Maldives"} />
        <SelectCards bg={BoraBora2} text={"Singapore"} />
        <SelectCards bg={Maldives} text={"Malaysia"} />
        <SelectCards bg={Maldives2} text={"Bangkok"} />
        <SelectCards bg={KeyWest} text={"Sri Lanka"} />
        <SelectCards bg={Maldives3} text={"Indonesia"} />
      </div>
    </>
  );
};

export default Selects;
