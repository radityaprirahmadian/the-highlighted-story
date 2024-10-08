import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import Image from "next/image";

const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "The Highlighted Story | radityaprirahmadian",
  description:
    "Discover the story of Raditya Prirahmadian, a talented frontend developer crafting digital experiences with dedication and creativity. Explore the narrative behind each project, uniquely told from a third-person perspective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-earth-yellow-100">
      <body className={cn(courier.className, "relative")}>
        <main className="min-h-screen p-2 md:p-10 lg:p-6 bg-earth-yellow-100 text-black flex items-start justify-center w-full overflow-y-hidden relative">
          <div className="relative h-[95vh] md:h-[93vh] w-full max-w-[1440px]">
            {/* <Image
              src={"/circle.png"}
              className="absolute z-1 left-[-30px] top-1/4"
              width="100"
              height="100"
              alt="circle"
            ></Image> */}

            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
