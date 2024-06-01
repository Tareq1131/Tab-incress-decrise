// src/utils/LocalStorageManager.js
// const LocalStorageManager = {
//   getProducts: (tab) => {
//     const products = localStorage.getItem(tab);
//     return products ? JSON.parse(products) : [];
//   },
//   addProduct: (tab, product) => {
//     const products = LocalStorageManager.getProducts(tab);
//     products.push(product);
//     localStorage.setItem(tab, JSON.stringify(products));
//   },
// };

// export default LocalStorageManager;

// const LocalStorageManager = {
//   getProducts: (tab) => {
//     const products = localStorage.getItem(tab);
//     return products ? JSON.parse(products) : [];
//   },
//   addProduct: (tab, product) => {
//     const products = LocalStorageManager.getProducts(tab);
//     products.push(product);
//     localStorage.setItem(tab, JSON.stringify(products));
//   },
//   deleteProduct: (tab, productId) => {
//     let products = LocalStorageManager.getProducts(tab);
//     products = products.filter((product) => product.id !== productId);
//     localStorage.setItem(tab, JSON.stringify(products));
//   },
// };

// export default LocalStorageManager;

// reload
const LocalStorageManager = {
  getProducts: (tab) => {
    const products = localStorage.getItem(tab);
    return products ? JSON.parse(products) : [];
  },
  addProduct: (tab, product) => {
    const products = LocalStorageManager.getProducts(tab);
    products.push(product);
    localStorage.setItem(tab, JSON.stringify(products));
  },
  deleteProduct: (tab, productId) => {
    let products = LocalStorageManager.getProducts(tab);
    products = products.filter((product) => product.id !== productId);
    localStorage.setItem(tab, JSON.stringify(products));
  },
  getTabs: () => {
    const tabs = localStorage.getItem("tabs");
    return tabs ? JSON.parse(tabs) : ["Tab1"];
  },
  saveTabs: (tabs) => {
    localStorage.setItem("tabs", JSON.stringify(tabs));
  },
  getActiveTab: () => {
    return localStorage.getItem("activeTab") || "Tab1";
  },
  saveActiveTab: (tab) => {
    localStorage.setItem("activeTab", tab);
  },
};

export default LocalStorageManager;
