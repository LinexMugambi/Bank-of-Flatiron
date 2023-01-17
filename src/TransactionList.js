import React, { useEffect, useState} from "react";
// import TransactionsList from "./TransactionsList";
import TransactionsList from "./TransactionList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  //store fetched data from side effect
  const [transactions, setTransactions] = useState([]);

  //manage state for user serch parameters
  const [ seaarch, setSearch] = useState("");