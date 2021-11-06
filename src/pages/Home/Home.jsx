import "./home-page.scss";
import { Outlet } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import LoginFooter from "../../components/LoginFooter";

export default function Home() {
  return (
    <div id="home" className="flex flex-col items-center justify-between">
      <div className="my-container ">
        <HomeHeader />
      </div>
      <div className="my-container h-full flex-grow pt-14 pb-12">
        <Outlet />
      </div>
      <LoginFooter />
    </div>
  );
}
