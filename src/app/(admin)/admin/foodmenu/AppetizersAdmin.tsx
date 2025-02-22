import FoodsCard from "@/app/(user)/_HomeComponents/FoodsCard";
import AddFood from "./AddFood";

interface AppetizersProps {
  catoName: string;
}
export default function AppetizersAdmin({ catoName }: AppetizersProps) {
  const Array = [
    {
      title: "Food Name",
      price: "$price",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus.",
      imgUrl: "url('./fileUploadSmall.png')",
    },
    {
      title: "Food Name",
      price: "$price",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus.",
      imgUrl: "url('./fileUploadSmall.png')",
    },
    {
      title: "Food Name",
      price: "$price",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus.",
      imgUrl: "url('./fileUploadSmall.png')",
    },
    {
      title: "Food Name",
      price: "$price",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus.",
      imgUrl: "url('./fileUploadSmall.png')",
    },
    {
      title: "Food Name",
      price: "$price",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus.",
      imgUrl: "url('./fileUploadSmall.png')",
    },
    {
      title: "Food Name",
      price: "$price",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus.",
      imgUrl: "url('./fileUploadSmall.png')",
    },
  ];
  return (
    <div className="flex flex-col items-start py-8 px-8 rounded-xl gap-9 bg-white">
      <h1 className="text-[30px] normal font-semibold ">{catoName}</h1>
      <div className="flex flex-wrap gap-5">
        <AddFood />
        {Array.map((item, index) => {
          return (
            <FoodsCard
              key={index}
              title={item.title}
              price={item.price}
              paragraph={item.description}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
}
