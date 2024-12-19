import GridContainer from "../components/defaults/GridContainer";
import SideBar from "../components/nav/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="dark   grid  min-h-screen h-full">
      <GridContainer className="background" cols={12}>
        <SideBar />
        {children}
      </GridContainer>
    </main>
  );
}
