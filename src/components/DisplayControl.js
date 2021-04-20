import React from "react";
import DayList from "./DayList";
import ProduceList from "./ProduceList";
import UserInput from "./UserInput";

class DisplayControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProduce: false
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      displayProduce: !prevState.displayProduce
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.displayProduce) {
      currentlyVisibleState = <ProduceList />
      buttonText = "Return";
    } else {
      currentlyVisibleState = <DayList />
      buttonText = "Produce";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

export const userMonth = <UserInput />
export default DisplayControl;