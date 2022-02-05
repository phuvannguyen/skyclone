import "./Sidebar.css"
import HeaderSideBar from "./HeaderSidebar"
import MessageBook from "./MessageBook"
import Phonebook from "./PhoneBook"


const isTrue = true;

function Sidebar() {
    return (
      <div className="sidebar">
        <HeaderSideBar />
        <div className="message_sidebar">
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
          { isTrue ? <MessageBook /> : <Phonebook />}
        </div>
        
        

      </div>
    );
  }
  
  export default Sidebar;