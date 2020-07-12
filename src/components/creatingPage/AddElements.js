import React from "react";

const AddElement = ({ number }) => {
  return (
    <>
      <div className="creating-page__form-element">
        <select
          name=""
          id=""
          className="creating-page__select-element-type"
          disabled
        >
          <option value="LAY-PO">Plan orientacyjny</option>
          <option value="LAY-PS">Plan sytuacyjny/legenda do PS</option>
          <option value="GND">Rysunek gabarytowy</option>
          <option value="SEC">Profil/Przekrój</option>
          <option value="TYP">Przekrój typowy</option>
          <option value="DET">Detal</option>
          <option value="PID">Schemat</option>
        </select>
        <label htmlFor="">
          Enter element name:
          <input type="text" className="creating-page__" disabled />
        </label>
        <label htmlFor="">
          Enter drawing scale (If element have a scale):
          <input type="text" disabled />
        </label>
      </div>
    </>
  );
};

export default AddElement;
