import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Addcart from "../pages/Addcart";
import Historys from "../pages/Historys";
import Traconesh from "../pages/Traconesh";
import Cart from "../component/Cart";
import { useState, createContext } from "react";


export const Managercart= createContext()

export default function Navbar() {
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const [cvv2, setcvv2] = useState("");
  const [month, setmonth] = useState("");
  const [year, setyear] = useState("");
  const [Available, setAvailable] = useState("");
  const [imagbank, setimagbank] = useState("");
  const [name, setname] = useState("");
  const [list, setlist] = useState([]);

  const [numberblog, setnumberblog] = useState("");
  const [cvv2blog, setcvv2blog] = useState("");
  const [monthblog, setmonthblog] = useState("");
  const [yearblog, setyearblog] = useState("");
  const [destination, setdestination] = useState("");
  const [match, setmatch] = useState(0);
  const [listblog, setlistblog] = useState([]);


  const [History, setHistory] = useState([]);
  const [cartid, setcartid] = useState("");

  const Restoration = (items) => {
    const findCard = list.filter((card) => {
      return card.id === items.id;
    });
    console.log(findCard);
    if (findCard) {
      setnumberblog(items.Number),
        setcvv2blog(items.Cvv2),
        setmonthblog(items.Month),
        setyearblog(items.Year);
      setcartid(items.id);
    }
  };


  const pardakht = (negetivePrice, id) => {
    const newCash = list.map((card) => {
      return card.id === id && card.Available >= negetivePrice
        ? { ...card, Available: card.Available - negetivePrice }
        : card;
    });
    


    newCash.map((item) => {
      if (item.id === id) {
        const t = { ...item, p: negetivePrice };
        setHistory([...History, t]);
        console.log(History);
      }
    });

    setlist(newCash);
  };

  const add = (
    Number,
    Cvv2,
    Year,
    Month,
    Name,
    Available,
    Password,
    Imagbank
  ) => {
    const newcart = {
      id: list.length + 1,
      Number,
      Cvv2,
      Year,
      Month,
      Name,
      Available,
      Password,
      Imagbank,
    };
    setlist([...list, newcart]);
    setnumber("");
    setpassword("");
    setcvv2("");
    setmonth("");
    setyear("");
    setAvailable("");
    setname("");
  }

  return (
    <BrowserRouter>
     <Managercart.Provider value={{number,setnumber,password,setpassword,cvv2,setcvv2,month,setmonth,year,setyear,Available,setAvailable,name,setname,list,setlist,add,numberblog,setcvv2blog,setnumberblog,cvv2blog,monthblog,setmonthblog,yearblog,setyearblog,destination,setdestination,match,setmatch,listblog,setlistblog,pardakht,History,setHistory,cartid,setcartid}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Addcart" element={<Addcart/>} />
          <Route path="/history" element={<Historys />} />
          <Route path="/traconesh" element={<Traconesh/>} />
         
        </Route>
      
      </Routes>
      {list.map((items) => {
          return (
            <Cart
              Restoration={() => Restoration(items)}
              number={items.Number}
              cvv2={items.Cvv2}
              year={items.Year}
              month={items.Month}
              name={items.Name}
              Available={items.Available}
              id={items.id}
            />
          );
        })}
     </Managercart.Provider>
    </BrowserRouter>
  );
}



