import { useEffect, useState } from "react";
import Loading from "../Components2/Loading";
import Cursor from "./Cursor";
import Header1 from "../Components2/Header1";
import Header from "../Components2/Header";
import Carosel from "../Components2/Carosel";
import Cate from "../Components2/Cate";
import Cards from "./Cards";
import Testimonial from "./Testimonial";
import Products from "./Products";
import Latestnewz from "./Latestnewz";
import Icons from "./Icons";
import Footer from "./Footer";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (

      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header1 />
            <Cursor />
            <Header />
            <Carosel />
            <Cate />
            <Cards />
            <Testimonial />
            <Products />
            <Latestnewz />
            <Icons />
           
            <Footer />
        
          </>
        )}
      </div>
  
  );
};

export default Loader;
