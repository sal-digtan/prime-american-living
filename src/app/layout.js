import { Jost } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});


export const metadata = {
  title: "Prime American Living",
  description: "A Real Estate Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable}`}>
        {children}
      </body>
    </html>
  );
}
