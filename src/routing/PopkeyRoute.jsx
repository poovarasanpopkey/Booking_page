import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivacyPolicy } from "../popkey_ui/PrivacyPolicy";
import { Terams_Conditions } from "../popkey_ui/Terms_Conditions";
import { Prohibited_Items } from "../popkey_ui/Prohibited_Items";
import { Refund } from "../popkey_ui/Refund";
import Home from "../popkey_ui/main/Home";
import { PopkeyBook } from "../pages/booking/PopkeyBook";
import PopkeyInvoice from "../pages/invoice/PopkeyInvoice";
import { LiveBot } from "../pages/redirect/LiveBot";
import { PopoutExtend } from "../pages/extend/popoutExtend";
import { ReleaseBook } from "../pages/release/ReleaseBook";
import PaymentFailure from "../pages/confirmation/payment/paymentFailure";
import PaymentSuccess from "../pages/confirmation/payment/paymentSuccess";
import BookingSuccess from "../pages/confirmation/Booking/BookingSuccess";
import TokenExpired from "../pages/confirmation/token/TokenExpired";
import WhatsApp from "../pages/confirmation/token/Whatssapp";

export default function RouterComponent() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:Token" element={<PopkeyBook />} />
          <Route path='/extend/:Token' element={<PopoutExtend />} />
          <Route path="/release/:Token" element={<ReleaseBook />} />
          <Route path="/invoice/:Token" element={<PopkeyInvoice />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<Terams_Conditions />} />
          <Route path="/prohibited-items-policy" element={<Prohibited_Items />}/>
          <Route path="/refund-policy" element={<Refund />} />
          <Route path="/redirect" element={<LiveBot />} />
          <Route path="/paymentfailure" element={<PaymentFailure/>} />
          <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
          <Route path="/bookingsuccess" element={<BookingSuccess/>} />
          <Route path="/token-expired" element={<TokenExpired />} />
          <Route path='/conclued' element={<WhatsApp />} />


        </Routes>
      </Router>
    </>
  );
}
