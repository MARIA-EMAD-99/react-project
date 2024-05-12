


import { Outlet } from "react-router-dom";
import NavComponent from './../component/nav/index';



const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavComponent/>
        <div className="col-10">
          <Outlet />
        </div>
      
     </div>
  )
};

export default Layout