import { Navbar } from "./_components/navbar";
import {Footer} from "./_components/footer"

const MarketingLayout = ({
    children,
}:{
    children: React.ReactNode;
}) =>{
    return (
        <div>
            <main className="h-full bg-slate-100">
                <Navbar />
                <div className="pt-40 pb-40 bg-slate-100">
                {children}
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default MarketingLayout;