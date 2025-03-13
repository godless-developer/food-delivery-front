"use client";
import { useEffect, useState } from "react";
import OneCategoryFoods from "./OneCategoryFoods";

export default function FoodMenu() {
  const [categories, setCategories] = useState<any[]>([]);

  const getCategories = async () => {
    const data = await fetch("http://localhost:4000/categories");
    const jsonData = await data.json();
    console.log(jsonData);
    setCategories(jsonData.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const [foodsInfo, setFoodsInfo] = useState<any[]>([]);

  useEffect(() => {
    getFoodsInfo();
  }, []);
  const getFoodsInfo = async () => {
    const foodInfo = await fetch(`http://localhost:4000/foodsInfo`);
    const jsonFoodInfo = await foodInfo.json();
    console.log(jsonFoodInfo);
    setFoodsInfo(jsonFoodInfo.foodsInfo);
    return foodsInfo;
  };

  return (
    <div className="bg-[#f4f4f5]  mt-[350px] w-full flex flex-col gap-20 pr-[20px]">
      {categories?.map((item: any, index: any) => {
        return (
          <OneCategoryFoods
            // categoryName={categories}
            key={index}
            category={item}
            foodsInfo={foodsInfo}
          />
        );
      })}
    </div>
  );
}
