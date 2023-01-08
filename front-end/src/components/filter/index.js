import React, { useContext } from "react";

import { Select } from "antd";

const Filter = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Select
        defaultValue=""
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: "",
            label: "Newest",
          },
          {
            value: "sort=oldest",
            label: "Oldest",
          },
          {
            value: "sort=-sold",

            label: "Best sales",
          },
          {
            value: "sort=-price",
            label: "Price: High-Low",
          },
          {
            value: "sort=price",
            label: "Price: Low-High",
          },
        ]}
      />
    </div>
  );
};

export default Filter;
