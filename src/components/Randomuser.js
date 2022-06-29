import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Randomuser() {
  let currentOffset = 0;
  const [randomuser, setrandomuser] = useState([]);

  const loadTenrandomuser = () => {
    const tenrandomuser = [];
    axios
      .get(`https://randomuser.me/api/?results=40&offset=${currentOffset}`)
      .then(({ data }) => {
        data.results.forEach((p) => tenrandomuser.push(p.name.first));
        setrandomuser((randomuser) => [...randomuser, ...tenrandomuser]);
      });
      
    currentOffset += 10;
  };

  const handleScroll = (e) => {
    console.log(e.target.documentElement.scrollTop);
    console.log(window.innerHeight);
    console.log(e.target.documentElement.scrollHeight);
    // console.log(
    //   Math.ceil(e.target.documentElement.scrollTop + window.innerHeight)
    // );
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      loadTenrandomuser();
    }
  };

  useEffect(() => {
    loadTenrandomuser();
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="App" >
      <div >
        {randomuser.map((p, i) => {
          return (
            <div className="container">
            <div
              key={i}
              className='row'
            >
              <div className='col-2'>{i + 1}.</div>
              <div className='col-7'>{p}</div>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Randomuser;