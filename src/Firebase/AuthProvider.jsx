import { createContext } from "react";
import PropTypes from "prop-types";

const AuthProvider = ({ children }) => {
  const AuthContext = createContext(null);
  const authInfo = {
    name: "Arif",
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
