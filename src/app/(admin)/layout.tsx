import DishesCategory from "./_components/DishesCategory";
import SideBar from "./_components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full">
      <SideBar />
      <div className="flex flex-col w-full">
        <DishesCategory />
        {children}
      </div>
    </div>
  );
}
