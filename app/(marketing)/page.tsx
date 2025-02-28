import Link from "next/link";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button"
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
const headingFont = localFont({
    src: "../../public/Kanit-Medium.ttf",
})

const MarketingPage = () => {
    return (

        <div className="flex items-center justify-center flex-col">
            <div className={cn(
                "flex items-center justify-center flex-col",
                headingFont.className,
            )}
            >
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-400
                 rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2" />
                    No 1 task management app
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    Taskify healps team move
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-400 
                text-white px-4 rounded p-2 pb-4 w-fit">
                    Work foward.
                </div>
            </div>
            <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center
            mx-auto">
                Collaborate, manage projects, and reach new productivity peaks.
                From high rises to the home office, the way your team works is unique—accomplish it all with Taskify.
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href="/sign-up">Get started</Link>
            </Button>
        </div>

    );
};

export default MarketingPage;