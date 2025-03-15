// import from "./style.css"
export default function Immusic() {
  return (
    <div className="h-screen  w-full ">
      <div className="h-1/3 bg-black"></div>
      <div className="h-1/3 flex justify-center items-center relative">
        <p className="text-[220px] font-[brandon-grotesque] tracking-tighter scale-y-[1.9] absolute">
          TUKKA
        </p>
        <div className="absolute top-[7px] left-[-235px]">
          <p className="text-[120px] font-[impact] top-[105px] left-[712px] scale-y-[1.2] scale-x-[2.3] tracking-[30] absolute">
            T
          </p>
          <p className="text-[120px] font-[impact] top-[105px] left-[852px] scale-y-[1.2] scale-x-[2.6] tracking-[30] absolute">
            U
          </p>
          <p className="text-[120px] font-[impact] top-[105px] left-[960px] scale-y-[1.2] scale-x-[1.6] tracking-[30] absolute">
            K
          </p>
          <p className="text-[120px] font-[impact] top-[105px] left-[1109px] scale-y-[1.2] scale-x-[1.6] tracking-[30] absolute">
            K
          </p>
          <p className="text-[120px] font-[impact] top-[105px] left-[1290px] scale-y-[1.2] scale-x-[2.3] tracking-[30] absolute">
            A
          </p>
          <div className="triangle">A</div>
        </div>
      </div>
      <div className="h-1/3 bg-black"></div>
    </div>
  );
}
