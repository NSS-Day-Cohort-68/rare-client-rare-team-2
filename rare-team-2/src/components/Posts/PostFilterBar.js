export const PostFilterBar = ({ categories, setChosenCategoryOnly }) => {
  return (
    <div className="filter-bar">
      <select
        className="category-dropdown"
        onChange={(e) => {
          setChosenCategoryOnly(e.target.value);
        }}
      >
        <option value="0">Filter by category</option>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.id}>
              {category.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
