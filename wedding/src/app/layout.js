import '../globals.css';
import { Charm, Nunito } from "next/font/google";
import Navbar from '../components/Navbar';

const charm = Charm({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-charm",
});

const nunito = Nunito({
  weight: ["200", "400", "700", "1000"],
  subsets: ["latin"],
  variable: "--font-nunito", b
});

export const metadata = {
  title: "Charlotte and Christian's Wedding Website",
  description: "A beautiful website for the wedding.",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={`${charm.variable} ${nunito.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}