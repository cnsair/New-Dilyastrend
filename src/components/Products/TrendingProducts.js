import Slider from "./Slider/Slider";

const TrendingProducts = () => {
  return (
    <div className="py-12">
      <div className="py-8">
        <p className="font-semibold text-xl text-dark">Trending NFTs</p>
      </div>
      <div className="">
        <Slider />
      </div>
    </div>
  );
};

export default TrendingProducts;
