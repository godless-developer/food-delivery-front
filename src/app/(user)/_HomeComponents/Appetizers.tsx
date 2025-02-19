import FoodsCard from "./FoodsCard";
interface AppetizersProps {
  catoName: string;
}
export default function Appetizers({ catoName }: AppetizersProps) {
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
    <div className="flex flex-col items-start py-8 px-32 gap-9">
      <h1 className="text-[30px] normal font-semibold ">{catoName}</h1>
      <div className="flex flex-wrap gap-10 ">
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
