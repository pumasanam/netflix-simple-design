import React from 'react';

const NetFilxStorage = ({list}) => {
  return (
    <>
        <div className="netfilxStorage">
            <img src={list.img} alt="" />

            <div className="netfilx_Text">
            <h4>{list.title}</h4>
            <h5>{list.text}</h5>
            <a href={list.link}>Watch Now</a>
            
            </div>
            
        </div>
    </>
  );
};

export default NetFilxStorage;
