import React from "react";
import "./Searchbox.css"
import searchicon from '../../assets/Searchicon.svg';
const SearchBox = () => {
    return(
        <div className="search-box">
            <input placeholder="Search a album of your choice" className="text-box"/>
            <div className="search-icon-box">
                <img src={searchicon} alt="search"/>
            </div>
        </div>
    )
}

export default SearchBox;