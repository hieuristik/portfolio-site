import Header from "@/components/Header.js";
import "./globals.css";
import "./navStyles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-24 px-6"> /* Tailwind utility to push main body below Nav */
          {children}
        </main>
      </body>
    </html>
  );
}
