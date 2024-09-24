import "./globals.css";
import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import Image from "next/image";

const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "the highlighted story | radityaprirahmadian",
  description: "wkkwkwkwkwkw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-earth-yellow-100">
      <body className={courier.className}>
        <main className="min-h-screen p-4 md:p-8 bg-earth-yellow-100 text-black flex items-start justify-center w-full overflow-y-hidden relative">
          <div className="relative h-[95vh] md:h-[90vh] w-full max-w-[1440px]">
            {/* <Image
              src={"/circle.png"}
              className="absolute z-1 left-[-30px] top-1/4"
              width="100"
              height="100"
              alt="circle"
            ></Image> */}

            {children}

            <div className="absolute w-full h-full bg-black z-0  left-2 top-2"></div>
          </div>
        </main>
      </body>
    </html>
  );
}
