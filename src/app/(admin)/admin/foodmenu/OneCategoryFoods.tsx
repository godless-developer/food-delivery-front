"use client";
import FoodsCard from "@/app/(user)/_HomeComponents/FoodsCard";
import { useEffect, useState } from "react";
import { FoodType } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const formSchema = z.object({
  foodName: z.string().min(2, {
    message: "Food name must be at least 2 characters.",
  }),
  price: z.string().min(1, {
    message: "Price must be a positive number.",
  }),
  ingredients: z.string().min(1, {
    message: "Ingredients cannot be empty.",
  }),
});

interface AppetizersProps {
  category: any;
  categories: string[];
}

export default function OneCategoryFoods({
  category,
  categories,
}: AppetizersProps) {
  const [foodInfo, setFoodInfo] = useState<any[]>([]);
  const [value, setValue] = useState("");
  const [file, setFile] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const getFoodsInfo = async () => {
    const data = await fetch("http://localhost:4000/foodsInfo");
    const jsonData = await data.json();
    setFoodInfo(jsonData.foodsInfo);
  };

  useEffect(() => {
    getFoodsInfo();
  }, []);

  const createFoodInfo = async (value: FoodType) => {
    const data = await fetch("http://localhost:4000/foodsInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foodName: value.foodName,
        foodPrice: value.price,
        foodDescription: value.ingredients,
        category: category,
        imgUrl: imageUrl,
      }),
    });

    if (data.ok) {
      const jsonData = await data.json();
      setFoodInfo((prevCategories) => [...prevCategories, jsonData]);
      setValue("");
    } else {
      alert("Failed to add food.");
    }
    getFoodsInfo();
  };

  const deleteFoodsInfo = async (value: FoodType) => {
    await fetch(`http://localhost:4000/foodsInfo`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foodName: value.foodName,
        foodPrice: value.price,
        foodDescription: value.ingredients,
        category: category,
        imgUrl: imageUrl,
      }),
    });
    getFoodsInfo();
  };

  const onSubmit = (food: any) => {
    createFoodInfo(food);
    setOpen(false);
  };

  return (
    <div className="flex flex-col items-start py-8 px-8 rounded-xl gap-9 bg-white">
      <h1 className="text-[30px] font-semibold">{category.categoryName}</h1>
      <div className="flex flex-wrap gap-5">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <div className="w-[290px] h-[260px] px-4 py-2 rounded-[20px] flex flex-col justify-center items-center gap-6 border-dashed border-[1px] border-[#ef4444] cursor-pointer">
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#ef4444]">
                +
              </div>
              <p>Add new Dish to {category.categoryName}</p>
            </div>
          </DialogTrigger>
          <DialogTitle hidden></DialogTitle>

          <DialogContent className="w-[520px] h-[630px] p-6 flex flex-col justify-between">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-[460px] flex flex-col items-between p-6 justify-between gap-6"
              >
                <div className="w-full pb-4 flex justify-start items-center gap-[10px]">
                  <h4 className="text-[20px] font-[600] leading-[28px]">
                    Add new Dish to {category.categoryName}
                  </h4>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex flex-col gap-2 items-start h-[60px] w-full">
                    <h4 className="text-[14px] font-[500] leading-[14px]">
                      Food name
                    </h4>
                    <FormField
                      control={form.control}
                      name="foodName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Type food name"
                              className="w-full"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start h-[60px] w-full">
                    <h4 className="text-[14px] font-[500] leading-[14px]">
                      Food price
                    </h4>
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Enter price..."
                              className="w-full"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="w-full h-[60px] flex flex-col gap-[8px]">
                  <p className="text-[14px] leading-[14px] font-[500]">
                    Ingredients
                  </p>
                  <FormField
                    control={form.control}
                    name="ingredients"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="List ingredients..."
                            className="w-full py-2 px-3"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <div className="mt-1 flex gap-1">
                    <label
                      htmlFor="file-input"
                      className="text-[14px] font-semibold ml-2 flex flex-col"
                    >
                      Food image
                    </label>
                  </div>
                  <div className="flex flex-col mt-1 mb-5">
                    <label
                      htmlFor="file-input"
                      className="bg-gray-100 rounded-xl w-full h-[150px] flex flex-col justify-center items-center cursor-pointer border-[1px] border-gray"
                    >
                      <input
                        hidden
                        type="file"
                        id="file-input"
                        onChange={onFileUpload}
                      />
                      {!imageUrl ? (
                        <div className="flex flex-col justify-center items-center gap-2">
                          <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                d="M9.5 2.5V9.5H2.5V2.5H9.5ZM9.5 1.5H2.5C1.95 1.5 1.5 1.95 1.5 2.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5V2.5C10.5 1.95 10.05 1.5 9.5 1.5ZM7.07 5.93L5.57 7.865L4.5 6.57L3 8.5H9L7.07 5.93Z"
                                fill="#202124"
                              />
                            </svg>
                          </div>
                          <span>Choose a file or drag & drop it here</span>
                        </div>
                      ) : (
                        <div className="flex flex-col justify-center items-center h-[150px] w-full gap-2">
                          <Image
                            src={imageUrl}
                            alt="Uploaded"
                            width={1000}
                            height={1000}
                            className="object-cover size-full rounded-lg bg-cover bg-no-repeat bg-center"
                          />
                        </div>
                      )}
                    </label>
                  </div>
                </div>
                <div className="w-full pt-6 flex items-center justify-end">
                  <Button type="submit">Add Dish</Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
        {foodInfo
          .filter((food) => food.category == category._id)
          .map((item: any, index: any) => (
            <FoodsCard
              onClick={deleteFoodsInfo}
              categoryName={categories}
              key={index}
              title={item.foodName}
              price={item.foodPrice}
              paragraph={item.foodDescription}
              imgUrl={item.imgUrl}
            />
          ))}
      </div>
    </div>
  );
}
