import React from "react";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
var z=[];
const Form = () => {
    const navigate = useNavigate();
  //  const [task, setTask] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("hehhe");
    let arr=[];
    let obj = {
      name: e.target.name.value,
      des: e.target.des.value,
      prior: e.target.check.checked,
      prgs: e.target.select.value,
    };
    z.push(obj);
    localStorage.setItem("totalTask", JSON.stringify(z));
  };
 let goNextPage=()=>{
    navigate(`/List`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Task Name" name="name"></input>
        </div>
        <div>
          <textarea name="des" placeholder="Enter Task Description" />
        </div>
        <div>
          <input type="checkbox" name="check"></input>
          <label> Prioritize </label>
        </div>
        <div>
          <label>Progress</label>
          <select name="select">
            <option value="ToDo">To Do</option>

            <option value="OnGoing">On Going</option>

            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
      <button onClick={goNextPage}>Go To List</button>
    </div>
  );
};

export default Form;
