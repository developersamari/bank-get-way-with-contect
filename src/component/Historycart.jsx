import React from 'react'
import{useContext} from "react";
import { Managercart } from "../Routes/Navbar";

export default function HistoryCard() {
        const{name,match,number,negetivePrice}=useContext(Managercart)
  return (
    <div>
        <div className="bg-sky-400  mt-5  w-full p-5 my-0 mx-auto rounded-lg text-white hover:shadow-2xl hover:text-black hover:bg-white">
      <div className="flex flex-row justify-between items-center" >
        <h1 className="text-lg font-bold p-3">{`Number Card ${number}`}</h1>
        <h2>{`price  ${negetivePrice}`}</h2>
      </div>
      <div  className="flex flex-row justify-between items-center mt-3">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h2>{`cash ${match}`}</h2>
      </div>
    </div>
    </div>
  )
}