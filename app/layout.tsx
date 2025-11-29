import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Pi Kids - Tech Literacy for Every Kid",
  description: "Empowering the next generation through hands-on coding workshops in under-resourced communities, powered by Raspberry Pi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
