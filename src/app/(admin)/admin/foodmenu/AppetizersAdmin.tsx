import FoodsCard from "@/app/(user)/_HomeComponents/FoodsCard";
import AddFood from "./AddFood";

interface AppetizersProps {
  catoName: string;
}
export default function AppetizersAdmin({ catoName }: AppetizersProps) {
  const Array = [
    {
      title: "Brie Crostini Appetizer",
      price: "$12.99",
      description:
        "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      imgUrl:
        "url('https://s3-alpha-sig.figma.com/img/4521/77b5/2de5025e4885c8710490c0c5538793ed?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hgkH44mx-ayveKxiMnRlGug3u9ZDimr3Ea5aay146XmwXmvTUEOh8BjQ9M7-sdFKWJ7Eo~mLPQbxhjKP3OydWAr8rmDmD17MSq561XQ1GNn-gIX9I72PeBy4M~w275pgQ7qNvICtel3aABV9ns5ap5WG26O4wPAreVPxxb4r93xIMGO~AKy5mHiyptEloxGuY3qubxghJ6qnQRWbDj2PAznXv~bZqo2qz3JT22JI0yKJbIozYxXzuO5H6Im45f~pF1w6Dx6~4bcQyAx5t8o23noMLMu~kMptEAUKgokGbQx63CyLtBjlCjxvtesz4Con7BEzTUNd6vqrh8p82qLSDA__')",
    },
    // {
    //   title: "Food Name",
    //   price: "$price",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus.",
    //   imgUrl: "url('./fileUploadSmall.png')",
    // },
    // {
    //   title: "Food Name",
    //   price: "$price",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus.",
    //   imgUrl: "url('./fileUploadSmall.png')",
    // },
    // {
    //   title: "Food Name",
    //   price: "$price",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus.",
    //   imgUrl: "url('./fileUploadSmall.png')",
    // },
    // {
    //   title: "Food Name",
    //   price: "$price",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus.",
    //   imgUrl: "url('./fileUploadSmall.png')",
    // },
    // {
    //   title: "Food Name",
    //   price: "$price",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus.",
    //   imgUrl: "url('./fileUploadSmall.png')",
    // },
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
