import NavBar from "./(components)/NavBar";
import HeroSection from "./(components)/HeroSection";
import ProductView from "./(components)/ProductView";
import Footer from "./(components)/Footer";

export default function HomePage() {
  return (
    <div>
      <NavBar />

      <HeroSection />

      <ProductView />

      <Footer />
    </div>
  );
}
