import "./home-page.scss";
import { Outlet } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import LoginFooter from "../../components/LoginFooter";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div
      key="home"
      id="home"
      className="flex flex-col items-center justify-between w-full overflow-hidden"
    >
      <div className="my-container h-full flex-grow flex flex-col ">
        <HomeHeader />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full flex-grow pt-14 pb-12 flex flex-col"
        >
          <Outlet />
        </motion.div>
      </div>
      <LoginFooter />
    </div>
  );
}
