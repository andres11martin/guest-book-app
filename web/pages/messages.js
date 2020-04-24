import Global from "../components/UI/Global"
import api from "../lib/api"
import Message from "../components/UI/Message"
import MessagesContainer from "../components/UI/MessagesContainer"
import Header from "../components/UI/Header"

const Messages = (props) => {

    return (
        <Global style={{ height: "auto" }}>
            <Header />
            <h1>Messages</h1>
            <MessagesContainer>
                {props.messages.map(message => (
                    <Message key={message.id}>
                        <p>{message.name + " from " + message.city + " said:"}</p>
                        <p>{message.message}</p>
                        <p className="date">{message.createdAt.substring(8, 10)}{message.createdAt.substring(4, 8)}{message.createdAt.substring(0, 4)} / {message.createdAt.substring(11, 16)}</p>
                    </Message>
                ))}
            </MessagesContainer>
            <style jsx>{`
            h1 {
                text-align: center;
                margin-top: 4vh;
            }
           .date {
               font-size: 10px;
            text-align: right;
            }
            @media( min-width: 800px) {
                .date {                  
                    font-size: 14px;
                }
                h1 {
                    margin-top: 1vh;
                }
            }
            `}
            </style>
        </Global>
    )
}

Messages.getInitialProps = async function () {
    const res = await api.get('/posts')
    const data = await res.json()
    return {
        messages: data
    }
}

export default Messages