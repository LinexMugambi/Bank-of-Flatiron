import React, { useState } from "react";
// import { validateForm } from "./Extras";
import { validateForm } from "./Extra";
function AddTransactionForm({newData}) {

  const [formData, setFormData] = useState({
    date:"",
    description:"",
    category:"",
    amount:""
  })
  function handleSubmit(e){
    e.preventDefault();
    //check for validity of form data
    const formInput = validateForm(formData)