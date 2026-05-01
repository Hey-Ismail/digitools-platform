import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import ActiveUsers from "./components/purpleline/ActiveUsers";
import ProductCards from "./components/products/ProductCards";
import { Suspense, useState } from "react";
import Steps from "./components/steps/Steps";
import PricingCards from "./components/pricingCard/PricingCards";
import WorkFlow from "./components/workflow/WorkFlow";
import Footer from "./components/footer/Footer";

const data = fetch("/productData.json").then((res) => res.json());

function App() {
  const [cardCount, setCardCount] = useState(0);
  return (
    <div className="px-4 md:px-0">
      <Navbar cardCount={cardCount}></Navbar>
      <Banner></Banner>
      <ActiveUsers></ActiveUsers>
      <Suspense fallback={<h1>Data loading</h1>}>
        <ProductCards
          data={data}
          setCardCount={setCardCount}
          cardCount={cardCount}
        ></ProductCards>
      </Suspense>
      <Steps></Steps>
      <PricingCards></PricingCards>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </div>
  );
}

export default App;
