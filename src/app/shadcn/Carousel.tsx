import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export async function CarouselSize() {
  const data = await fetch("https://localhost:4000/categories");
  const jsonData = await data.json();
  console.log(data);
  console.log(jsonData);
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[95%]"
    >
      <CarouselContent>
        {/* {data.map((item, index) => (
          <CarouselItem key={index} className="basis-1/9">
            <div className="h-9 w-full flex justify-center px-7 items-center text-white bg-black rounded-full">
              {item.num}
            </div>
          </CarouselItem>
        ))} */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
