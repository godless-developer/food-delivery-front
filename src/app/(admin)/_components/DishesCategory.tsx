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
    <div className="h-[230px] bg-[#f4f4f5] rounded-xl ml-16  gap-8 justify-center flex flex-col mt-32 px-10">
      <h1 className="text-[24px] font-medium">Dishes category</h1>
      <div className="flex gap-4 flex-wrap">
        {Dishes.map((item, index) => (
          <div
            key={index}
            className="flex justify-center gap-2 items-center bg-white
             px-1 rounded-full border-[1px] border-black w-[170px] h-[40px]"
          >
            <p>{item.type}</p>
            <div className="flex justify-center items-center bg-black w-6 h-6 text-white rounded-full">
              <p>6</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
