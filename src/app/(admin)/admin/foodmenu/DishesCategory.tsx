import { PopoverDemo } from "./Popover";

const Dishes = [
  { type: "All dishes" },
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

export default function DishesCategory() {
  return (
    <div className="h-[350px] bg-[#f4f4f5] w-full fixed ">
      <div className="h-[230px] bg-white rounded-xl gap-8 justify-center w-full flex flex-col mt-20 px-10 py-5">
        <h1 className="text-[24px] font-medium">Dishes category</h1>
        <div className="flex gap-4 flex-wrap">
          {Dishes.map((item, index) => (
            <div
              key={index}
              className="flex justify-center gap-2 items-center bg-[#f4f4f5]
             px-1 rounded-full border-[1px] border-black w-[170px] h-[40px]"
            >
              <p>{item.type}</p>
              <div className="flex justify-center items-center bg-black w-6 h-6 text-white rounded-full">
                <p>6</p>
              </div>
            </div>
          ))}
          <button className="w-10 h-10 bg-red-600 rounded-full text-white text-[23px]">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
