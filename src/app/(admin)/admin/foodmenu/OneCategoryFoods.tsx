"use client";
import FoodsCard from "@/app/(user)/_HomeComponents/FoodsCard";
import AddFood from "./AddFood";
import { Food } from "@/types";

interface AppetizersProps {
  category: any;
  foodsInfo: Food[];
  // categoryName: any;
}
export default function OneCategoryFoods({
  category,
  foodsInfo,
}: // categoryName,
AppetizersProps) {
  return (
    <div className="flex flex-col items-start py-8 px-8 rounded-xl gap-9 bg-white">
      <h1 className="text-[30px] normal font-semibold ">
        {category.categoryName}
      </h1>
      <div className="flex flex-wrap gap-5">
        <AddFood />
        {foodsInfo
          ?.filter((food) => food.category == category._id)
          .map((item: any, index: any) => {
            return (
              <FoodsCard
                // categoryName={categoryName}
                // category={item.categoryName}
                key={index}
                title={item.foodName}
                price={item.foodPrice}
                paragraph={item.foodDescription}
                imgUrl={item.imgUrl}
              />
            );
          })}
      </div>
    </div>
  );
}
