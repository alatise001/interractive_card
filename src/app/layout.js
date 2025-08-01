
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ContextUse from "../hooks/contextUse";


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Card Form",
  description: "Interactive Card Form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${spaceGrotesk.variable} antialiased`}
      >
        <ContextUse>
          {children}
        </ContextUse>
      </body>
    </html>
  );
}
