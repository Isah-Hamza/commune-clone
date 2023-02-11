import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages";
import PaymentConfirmation from "./pages/payment-confirmation";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 50,
    });
  }, []);

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
