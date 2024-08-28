import Herosection from "./components/Herosection";
import IconsSection from "./components/IconsSection";
import ProductSection from "./components/ProductSection";
import DetailSection from "./components/DetailSection";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div>
      {/* Hero  section  */}
      <Herosection />

      {/* icons section */}
      <IconsSection />
      
      {/* Product Section */}
      <ProductSection />
      
      {/* Detail Section */}
      <DetailSection />
      
      {/* Detail Section - 2 */}
      
      {/* Contact Form */}
      <ContactForm />

</div>
  );
}
