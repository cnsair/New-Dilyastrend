import CategoryList from './CategoryList'
const PopularCategories = () => {
  return (
    <div className="py-12">
      <div className="py-8">
        <p className="font-semibold text-xl text-dark">Popular Categories</p>
      </div>
      <div className="">
        <CategoryList />
      </div>
    </div>
  );
}

export default PopularCategories