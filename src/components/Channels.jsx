// @ts-check

import React from "react";
import { useSelector } from "react-redux";
import { selectChannels } from "../redux";

const Channels = () => {
  const channels = useSelector(selectChannels);

  return (
    <div className="col-3 border-right">
      <div className="d-flex mb-2">
        <span>Channels</span>
        <button className="ml-auto p-0 btn btn-link" type="button">
          +
        </button>
      </div>
      <ul className="nav flex-column nav-pills nav-fill">
        {channels.map(({ name, id }) => (
          <li className="nav-item" key={id}>
            <button
              className="nav-link btn-block mb-2 text-left btn btn-light"
              type="button"
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Channels;
