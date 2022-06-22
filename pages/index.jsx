import Layout from "../components/layout";
import Placeholder from "../components/placeholder";
import Card from "../components/card";
import Faq from "../components/faq";
import About from "../components/about";
import Feature from "../components/feature";

export default function Home() {

  return (
    <Layout>
      <Card />
      <About />
      <Placeholder />
      <Feature />
      <Faq />
      <Placeholder />
    </Layout>
  )
}