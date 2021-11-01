import "./Main.css"
import Empty from "./Empty";
import HeaderMain from "./HeaderMain"
import MainMessage from "./MainMessage"
import MessagesInput from "./MessagesInput"

const isTrue = true;

function Main() {
    return (
      <div class="main">
        <HeaderMain />
        {isTrue ? <MainMessage /> : <Empty />}        
        <MessagesInput />         
      </div>
    );
  }
  
  export default Main;