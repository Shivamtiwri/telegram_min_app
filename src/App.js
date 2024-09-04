import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const [user, setUser] = useState(null);

  useEffect(() => {
    window.Telegram.WebApp.ready();

    // Get user data
    const user = window.Telegram.WebApp.initDataUnsafe.user;
    setUser(user);

    // Expand the app to full height
    window.Telegram.WebApp.expand();
  }, []);
  return (
    <div>
      <h1>Welcome to Telegram Mini App!</h1>
      {user && (
        <div>
          <p>
            Name: {user.first_name} {user.last_name}
          </p>
          <p>Username: {user.username}</p>
        </div>
      )}
    </div>
  );
}

export default App;
