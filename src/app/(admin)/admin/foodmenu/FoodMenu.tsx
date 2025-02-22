import AppetizersAdmin from "./AppetizersAdmin";

export default function FoodMenu() {
  return (
    <div className="bg-[#f4f4f5]  mt-[350px] w-[114%] flex flex-col gap-20">
      <AppetizersAdmin catoName="Appetizers" />
      <AppetizersAdmin catoName="Appetizers" />
      <AppetizersAdmin catoName="Appetizers" />
      <AppetizersAdmin catoName="Appetizers" />
      <AppetizersAdmin catoName="Appetizers" />
      <AppetizersAdmin catoName="Appetizers" />
      <AppetizersAdmin catoName="Appetizers" />
    </div>
  );
}
