
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
  
// } from "react-router-dom";
// import Homepage from "./components/Homepage";
// import Login from "./components/Login";
import Randomuser from "./components/Randomuser";


function App() {
  return (
    // <Router>
    //   <div className="App">
       

    //     <Routes>
    //       <Route exact path="/" component={Homepage} />
    //       <Route exact path="/Login" component={Login} />
    //       <Route component={Randomuser} />
    //     </Routes>
    //   </div>
    // </Router>
    <Randomuser />
  );
}

export default App;

// function App() {
//   let currentOffset = 0;
//   const [randomuser, setrandomuser] = useState([]);

//   const loadTenrandomuser = () => {
//     const tenrandomuser = [];
//     axios
//       .get(`https://randomuser.me/api/?results=10&offset=${currentOffset}`)
//       .then(({ data }) => {
//         data.results.forEach((p) => tenrandomuser.push(p.name.first));
//         setrandomuser((randomuser) => [...randomuser, ...tenrandomuser]);
//       });
      
//     currentOffset += 10;
//   };

//   const handleScroll = (e) => {
//     console.log(e.target.documentElement.scrollTop);
//     console.log(window.innerHeight);
//     console.log(e.target.documentElement.scrollHeight);
//     // console.log(
//     //   Math.ceil(e.target.documentElement.scrollTop + window.innerHeight)
//     // );
//     const scrollHeight = e.target.documentElement.scrollHeight;
//     const currentHeight = Math.ceil(
//       e.target.documentElement.scrollTop + window.innerHeight
//     );
//     if (currentHeight + 1 >= scrollHeight) {
//       loadTenrandomuser();
//     }
//   };

//   useEffect(() => {
//     loadTenrandomuser();
//     window.addEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <div className="App" >
//       <div >
//         {randomuser.map((p, i) => {
//           return (
//             <div className="container">
//             <div
//               key={i}
//               className='row'
//             >
//               <div className='col-2'>{i + 1}.</div>
//               <div className='col-7'>{p}</div>
//             </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;


// function Appp() {
//   const [randomuser, setRandomuser] = useState([]);

//   axios.get('https://randomuser.me/api/?results=10')
//   .then(({data})=> {
//     const newRandomuser = [];
//     data.result.foreach(r => newRandomuser.push(r.name));
//     setRandomuser(newRandomuser);
//   });
//   return (
//     <div className="Appp">
//       {randomuser.map((r ,i) => {
//         return <div key={i}>{r}</div>;
//       })}
//      <div>hi</div>
//     </div>
//   );
// }