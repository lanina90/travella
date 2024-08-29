import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.scss";
import classNames from "classnames";
import {ScreenClassContextProvider} from "@/app/providers/ScreenClassContextProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const DMSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tour Travel & Adventure Camping",
  description: "Tour Travel & Adventure Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(montserrat.variable, DMSans.variable)}>
        <ScreenClassContextProvider>
          {children}
        </ScreenClassContextProvider>
      </body>
    </html>
  );
}
