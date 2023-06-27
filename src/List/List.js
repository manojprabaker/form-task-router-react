import React from "react";

const List = () => {
     let allTask= JSON.parse(localStorage.getItem("totalTask"));
  //    console.log(allTask);
  return (
    <div>
      {allTask?.map((e, i) => {
        return (
          <div  key={i}>
            <div>
              <h1>Task Name:{e.name}</h1>
              <h1>Description:{e.des}</h1>
              <h1>Priority:{e.prior ? "Yes" : "No"}</h1>
              <h1>Progress:{e.prgs}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
