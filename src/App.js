import React, {Component, Fragments} from 'react';

// const Items  = ({menu}) => {
class Items extends Component{
  state = {
    counter: 0,
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  handleRemove = () => {
    this.setState({
      counter: this.state.counter - 1, 
    });
  }
  render(){
    const { menu } = this.props;
    const menuList = menu.map(
      item => {
        return(
          <div className="menu-list" key={item.id}>
          <h2>  {item.name} {item.price} - <span>{item.desc} <button onClick={this.handleClick}>Add </button></span> </h2>

          </div> 
        )
      }
    )
    return(
      <div className="eMenu">
      {menuList}
      <h1>
        You have
        &nbsp; {this.state.counter} &nbsp;
        Items in your cart
        <br />
      </h1>
      <button onClick={this.handleRemove}>Remove</button>
      </div>
    )
  }
}

class App extends Component{
  state = {
    menu: [
      {name: "Chicken Biryani", price: 350, desc: "tasty", id: 1},
      {name: "Mutton Biryani", price: 450, desc: "tasty", id: 2},
      {name: "Beef Biryani", price: 550, desc: "tasty", id: 3},
    ]
  }
  render(){
    return(
      <fragments>
        <h1> eMenu - Food ordering system </h1>
        <Items 
        menu = {this.state.menu} 
        />
      </fragments>
    )
  }
}

export default App;
