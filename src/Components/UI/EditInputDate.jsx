// import React from "react";

import ShowFormatDate from "../Utils/ShowFormatDate";

// const EditInputDate = ({labelName, value, onChangeInput}) => {
//   return (
//     <>
//       <h5>
//         <b>{labelName}</b>
//       </h5>
//       <input
//         type="text"
//         onFocus="(this.type='date')"
//         name={value}
//         className="form-control"
//         id={value}
//         value={new Date(value).toLocaleDateString("en-GB")}
//         onChange={onChangeInput}
//         placeholder={labelName}
//       />
//     </>
//   );
// };

// export default EditInputDate;
const EditInputDate = ({ labelName, value, onChangeInput }) => {
  const formattedDate = ShowFormatDate(value);

  return (
    <>
      <h5>
        <b>
          {labelName} - {formattedDate}
        </b>
      </h5>
      <input
        type="date"
        // name={value}
        className="form-control"
        // id={value}
        // value={formattedDate}
        onChange={onChangeInput}
        placeholder={`06/20/2023`}
      />
    </>
  );
};

export default EditInputDate;
