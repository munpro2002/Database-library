import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books";
import customersReducer from "./customers";
import staffsReducer from "./staffs";
import loanBillsReducer from "./loanBill";
import finesReducer from "./fines";
import paymentsReducer from "./payments";
import notifsReducer from "./notifications";

const store = configureStore({
  reducer: {
    books: booksReducer,
    customers: customersReducer,
    staffs: staffsReducer,
    loanbills: loanBillsReducer,
    fines: finesReducer,
    payments: paymentsReducer,
    notifs: notifsReducer,
  },
});

export default store;
