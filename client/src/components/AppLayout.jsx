import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Header />
      {/* <div className="flex"> */}
      <Outlet />
      {/* </div> */}
    </>
  );
}

export default AppLayout;
