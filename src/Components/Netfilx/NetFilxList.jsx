import React from 'react';
import "./Netfilx.css";
import NetFlixData from './NetflixData';
import NetFilxStorage from './NetFilxStorage';

const NetFilxList = () => {
  return (
    <>
      <div className="netflix">
        <h1>Top 5 Netflix Series</h1>

            <div className="netflix_details">
            {NetFlixData.map((list, index)=>{
                return <NetFilxStorage key={index} list={list}/>;
            })}
            </div>
      </div>
    </>
  );
};

export default NetFilxList;
