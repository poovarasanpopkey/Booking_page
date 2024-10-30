import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivacyPolicy1 } from "../popoutbox_ui/PrivacyPolicy1";
import { Terams_Conditions1 } from "../popoutbox_ui/Terms_Conditions1";
import { Prohibited_Items1 } from "../popoutbox_ui/Prohibited_Items1";
import { Refund1 } from "../popoutbox_ui/Refund1";
import Home1 from "../popoutbox_ui/Home1";
import { PopoutExtend } from "../pages/extend/popoutExtend";
import { PopoutBook } from "../pages/booking/PopoutBook";
import { ReleaseBook } from "../pages/release/ReleaseBook";
import PopoutInvoice from "../pages/invoice/PopoutInvoice";
import { TestBot } from "../pages/redirect/TestBot";
import PaymentFailure from "../pages/confirmation/payment/paymentFailure";
import PaymentSuccess from "../pages/confirmation/payment/paymentSuccess";
import BookingSuccess from "../pages/confirmation/Booking/BookingSuccess";
import TokenExpired from "../pages/confirmation/token/TokenExpired";
import WhatsApp from "../pages/confirmation/token/Whatssapp";

export default function RouterComponent() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home1 />} />
            <Route path='/conclued' element={<WhatsApp />} />
            <Route path='/book/:Token' element={<PopoutBook />} />
            <Route path='/extend/:Token' element={<PopoutExtend />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy1 />} />
            <Route path="/terms_conditions" element={<Terams_Conditions1 />} />
            <Route path="/prohibited-items_policy" element={<Prohibited_Items1 />} />
            <Route path="/refund_policy" element={<Refund1 />} />
            <Route path="/redirect" element={<TestBot />} />
            <Route path="/release/:Token" element={<ReleaseBook />} />
            <Route path="/invoice/:Token" element={<PopoutInvoice />} />
            <Route path="/paymentfailure" element={<PaymentFailure/>} />
            <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
            <Route path="/bookingsuccess" element={<BookingSuccess/>} />
            <Route path="/token-expired" element={<TokenExpired />} />

        </Routes>
    </Router>
  );
}
