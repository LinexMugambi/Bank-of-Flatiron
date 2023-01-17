import React from "react";

function Transaction({id, date, description, category, amount}) {
  function handleDelete(event){
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(result => result.json())
    .then(alert("Item deleted!"))
    