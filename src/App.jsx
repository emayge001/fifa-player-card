import "./App.css";
import CustomButton from "./components/CustomButton";
import ProductCard from "./components/ProductCard";

function App() {
  // handle signup
  const handleSignup = () => {
    alert("Sign up successful");
  };

  // handle login
  const handleLogin = () => {
    alert("Login successful");
  };

  // handle buy now
  const handleBuyNow = () => {
    alert("Buy now successful");
  };

  return (
    <div className="container">
      <div>
        <h1>FIFA PLAYER CARD</h1>
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
