import HomePng from "@/assets/homeimg.svg";
import Image from "next/image";

const HomeImg = () => {
  return (
    <div className="p-4 md:p-6 flex align-middle">
      <Image src={HomePng} alt="HomeImg" height={500} width={500} />
    </div>
  );
};

export default HomeImg;
