import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages";
import PaymentConfirmation from "./pages/payment-confirmation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        
        <Route path="/payment" element={<PaymentConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
