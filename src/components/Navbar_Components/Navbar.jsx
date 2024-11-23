import React from "react";
import YoutubeImage from "./YoutubeImage";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./SearchBar";
import ReactHooks from "../ReactHooks";

const Navbar = () => {
  return (
    <div className="flex">
      <div className="flex items-center gap-14 mt-4 ml-7 mr-7">
        <div className="flex items-center gap-6">
          <RxHamburgerMenu style={{ height: "20px", width: "20px" }} />

          <YoutubeImage />
        </div>

        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}; 

export default Navbar;
