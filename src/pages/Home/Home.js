import Animate from "../../components/Animate/Animate";
import Container from "../../components/Container/Container";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <Animate>
      <Container>
        <div className="p-12">
          <Hero />
        </div>
      </Container>
    </Animate>
  );
};

export default Home;
