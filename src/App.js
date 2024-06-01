// src/App.js
// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Tabs from "./components/Tabs";
// import CardForm from "./components/CardForm";
// import CardList from "./components/CardList";
// import LocalStorageManager from "./utils/LocalStorageManager";

// const App = () => {
//   const [activeTab, setActiveTab] = useState("Tab1");
//   const [products, setProducts] = useState(
//     LocalStorageManager.getProducts(activeTab)
//   );

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setProducts(LocalStorageManager.getProducts(tab));
//   };

//   const handleAddProduct = (product) => {
//     LocalStorageManager.addProduct(activeTab, product);
//     setProducts(LocalStorageManager.getProducts(activeTab));
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
//       <CardForm onAddProduct={handleAddProduct} />
//       <CardList products={products} />
//     </div>
//   );
// };

// export default App;

// second use

// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Tabs from "./components/Tabs";
// import CardForm from "./components/CardForm";
// import CardList from "./components/CardList";
// import LocalStorageManager from "./utils/LocalStorageManager";

// const App = () => {
//   const initialTab = "Tab1";
//   const [tabs, setTabs] = useState([initialTab]);
//   const [activeTab, setActiveTab] = useState(initialTab);
//   const [products, setProducts] = useState(
//     LocalStorageManager.getProducts(initialTab)
//   );

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setProducts(LocalStorageManager.getProducts(tab));
//   };

//   const handleAddProduct = (product) => {
//     LocalStorageManager.addProduct(activeTab, product);
//     setProducts(LocalStorageManager.getProducts(activeTab));
//   };

//   const handleAddTab = () => {
//     const newTab = `Tab${tabs.length + 1}`;
//     setTabs([...tabs, newTab]);
//     handleTabChange(newTab);
//   };

//   const handleRemoveTab = () => {
//     if (tabs.length <= 1) return;
//     const newTabs = tabs.slice(0, -1);
//     const tabToRemove = tabs[tabs.length - 1];
//     setTabs(newTabs);

//     if (activeTab === tabToRemove) {
//       const newActiveTab = newTabs[newTabs.length - 1];
//       handleTabChange(newActiveTab);
//     }
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       <Tabs
//         activeTab={activeTab}
//         tabs={tabs}
//         onTabChange={handleTabChange}
//         onAddTab={handleAddTab}
//         onRemoveTab={handleRemoveTab}
//       />
//       <CardForm onAddProduct={handleAddProduct} />
//       <CardList products={products} />
//     </div>
//   );
// };

// export default App;

// third use
// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Tabs from "./components/Tabs";
// import CardForm from "./components/CardForm";
// import CardList from "./components/CardList";
// import LocalStorageManager from "./utils/LocalStorageManager";

// const App = () => {
//   const initialTab = "Tab1";
//   const [tabs, setTabs] = useState([initialTab]);
//   const [activeTab, setActiveTab] = useState(initialTab);
//   const [products, setProducts] = useState(
//     LocalStorageManager.getProducts(initialTab)
//   );

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setProducts(LocalStorageManager.getProducts(tab));
//   };

//   const handleAddProduct = (product) => {
//     LocalStorageManager.addProduct(activeTab, product);
//     setProducts(LocalStorageManager.getProducts(activeTab));
//   };

//   const handleDeleteProduct = (productId) => {
//     LocalStorageManager.deleteProduct(activeTab, productId);
//     setProducts(LocalStorageManager.getProducts(activeTab));
//   };

//   const handleAddTab = () => {
//     const newTab = `Tab${tabs.length + 1}`;
//     setTabs([...tabs, newTab]);
//     handleTabChange(newTab);
//   };

//   const handleRemoveTab = () => {
//     if (tabs.length <= 1) return;
//     const newTabs = tabs.slice(0, -1);
//     const tabToRemove = tabs[tabs.length - 1];
//     setTabs(newTabs);

//     if (activeTab === tabToRemove) {
//       const newActiveTab = newTabs[newTabs.length - 1];
//       handleTabChange(newActiveTab);
//     }
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       <Tabs
//         activeTab={activeTab}
//         tabs={tabs}
//         onTabChange={handleTabChange}
//         onAddTab={handleAddTab}
//         onRemoveTab={handleRemoveTab}
//       />
//       <CardForm onAddProduct={handleAddProduct} />
//       <CardList products={products} onDeleteProduct={handleDeleteProduct} />
//     </div>
//   );
// };

// export default App;

// reload

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import LocalStorageManager from "./utils/LocalStorageManager";

const App = () => {
  const [tabs, setTabs] = useState(LocalStorageManager.getTabs());
  const [activeTab, setActiveTab] = useState(
    LocalStorageManager.getActiveTab()
  );
  const [products, setProducts] = useState(
    LocalStorageManager.getProducts(activeTab)
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setProducts(LocalStorageManager.getProducts(activeTab));
  }, [activeTab]);

  useEffect(() => {
    LocalStorageManager.saveTabs(tabs);
  }, [tabs]);

  useEffect(() => {
    LocalStorageManager.saveActiveTab(activeTab);
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAddProduct = (product) => {
    LocalStorageManager.addProduct(activeTab, product);
    setProducts(LocalStorageManager.getProducts(activeTab));
  };

  const handleDeleteProduct = (productId) => {
    LocalStorageManager.deleteProduct(activeTab, productId);
    setProducts(LocalStorageManager.getProducts(activeTab));
  };

  const handleAddTab = () => {
    const newTab = `Tab${tabs.length + 1}`;
    setTabs([...tabs, newTab]);
    handleTabChange(newTab);
  };

  const handleRemoveTab = () => {
    if (tabs.length <= 1) return;
    const newTabs = tabs.slice(0, -1);
    const tabToRemove = tabs[tabs.length - 1];
    setTabs(newTabs);

    if (activeTab === tabToRemove) {
      const newActiveTab = newTabs[newTabs.length - 1];
      handleTabChange(newActiveTab);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredProducts = products.filter((product) =>
    product.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar />
      <Tabs
        activeTab={activeTab}
        tabs={tabs}
        onTabChange={handleTabChange}
        onAddTab={handleAddTab}
        onRemoveTab={handleRemoveTab}
      />
      <SearchBar onSearch={handleSearch} />
      <CardForm onAddProduct={handleAddProduct} />
      <CardList
        products={filteredProducts}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default App;
