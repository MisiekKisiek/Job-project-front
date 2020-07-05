import React from "react";

const SelectOptions = ({ packageName, volumeNumber }) => {
  return <option value={volumeNumber}>{`${volumeNumber} ${packageName}`}</option>;
};

export default SelectOptions;
