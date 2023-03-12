import Animate from "../../components/Animate/Animate";
import Container from "../../components/Container/Container";
import Hero from "../../components/Hero/Hero";
import TrendingProducts from "../../components/Products/TrendingProducts";
import PopularCategories from "../../components/Categories/PopularCategories";

const Home = () => {
  return (
    <Animate>
      <Container>
        <div className="p-12">
          <Hero />
          <TrendingProducts />
          <PopularCategories />
        </div>
      </Container>
    </Animate>
  );
};

export default Home;
