// import React from "react";
// import{useContext} from "react";
// import { Managercart } from "../Routes/Navbar";
// const Addcart= () => {
//   const{number,setnumber,password,setpassword,cvv2,setcvv2,month,setmonth,year,setyear,Available,setAvailable,name,setname,list,setlist,add}=useContext(Managercart)
//     return 
//     (
//       <>
//         <div
//           style={{ direction: "rtl" }}
//           className=" bg-orange-100 border-orange-500 border-4 my-2.5 mx-36 p-2.5 shadow-lg"
//         >
//           <div className="flex flex-row gap-4">
//             <img
//               style={{ borderRadius: "50px", border: "3px" }}
//               className="w-11 border-orange-300"
//               src="src/assets/3_(21).jpg"
//             />
//             <h1 className="mt-2">اطلاعات کارت</h1>
//           </div>
//           <div className="flex flex-col justify-around items-center ">
//             <div className="flex flex-row justify-between items-center w-[35%]">
//               <label>نام صاحب بانک</label>
//               <input
//                 type="text"
//                 value={name}
//                 className="border-4 rounded-sm border-orange-300 px-3 mt-2"
//                 onChange={(e) => {
//                   setname(e.target.value);
//                 }}
//               />
//             </div>
//             <div className="flex flex-row justify-between w-[35%] items-center">
//               <label>شماره کارت</label>
//               <input
//                 type="number"
//                 value={number}
//                 className="border-4 rounded-sm border-orange-300 px-3 mt-2"
              
//                 onChange={(e) => {
//                   setnumber(e.target.value);
//                 }}
//               />
//             </div>
//             <div className="flex flex-row justify-between w-[35%] items-center">
//               <label>cvv2</label>
//               <input
//                 type="text"
//                 value={cvv2}
//                 className="border-4 rounded-sm border-orange-300 px-3 mt-2"
//                 maxLength={4}
//                 onChange={(e) => {
//                   setcvv2(e.target.value);
//                 }}
//               />
//             </div>
//             <div className="flex flex-row justify-between w-[35%] items-center">
//               <label>رمز کارت</label>
//               <input
//                 type="text"
//                 value={password}
//                 onChange={(e) => {
//                   setpassword(e.target.value);
//                 }}
//                 className="border-4 rounded-sm border-orange-300 px-3 mt-2"
//                 maxLength={6}
//               />
//             </div>
//             <div className="flex flex-row justify-around w-[35%] items-center">
//               <label className="flex flex-row justify-between items-center w-[37%] ">
//                 تاریخ اعتبار
//               </label>
//               <div className="flex flex-row justify-around items-center w-[70%]">
//                 <input
//                   type="text"
//                   value={month}
//                   className="border-4 rounded-sm border-orange-300 px-3 w-20   mt-2 "
//                   maxLength={2}
//                   placeholder="ماه"
//                   onChange={(e) => {
//                     setmonth(e.target.value);
//                   }}
//                 />
//                 /
//                 <input
//                   type="text"
//                   value={year}
//                   onChange={(e) => {
//                     setyear(e.target.value);
//                   }}
//                   className=" mt-2 border-4 rounded-sm border-orange-300 px-1 w-20"
//                   maxLength={2}
//                   placeholder="سال"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-row justify-between w-[35%] items-center">
//               <label>موجودی</label>
//               <input
//                 type="text"
//                 value={Available}
//                 className="border-4 rounded-sm border-orange-300 px-3 mt-2"
//                 onChange={(e) => setAvailable(e.target.value)}
//               />
//             </div>
//             <button
//               onClick={() =>
//                 add(number, cvv2, year, month, name, Available, password)
//               }
//               className="py-2 text-sm bg-orange-400 text-white w-[35%] mt-3 "
//             >
//               افزودن کارت
//             </button>
//           </div>
//         </div>
        
//       </>
//     );
//   };
  
//   export default Addcart;


import React from 'react'
import{useContext} from "react";
import { Managercart } from "../Routes/Navbar";
export default function App() {
  const{number,setnumber,password,setpassword,cvv2,setcvv2,month,setmonth,year,setyear,Available,setAvailable,name,setname,list,setlist,add}=useContext(Managercart)

  return (
    <div>
              <div
          style={{ direction: "rtl" }}
          className=" bg-orange-100 border-orange-500 border-4 my-2.5 mx-36 p-2.5 shadow-lg"
        >
          <div className="flex flex-row gap-4">
            <img
              style={{ borderRadius: "50px", border: "3px" }}
              className="w-11 border-orange-300"
              src="src/assets/3_(21).jpg"
            />
            <h1 className="mt-2">اطلاعات کارت</h1>
          </div>
          <div className="flex flex-col justify-around items-center ">
            <div className="flex flex-row justify-between items-center w-[35%]">
              <label>نام صاحب بانک</label>
              <input
                type="text"
                value={name}
                className="border-4 rounded-sm border-orange-300 px-3 mt-2"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-row justify-between w-[35%] items-center">
              <label>شماره کارت</label>
              <input
                type="number"
                value={number}
                className="border-4 rounded-sm border-orange-300 px-3 mt-2"
              
                onChange={(e) => {
                  setnumber(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-row justify-between w-[35%] items-center">
              <label>cvv2</label>
              <input
                type="text"
                value={cvv2}
                className="border-4 rounded-sm border-orange-300 px-3 mt-2"
                maxLength={4}
                onChange={(e) => {
                  setcvv2(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-row justify-between w-[35%] items-center">
              <label>رمز کارت</label>
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                className="border-4 rounded-sm border-orange-300 px-3 mt-2"
                maxLength={6}
              />
            </div>
            <div className="flex flex-row justify-around w-[35%] items-center">
              <label className="flex flex-row justify-between items-center w-[37%] ">
                تاریخ اعتبار
              </label>
              <div className="flex flex-row justify-around items-center w-[70%]">
                <input
                  type="text"
                  value={month}
                  className="border-4 rounded-sm border-orange-300 px-3 w-20   mt-2 "
                  maxLength={2}
                  placeholder="ماه"
                  onChange={(e) => {
                    setmonth(e.target.value);
                  }}
                />
                /
                <input
                  type="text"
                  value={year}
                  onChange={(e) => {
                    setyear(e.target.value);
                  }}
                  className=" mt-2 border-4 rounded-sm border-orange-300 px-1 w-20"
                  maxLength={2}
                  placeholder="سال"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between w-[35%] items-center">
              <label>موجودی</label>
              <input
                type="text"
                value={Available}
                className="border-4 rounded-sm border-orange-300 px-3 mt-2"
                onChange={(e) => setAvailable(e.target.value)}
              />
            </div>
            <button
              onClick={() =>
                add(number, cvv2, year, month, name, Available, password)
              }
              className="py-2 text-sm bg-orange-400 text-white w-[35%] mt-3 "
            >
              افزودن کارت
            </button>
          </div>
        </div>
    </div>
  )
}
