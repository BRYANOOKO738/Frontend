import { useState, useEffect } from "react";

// Custom hook to manage user authentication
const useAuth = () => {
  const [user, setUser] = useState(null);

  // Simulating user login state; replace this with real authentication logic
  useEffect(() => {
    // Fetch user data from your backend or local storage
    const fetchUser = async () => {
      try {
        // Example of fetching user data from backend (replace URL with your actual endpoint)
        const response = await fetch("http://localhost:8080/api/auth/me", {
          method: "GET",
          credentials: "include", // Include cookies if using session-based authentication
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data); // Set user data
        } else {
          setUser(null); // Not authenticated
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return { user };
};

export default useAuth;
