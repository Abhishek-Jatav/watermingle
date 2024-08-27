import Image from "next/image";
import Herosection from "./components/Herosection";
import IconsSection from "./components/IconsSection";
import ProductSection from "./components/ProductSection";
import DetailSection from "./components/DetailSection";

export default function Home() {
  return (
    <div>
      Home
      {/* Hero  section  */}
      <Herosection />

      {/* icons section */}
      <IconsSection />
      
      {/* Product Section */}
      <ProductSection />
      
      {/* Detail Section */}
      <DetailSection />
      
      {/* Detail Section - 2 */}
      <DetailSection/>
</div>
  );
}
