import React, { useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import { Routes, Route, Navigate } from "react-router-dom";
import LibrarianPage from "./pages/LibrarianPage";
import { useDispatch } from "react-redux";
import { getAllBooks } from "./store/books";
import { getAllCustomers } from "./store/customers";
import { getAllStaffs } from "./store/staffs";
import {
  getAllLoanHome,
  getAllLoanLibrary,
  getAllReturnBills,
} from "./store/loanBill";
import { getAllFines } from "./store/fines";
import { getFinePayments, getBorrowPayments } from "./store/payments";
import { getAllNotifs } from "./store/notifications";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
    dispatch(getAllCustomers());
    dispatch(getAllStaffs());
    dispatch(getAllLoanHome());
    dispatch(getAllLoanLibrary());
    dispatch(getAllReturnBills());
    dispatch(getAllFines());
    dispatch(getFinePayments());
    dispatch(getBorrowPayments());
    dispatch(getAllNotifs());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="librarian" element={<LibrarianPage />} />
      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
}

export default App;
