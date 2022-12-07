import "../styles/globals.css";
import NavBar from "./(components)/NavBar";
import Footer from "./(components)/Footer";
import PostHog from "./(components)/PostHog";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-[100vh]">
        <NavBar />
        {children}
        <Footer />
      </body>
      <PostHog />
    </html>
  );
}
