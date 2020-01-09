import React from "react";

const Center = (props) => {
        return(
            <section className="content">
        <div className="container">
                <Chat users = {props.users} message = {props.message} MyMessageId = {props.MyMessageId}  MyProfile = {props.MyProfile} />
        </div>
        <MessageSend users = {props.users} message = {props.message} MyMessageId = {props.MyMessageId}  MyProfile = {props.MyProfile} />      
    </section>
    
        );
}

const Chat = (props) => {
    return(
        <div className="chat-list">
                <Human dates={props.message[0].created_at} name={props.users[0].user} message={props.message[0].message} likesCount='4' />
                <Human dates={props.message[1].created_at} name={props.users[1].user} message={props.message[1].message} likesCount='5' />
                <MyMessage dates={props.MyMessageId[0].created_at} name={props.MyProfile[0].user} message={props.MyMessageId[0].message} />
                <Human dates={props.message[3].created_at} name={props.users[2].user} message={props.message[3].message} likesCount='4' />
                <Human dates={props.message[4].created_at} name={props.users[1].user} message={props.message[4].message} likesCount='4' />
                <Human dates={props.message[5].created_at} name={props.users[0].user} message={props.message[5].message} likesCount='4' />
                <Human dates={props.message[6].created_at} name={props.users[1].user} message={props.message[6].message} likesCount='4' />
                <MyMessage dates={props.MyMessageId[1].created_at} name={props.MyProfile[0].user} message={props.MyMessageId[1].message} />
    </div> 
    );
}
const Human = (props) => {

    return(
<div className="humans">
            <div className="human-container flex">
            <div className="contacts flex">
                <div className="contacts-photo"></div>
                <div className="humans-message">
                    <h2>{props.name}</h2>
                    <p>{props.message}</p>
                </div>
            </div>
            <div className="function">
                <div className="humans-data">{props.dates}</div>
                <div className="like"><span>{props.likesCount}</span></div>
            </div>
            </div>
        </div>
    );
}
const MyMessage = (props) => {
    return(
<div className="humans my-message">
                        <div className="human-container flex">
                        <div className="contacts flex">
                            <div className="contacts-photo"></div>
                            <div className="humans-message">
                                <h2>{props.name}</h2>
                                <p>{props.message}</p>
                            </div>
                        </div>
                        <div className="function">
                            <div className="humans-data">{props.dates}</div>
                        </div>
                        </div>
                    </div>
    );
}

const MessageSend = (props) => {

    let newMessegeElement = React.createRef();
    let addMessage = () => {
        let text = newMessegeElement.current.value;
        props.addMessage(text);
    }

    return(
        <div className="message-input">
            <div className="container">
                <form >
                    <div className="flex">
                        <div className="message-send-div">
                            <input ref={newMessegeElement} className="message-send" type="text" name="message" placeholder="Type something..."/>
                        </div>
                        <div className="submit">
                            <button className="submit-btn" onClick={ addMessage }>Send</button>
                         </div>
                    </div>
                </form>
            </div>
        </div>
        );
    }
export default Center;