import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Shivana Health",
  description: "Shivana Health is a new kind of physical therapy. Traditional therapy models focus on the physical part of healing from an injury and there is often little insight about a root cause or prevention leading to lackluster outcomes. We have developed an integrative approach that extends to root cause identification, lifestyle factors, personal development and transformation so you can thrive at home and in your community. Your first session, you'll get an assessment, diagnosis and plan tailored to you. Next, one on one treatment sessions are expertly delivered utilizing our innovative framework applied to each client. Through merging the latest clinical science with intuitive and holistic principles, we improve function and provide valuable insights that can truly transform your pain into purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="7mYdN4dUSPXWY1coeCwcFA" async></script>
      </head>
      <body>
        
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
