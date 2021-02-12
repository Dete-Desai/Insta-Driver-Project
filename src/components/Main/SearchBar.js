import { formatTimeStr } from "antd/lib/statistic/utils";
import React from "react";

export const SearchPage = () => {
    return (
        <div className="">
            <div className="search">
                <button type="submit" className="searchButton">
                    <i className="fa fa-search" style={{ marginLeft: 10 }} />
                </button>
                <input type="text" className="searchTerm " placeholder="Search Groups" />
            </div>
        </div>
    );
};

export const SearchPage1 = () => {
    return (
        <div className="wrap1">
            <div className="search1">
                <button type="submit" className="searchButton1">
                    <i className="fa fa-search" style={{ marginLeft: 10 }} />
                </button>
                <input type="text" className="searchTerm1" placeholder="What are you looking for?" />
            </div>
        </div>
    );
};

export const SearchPage2 = () => {
    return (
        <div className="wrap2">
            <div className="search2">
                <button type="submit" className="searchButton2">
                    <i className="fa fa-search" style={{ marginLeft: 10 }} />
                </button>
                <input type="text" name="search" className="searchTerm2" placeholder="Search Groups" />
            </div>
        </div>
    );
};
