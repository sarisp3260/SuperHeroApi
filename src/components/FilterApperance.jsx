import React, { useEffect, useState} from "react";

const FilterApperance = ({data}) => {
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("race");
  console.log(category);
  const appearanceCategory = [
    "race",
    "gender",
    "weight",
    "height",
    "hairColor",
    "eyeColor",
  ];

  return (
    <div className="w-full h-fit bg-orange400/30 rounded-lg flex-center flex-col gap-4 px-2 py-4">
      <h1 className="font-beba text-white text-2xl">Filter Appearance</h1>
      <div className="flex-center py-3 gap-3 flex-wrap">
        {appearanceCategory.map((item) => (
          <button
            className={`btn text-xs ${
              category === item ? "btn-active" : "bg-orange-100 text-primary"
            }`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex-center flex-col w-full">
        <p className="pb-2 text-lg">Result:</p>
        {category === "race" ? <span class="text-xl bg-primary text-secundary rounded-lg p-3">{data.appearance.race}</span>
        :category === "gender" ? <span class="text-xl bg-primary text-secundary rounded-lg p-3">{data.appearance.gender}</span>
        :category === "weight" ? <span class="text-xl bg-primary text-secundary rounded-lg p-3">{data.appearance.weight.join(", ")}</span>
        :category === "height" ? <span class="text-xl bg-primary text-secundary rounded-lg p-3">{data.appearance.height.join(", ")}</span>
        :category === "hairColor" ? <span class="text-xl bg-primary text-secundary rounded-lg p-3">{data.appearance.hairColor}</span>
        :category === "eyeColor" ? <span class="text-xl bg-primary text-secundary rounded-lg p-3">{data.appearance.eyeColor}</span>
        :null}
      </div>
    </div>
  );
};

export default FilterApperance;
