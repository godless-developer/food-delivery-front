import Ads from "../_HomeComponents/Ads";
import Appetizers from "../_HomeComponents/Appetizers";
import Catagories from "../_HomeComponents/Categories";
import Footer from "../_HomeComponents/Footer";

const Dishes = [
  { type: "Appetizers" },
  { type: "Salads" },
  { type: "Pizzas" },
  { type: "Lunch favorites" },
  { type: "Main dishes" },
  { type: "Fish & Sea foods" },
  { type: "Brunch" },
  { type: "Side dish" },
  { type: "Dessert" },
  { type: "Beverages" },
];

export default function Homepage() {
  return (
    <div>
      <Ads />
      <div className="flex flex-col items-start py-8 px-12 gap-9">
        <Catagories />
        {Dishes.map((item, index) => {
          return <Appetizers key={index} catoName={item.type} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
