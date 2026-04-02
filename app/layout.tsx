import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark"> 
      <body className="bg-mesh antialiased">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 pt-24 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}