import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import BookingBody from "./Components/BookingBody";
import Contacts from "./Components/Contacts";
import DashboardBody from "./Components/DashboardBody";
import RecentBookings from "./Components/RecentBookings";
import CommonPage from "./pages/CommonPage";

const NotFoundPage = () => (
  <div>
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <CommonPage>
          <Routes>
            <Route path="/" element={<DashboardBody />} />
            <Route path="/hallbooking" element={<BookingBody />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/recentBookings" element={<RecentBookings />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </CommonPage>
      </Router>
    </ChakraProvider>
  );
}

export default App;
