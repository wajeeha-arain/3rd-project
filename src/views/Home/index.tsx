import Layout from "@/component/Layout";
import One from "./Map";
import ContactInformation from "./ContactInformation";
import PropertyListings from "./PropertyListings";
import Hero from "./Hero";
import Mapsectioncontent from "./Mapsectioncontent";
import Dotext from "./Dotext";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ContactInformation />
      <One />
      <Dotext />
      <Mapsectioncontent />
      
      <PropertyListings />
    </Layout>
  );
};

export default Home;
