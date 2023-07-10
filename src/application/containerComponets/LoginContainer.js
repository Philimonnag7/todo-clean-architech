import { useState } from "react";
import LoginForm from "../components/LoginForm";
import AuthenticateUser from "../../domain/useCases/AuthenticateUser";
import AuthApiClient from "../../infastructure/apiClients/AuthApiClient";
import User from "../../domain/entities/User";

export default function LoginContainer() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (username, password) => {
    setLoading(true);
    try {
      const authApiClient = new AuthApiClient();
      const authenticateUser = new AuthenticateUser(authApiClient);
      const user = new User(username, password);
      const authToken = await authenticateUser.execute(user);
      // Store the auth token and perform the necessary redirection
      console.log("Authenticated. Token:", authToken);
    } catch (error) {
      console.error("Login failed:", error);
    }
    setLoading(false);
  };

  return <LoginForm onLogin={handleLogin} disabled={loading} />;
}
