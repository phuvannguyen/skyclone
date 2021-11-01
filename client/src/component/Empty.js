

const url = "https://gravatar.com/avatar/607f6b654d0f8e3b7872e120d06d2fec?s=400&d=robohash&r=x"

function Empty() {
    return (
      <div>
        <h1>Welcome, Phu</h1>
        <img src={url} alt="Logo" />
        <div className="status">
          <p>Đang họp</p>
              

        </div>
        <button>Start a conversation</button>
        <div>Search for someone to start chatting with or go to Contacts to see who is available.</div>
        <div>Not you ? <a>Check account</a></div>


      </div>
    );
  }
  
  export default Empty;