import LoadingScreen from "@/app/loading";
import HomePageA from "@/components/home-components/HomePageA";
import HomePageB from "@/components/home-components/HomePageB";
import HomePageC from "@/components/home-components/HomePageC";
// import HomePageD from "@/components/home-components/HomePageD";

const HomePage = () => {
  return (
    <div>
      {/* <LoadingScreen /> */}
      <HomePageA />
      <HomePageB />
      <HomePageC />
      {/* <HomePageD /> */}
    </div>
  );
};

export default HomePage;
