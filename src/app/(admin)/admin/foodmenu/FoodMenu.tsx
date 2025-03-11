import AppetizersAdmin from "./AppetizersAdmin";
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
export default function FoodMenu() {
  return (
    <div className="bg-[#f4f4f5]  mt-[350px] w-full flex flex-col gap-20 pr-[20px]">
      {Dishes.map((item, index) => {
        return <AppetizersAdmin key={index} catoName={item.type} />;
      })}
    </div>
  );
}
