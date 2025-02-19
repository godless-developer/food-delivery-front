import Ads from "../_HomeComponents/Ads";
import Appetizers from "../_HomeComponents/Appetizers";
import Catagories from "../_HomeComponents/Categories";
import FoodsCard from "../_HomeComponents/FoodsCard";
import Footer from "../_HomeComponents/Footer";

export default function Homepage() {
  return (
    <div>
      <Ads />
      <div className="flex flex-col items-start py-8 px-12 gap-9">
        <Catagories />
        <Appetizers catoName="Appetizers" />
        <Appetizers catoName="Salads" />
        <Appetizers catoName="Lunch favorites" />
        <Appetizers catoName="Salads" />
      </div>
      <Footer />
    </div>
  );
}
