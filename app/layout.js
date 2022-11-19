import "../styles/globals.css";
import NavBar from "./(components)/NavBar";
import Footer from "./(components)/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="min-h-[100vh]">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
