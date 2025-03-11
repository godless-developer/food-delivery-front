interface FoodsCardProps {
  title: string;
  price: string;
  paragraph: string;
  imgUrl: string;
}

export default function FoodsCard({
  title,
  price,
  paragraph,
  imgUrl,
}: FoodsCardProps) {
  return (
    <div className="w-[291px] h-[261px] border-[2px] bg-white rounded-xl flex flex-col  gap-2 items-center justify-between p-3">
      <div
        className="rounded-xl w-full h-[200px] border-[2px] border-[#ef4444] flex justify-end items-end p-4"
        style={{
          backgroundImage: `${imgUrl}`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button className="w-11 h-11 flex rounded-full border-[2px] justify-center items-center bg-white">
          +
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h1 className="text-[18px] font-semibold normal text-[#ef4444]">
            {title}
          </h1>
          <h1 className="text-[18px] font-semibold normal">{price}</h1>
        </div>
        <p className="text-[14px] text-black font-normal">{paragraph} </p>
      </div>
    </div>
  );
}
// url("./file.svg");
