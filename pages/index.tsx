import Footer from "../components/Footer";
import DreamHome from "../components/Home/DreamHome";
import IdealPlan from "../components/Home/IdealPlan";
import Interest from "../components/Home/Interest";
import Intro from "../components/Home/Intro";
import LiveDream from "../components/Home/LiveDream";
import Player from "../components/Home/Player";
import Register from "../components/Register";

export default function Home() {
  return (
    <>
      <Register />
      <Player height="100vh" />
      <Intro />
      <DreamHome />
      <LiveDream />
      <IdealPlan />
      <Interest />
      <Footer />
    </>
  );
}
