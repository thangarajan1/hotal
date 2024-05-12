import React from 'react'
import Datas from "./category.json"

export default function Category() {
  return (
    <>
      <div className="row mt-5 px-5">
        <div className="col-md-12">
          <div className="row">
            {
                Datas.map((item)=>{
                   return (
                     <div
                       className="col-3 d-flex flex-column align-items-center"
                       key={item.id}
                     >
                       <img src={item.img} width={"100%"} alt="" />
                       <p className="">{item.name}</p>
                     </div>
                   );
                })
            }
          </div>
        </div>
      </div>
    </>
  );
}
