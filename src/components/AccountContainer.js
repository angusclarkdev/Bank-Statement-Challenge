/* eslint-disable */
import React, { Component } from "react";
import axios from "axios";
import TransactionsList from "./TransactionsList";
import CategorySelector from "./CategorySelector";
import { Data } from "../APIdata";

class AccountContainer extends Component {
  constructor() {
    super();

    this.state = {
      transactions: [],
      activeCategory: "All"
    };
  }

  get filteredItems() {
    if (this.state.activeCategory === "All") {
      return this.state.transactions;  
    } 
    return this.state.transactions.filter(item => {
      return item.category === this.state.activeCategory;
    }) 
  }

  componentDidMount() {
    // API call
    axios
      .get(Data)
      .then(response => {
        this.setState(prevState => ({
          ...prevState,
          transactions: response.data,
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  checkboxHandler = e => {
    
    const input = e.target, 
          name = input.name;
    
    this.setState({
      ...this.state,
      activeCategory: name
    });
  }

  render() {
    return (
      <div className="ui grid container">
        <CategorySelector
          activeCategory={this.state.activeCategory}
          checkboxHandler={this.checkboxHandler}
          checked={this.state.checked}
        />
        <TransactionsList transactions={this.filteredItems} />
      </div>
    );
  }
}

export default AccountContainer;
