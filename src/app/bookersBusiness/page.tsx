import Hero from "@/components/hero/hero";
import Mask from "../../assets/images/Mask.png";
import HeaderTitle from "@/components/text/header-title";
import Subtitle from "@/components/text/subtitle";
import CardComponent from "@/components/cards/busnes-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookers | Business",
  description: "Bookers website",
};

const BookersBiznes = () => {
  return (
    <div>
      <Hero title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust`} heroImg={Mask} />
      <div className="w-full md:w-[70%] mb-5">
        <HeaderTitle text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust`} />
      </div>
      <div className="w-full md:w-[65%] mb-5">
        <Subtitle text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust`} />
      </div>
      <div className="w-full md:w-[60%] mb-10">
        <Subtitle text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust`} />
      </div>
      <div className="mb-10 w-full">
        <CardComponent />
      </div>
    </div>
  );
};

export default BookersBiznes;
