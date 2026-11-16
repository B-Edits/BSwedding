import "./globals.css";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["400","500","600","700"] });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
export const metadata = { title: "Bala Bhavya & Sri Ram | Together, Forever", description: "A celebration of love. Join us for the engagement and wedding of Bala Bhavya and Sri Ram.", themeColor: "#4b1426" };
export default function RootLayout({ children }) { return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>; }