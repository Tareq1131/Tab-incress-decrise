// src/components/Tabs.js
// import React from "react";

// const Tabs = ({ activeTab, onTabChange }) => {
//   return (
//     <div className="tabs">
//       {["Tab1", "Tab2", "Tab3"].map((tab) => (
//         <button
//           key={tab}
//           className={tab === activeTab ? "active" : ""}
//           onClick={() => onTabChange(tab)}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Tabs;

import React from "react";

const Tabs = ({ activeTab, tabs, onTabChange, onAddTab, onRemoveTab }) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={tab === activeTab ? "active" : ""}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
      <button onClick={onAddTab}>+</button>
      {tabs.length > 1 && <button onClick={onRemoveTab}>-</button>}
    </div>
  );
};

export default Tabs;
