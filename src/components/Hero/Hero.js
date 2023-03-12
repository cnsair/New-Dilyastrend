import Search from "../Search/Search";
const Hero = () => {
  return (
    <div className="flex justify-center items-center my-12">
      <div className="my-12">
        <div className="text-center">
          <div className="font-semibold text-5xl leading-snug">
            <div> Discover, collect, and sell</div>
            <div>
              extraordinary <span className="text-primarycolor">NFTs</span>
            </div>
          </div>
          <div className="mt-6 text-grey text-xl">
            Gigaland is the world largest NFT marketplace.
          </div>
          {/* input search */}
          <Search />
          <p className="text-grey mt-2">
            {" "}
            <span className="font-bold">Suggested:</span> planet, crypto,
            abstract, more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
