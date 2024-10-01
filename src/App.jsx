import { useState } from "react";
import "./index.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Project from "./components/Project";

const App = () => {
  // let users = [
  //   { name: 'John', age: 25 },
  //   { name: 'Jane', age: 24 },
  //   { name: 'Jack', age: 26 }
  // ]

  // // users = users.map(user => user.name);
  // let r = users.map((u, i) => <h1 key={i}>{u.name}</h1>);
  // // console.log(users);

  // return(

  //   <div>
  //     <h1>{r}</h1>
  //   </div>
  // )

  // const getInfo = () => {
  //   console.log('Hello from App');
  // }
  // const takeInfo = (info) => {
  //   console.log(info);
  // }
  // const wrapper = () =>{
  //   takeInfo('Hello from wrapper');
  // }

  ///useStateHook

  // return (
  //   <div>
  //     <button onClick={getInfo}>click</button>
  //     <button onClick={()=>takeInfo("hello World")}>press</button>
  //   </div>
  // )

  //   const [name, setName] = useState('John');

  //   return(

  //     <div className="h-32 w-32 bg-blue-500" >
  //       <h1 className="justify">{name}</h1>
  //       <button onClick={()=>setName('john')}>click</button>
  //     </div>
  //   )
  // }

  // const [val, setVal] = useState({name:"Ankit", isBanned:false});
  // return(
  //   <div>
  //     <h1>name:{val.name}</h1>
  //     <h2>Banned:{val.isBanned.toString()}</h2>
  //     <button onClick={()=>setVal({...val,isBanned: !val.isBanned})} className={`px-3 py-1  ${!val.isBanned ? "bg-red-500" : "bg-blue-400 "} text-xs rounded-full text-white`}>click</button>
  //   </div>
  // )}

  // const [val, setVal] = useState({ name: "Ankit", age:21 });
  // return(
  //   <div>
  //     <button onClick={()=>{setVal({...val, Gender:"male"}); console.log(val);}} >Add</button>
  //   </div>
  // )}

  // const [val, setVal] = useState([
  //   { name: "Ankit", age: 21 }, 
  //   { name: "Aman", age: 50 }, 
  //   { name: "Amit", age: 31 }]);

  // return(
  //   <div>
  //     {val.map((n,i)=>(
  //       <div key={i}>
  //         <h1>{n.name}</h1>
  //         <h2>{n.age}</h2>
  //       </div>
  //     ))}
  //     <button onClick={()=>setVal(()=>val.map(item=>item.name === "Aman"?{name:"aman", age:"30"} : item))} >click</button>
  //   </div>
  // )}

//   const [num, setNum] = useState([1,2,3,4,5,6,7,8,9,10]);
//   return(
//     <div>
//       {num.map(n=><h1>{n}</h1>)}
//       <button onClick={()=>setNum(()=>num.filter((n,i)=>i != num.length-1))}>click</button>
//     </div>
//   )
// }
   
  // const [val, setVal] = useState([1,2,3,4,5,6,7,8,9,10]);
  // return(
  //   <div>
  //     {val.map(v=><h1>{v}</h1>)}
  //     <button onClick={()=>setVal(()=>val.filter(n=>n%2 !=0))} >click</button>
  //   </div>
  // )}


  
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [validate, setValidate] = useState("");
  // const [city, setCity] = useState("");

  // const SubmitEvent = (e) => {
  //   e.preventDefault();
  //   console.log(gender, name, validate, city);
  // };

  // return (
  //   <div className="bg-slate-500 h-screen w-full pl-11">
  //     <h1 className="text-white text-center">Form</h1>
  //     <br />
  //     <br />
  //     <form action="" onSubmit={SubmitEvent}>
  //       <input
  //         type="text"
  //         placeholder="Enter your name"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //       <br />
  //       <br />
  //       <input
  //         type="radio"
  //         name="gender"
  //         defaultValue="others"
  //         checked={gender === "others" ? true : false}
  //         onChange={(e) => setGender(e.target.value)}
  //       />{" "}
  //       others
  //       <br />
  //       <input
  //         type="radio"
  //         name="gender"
  //         defaultValue="male"
  //         checked={gender === "male" ? true : false}
  //         onChange={(e) => setGender(e.target.value)}
  //       />{" "}
  //       male
  //       <br />
  //       <input
  //         type="radio"
  //         name="gender"
  //         defaultValue="female"
  //         checked={gender === "female" ? true : false}
  //         onChange={(e) => setGender(e.target.value)}
  //       />{" "}
  //       female
  //       <br />
  //       <br />
  //       <input
  //         type="checkbox"
  //         checked={validate}
  //         onChange={(e) => setValidate(e.target.checked)}
  //       />{" "}
  //       validate
  //       <br />
  //       <br />
  //       <select
  //         name="city"
  //         id="city"
  //         value={city}
  //         onChange={(e) => setCity(e.target.value)}
  //       >
  //         <option value="city">city</option>
  //         <option value="dhaka">Dhaka</option>
  //         <option value="chittagong">Chittagong</option>
  //         <option value="sylhet">Sylhet</option>
  //       </select>
  //       <br />
  //       <br />
  //       <br />
  //       <br />
  //       <button
  //         className="bg-red-700 px-9 text-white border border-black rounded-lg hover:bg-red-800"
  //         type="submit"
  //       >
  //         submit
  //       </button>
  //     </form>
  //   </div>
  // );

  return (
    <div>
      {/* <Home /> */}
      {/* <Nav /> */}
      <Project />
    </div>
  );
}
export default App;
