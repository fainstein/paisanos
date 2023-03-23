import { allAuctionsActions, RootState } from "@/store";
import { CategoryType } from "@/types/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const categories = [
  { name: "All items", type: CategoryType.All },
  { name: "Art", type: CategoryType.Art },
  { name: "Photography", type: CategoryType.Photography },
];

const Categories = () => {
  const dispatch = useDispatch();
  const categorySelected = useSelector(
    (state: RootState) => state.filtersApplied.category
  );
  const handleChange = (category: CategoryType) => {
    dispatch(allAuctionsActions.category(category));
  };

  return (
    <div className="flex gap-3 font-bold text-light-gray">
      {categories.map(({ name, type }) => (
        <div
          key={type}
          className={`cursor-pointer rounded-full px-3 py-1.5 ${
            categorySelected === type ? "bg-white text-dark-gray" : ""
          }`}
          onClick={() => handleChange(type)}
        >
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
