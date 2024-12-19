import GridContainer from "../components/defaults/GridContainer";
import SideBar from "../components/nav/SideBar";
import NavBar from "../components/nav/NavBar";
import MaxWidthWrapper from "../components/defaults/MaxWidthWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="dark grid h-screen ">
      <GridContainer className="background" cols={12}>
        <SideBar />
        <MaxWidthWrapper className="col-span-full lg:col-span-10">
          <NavBar />
          {children}
        </MaxWidthWrapper>
      </GridContainer>
    </main>
  );
}
