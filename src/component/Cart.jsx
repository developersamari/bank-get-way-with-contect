import React from "react";

function Cart({ name, number, cvv2, Available, year, month, Restoration,Imagbank}) {
   
  return (
    
    <>
      <div
      onClick={() => Restoration()}
        style={{ marginRight: "480px" }}
        className="bg-orange-200 flex flex-col w-80 border-2 border-orange-500 rounded-md p-2.5"
      >
        <div className="flex gap-2">
       
        <h3 >{`شماره کارت ${number}`}</h3>
        </div>
        <div className="flex gap-12">
          <h4>{`cvv2 ${cvv2}`}</h4>
          <span>{`تاریخ اعتبار ${year}/${month}`}</span>
        </div>
        <h3>{`صاحب کارت ${name}`}</h3>
        <h4>{`موجودی${Available}`}</h4>
      </div>
    </>
  );
}
export default Cart;
