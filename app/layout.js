import "../styles/globals.css";
import NavBar from "./(components)/NavBar";
import Footer from "./(components)/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
