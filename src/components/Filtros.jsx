import { useState } from "react";

export default function Filters() {
  const [minPrice, setMinPrice] = useState(0);

  const handlePriceChange = (event) => {
    // esta función asume que usará
    setMinPrice(event.target.value);
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio:</label>
        <input
          id="price"
          type="range"
          min="0"
          max="1000"
          value={minPrice}
          onChange={handlePriceChange}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="Category">Categoría:</label>
        <select id="category">
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section>
  );
}
