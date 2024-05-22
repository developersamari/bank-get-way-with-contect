import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <>
      <nav style={{display:"flex"}} className="w-full bg-orange-200 text-balck text-sm py-3   "  >
        <ul className="flex gap-5 w-full px-5 mt-0 justify-center" >
          <li className="hover:bg-orange-500 hover:text-white hover:rounded-lg hover:py-1 px-2" >
            <Link to="/traconesh">اطلاعات کارت</Link>
          </li>
          <li className="hover:bg-orange-500 hover:text-white hover:rounded-lg hover:py-1 px-2" >
            <Link to="/history">تاریخچه</Link>
          </li>
          <li className="hover:bg-orange-500 hover:text-white hover:rounded-lg hover:py-1 px-2" >
            <Link to="/Addcart">کارت به کارت</Link>
          </li>
        </ul>
      </nav>
        </>
    
      <Outlet />
    </>
  )
};

export default Layout;