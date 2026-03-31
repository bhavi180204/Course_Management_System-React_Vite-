

import React, { createContext, use, useState } from "react";

export let Auth = createContext();

const AuthContext = ({ children }) => {

  let [user, setUser] = useState(()=>{
                               return localStorage.getItem("user")
                               ? JSON.parse(localStorage.getItem("user"))
                               : null
                              });

  console.log(user);

  let login = (data) => {
    setUser(data);
    
     localStorage.setItem("user",JSON.stringify(data));
  };
  console.log(user);
  
  let logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <Auth.Provider value={{ login, logout, user }}>{children}</Auth.Provider>
  );
};

export default AuthContext;
