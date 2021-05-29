import React from "react";

function ProjectTitle() {
  return (
    <div className="text-left pl-3 font-bold flex">
      <div className=" text-white">
        <p className="m-2 pl-3 pr-3 rounded-md bg-gray-900">Project Name: </p>
        <p className="m-2 pl-3 pr-3 rounded-md bg-gray-900">Report Date: </p>
        <p className="m-2 pl-3 pr-3 rounded-md bg-gray-900">Project Status: </p>
        <p className="m-2 pl-3 pr-3 rounded-md bg-gray-900">Completed: </p>
      </div>
      <div className="pl-3">
        <p className="m-2 pl-3 pr-3 rounded-md bg-gray-100">Savajadiya Parth M.</p>
        <p className="m-2 pl-3 pr-3 rounded-md bg-gray-100">29/05/2021</p>
        <p className="m-2 pl-3 pr-3 rounded-md bg-gray-100">On Track</p>
        <p className="m-2 pl-3 pr-3 rounded-md bg-gray-100">27%</p>
      </div>
    </div>
  );
}

export default ProjectTitle;
