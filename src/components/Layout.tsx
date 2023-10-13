import LeftNav from "./LeftNav";
import TopNav from "./TopNav";

interface LayoutProps {
    children: React.ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col h-full text-black">
            <TopNav />
            <div className="flex w-full mt-[94px] h-screen">
                <div className="flex basis-[10%] h-full">
                    <LeftNav />
                </div>
                <div className="flex basis-[90%] h-full w-full">
                    { children }
                </div>
            </div>

        </div>
    );
}

export default Layout;