import React from "react";
import Exercises01 from "./component/13/Exercises01";
import Exercise02 from "./component/SS13/Exercise02";
import Exercise03 from "./component/SS13/Exercise03";
import Parent_Comp_b from "./component/SS13/b4/Parent_Comp";
import ProductPare from "./component/SS13/b5/ProductChild";
import DetailPost from "./component/SS13/b6/DetailPost";



export default class App extends Component {
  render() {
    return (
      <div>
        <Exercises01 />
        <Exercise02 />
        <Exercise03 />
        <Parent_Comp_b />
        <ProductPare />
        <DetailPost />
      </div>
    )
  }
}
