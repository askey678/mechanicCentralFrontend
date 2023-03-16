
  
  // Method to check if the user is authenticated by checking for the isLoggedIn flag in localStorage
  export const isAuthenticated = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return isLoggedIn === "true";
  };