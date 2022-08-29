import React from "react";

const TabsData = ({ data }) => {
  return (
    <div className="w-full md:w-2/3 flex flex-col bg-orange-100/40 rounded-lg py-2 px-5">
      <div className="flex flex-col gap-3 py-4">
        <h2 className="font-beba text-orange700 text-2xl">Work</h2>
        <div className="flex items-start flex-col flex-wrap gap-5 text-lg">
          <span>
            <strong>Base: </strong>
            {data?.work.base}
          </span>
          <span>
            <strong>Occupation: </strong> {data?.work.occupation}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 py-4">
        <h2 className="font-beba text-orange700 text-2xl">Conections</h2>
        <div className="flex items-start flex-col flex-wrap gap-5 text-lg">
          <span>
            <strong>Group Affiliation: </strong>
            {data?.connections.groupAffiliation}
          </span>
          <span>
            <strong>Relatives: </strong> {data?.connections.relatives}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TabsData;
