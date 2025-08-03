import { useState } from "react";

// `${checked ? `bg-success` : `bg-danger`}`

export default function ToDo({ work }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="w-75 bg-primary-subtle d-flex flex-column justify-content-between align-items-center p-5 gap-4 my-3">
      <h5
        className={
          "d-flex justify-content-center align-items-center " +
          (checked ? "text-success" : "text-danger")
        }
      >
        {checked ? "Complete" : "Incomplete"}
      </h5>
      <h1
        className={
          `w-100 fs-4 text-center rounded-1 text-uppercase p-3 ` +
          (checked ? `bg-success text-light` : `bg-danger text-dark`)
        }
      >
        {work}
      </h1>
      <input
        type="checkbox"
        name="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
    </div>
  );
}

// function CompleteWrapper({ children }) {
//   return (
//     <div className="bg-success text-dark w-100 h-100 p-3">
//       {children}
//     </div>
//   );
// }

// function InCompleteWrapper({ children }) {
//   return (
//     <div className="bg-danger text-dark w-100 h-100 p-3">
//       {children}
//     </div>
//   );
// }
