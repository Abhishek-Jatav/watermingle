import Herosection from "./components/Herosection";
import IconsSection from "./components/IconsSection";
import ProductSection from "./components/ProductSection";
import Services from "./components/Services";
import FreeBottleBranding from "./components/FreeBottleBranding";
import FreeItem from "./components/FreeItem";
import Statergies from "./components/Statergies";
import EmailForm from "./components/EmailForm";

export default function Home() {
  return (
    <div>
      {/* Hero  section  */}
      <Herosection />

      {/* Services */}
      <Services/>

      {/* Free Bottle Branding */}
      <FreeBottleBranding/>
      
      {/* Free meal and item distribution */}
      <FreeItem />
      
      {/* Promotion Stratergies */}
      <Statergies/>
      {/* Detail Section */}
      
      {/* Detail Section - 2 */}
      
      {/* Contact Form */}
      <EmailForm/>
</div>
  );
}
