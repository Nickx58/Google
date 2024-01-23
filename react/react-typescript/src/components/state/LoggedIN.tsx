import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
export const LoggedIN = () => {
  const [isLoggedIN, setIsLoggedIN] = useState<boolean>(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  //const [user, setUser] = useState<AuthUser>({} as AuthUser); Type Assertion

  const handleLoggedIN = () => {
    setUser({
      name: "Nikhil",
      email: "nn@gmail.com",
    });
    setIsLoggedIN(true);
  };

  const handleLoggedOut = () => {
    setUser(null);
    setIsLoggedIN(false);
  };

  return (
    <div>
      <button onClick={handleLoggedIN}>Log IN</button>
      <button onClick={handleLoggedOut}>Log OUT</button>
      <p>User is: {isLoggedIN ? "Logged IN" : "logged out"}</p>
      <p>User Name is: {user?.name}</p>
      <p>User Email is: {user?.email}</p>
    </div>
  );
};
