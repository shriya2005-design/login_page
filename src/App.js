import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <Login goToRegister={() => setShowLogin(false)} />
      ) : (
        <Register goToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;
