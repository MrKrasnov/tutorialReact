import React from "react";
import Header from "./components/header";
import Center from "./components/center";
import Footer from "./components/footer";


const App = (props) => {
    return (
      <div> 
          <Header />
          <Center addMessage={props.addMessage} users = {props.appState.users} message = {props.appState.message} MyMessageId = {props.appState.MyMessageId}  MyProfile = {props.appState.MyProfile}/>
          <Footer />
      </div>
    );
}

export default App;
