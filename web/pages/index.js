import Header from "../components/UI/Header"
import MessageForm from "../components/MessageForm"
import Global from "../components/UI/Global"
import Container from "../components/UI/Container"
import Text from "../components/UI/Text"
import Link from 'next/link'

const linkStyle = {
  textAlign: "center"
}

const App = () => {
  return (
    <Global>
      <Header />
      <Container>
        <Text>
          <h1>Guest Book</h1>
          <p>Now is your chance to be heard (or read)!</p>
          <Link href="/messages"><a style={linkStyle}>Check past messages!</a></Link>
        </Text>
        <MessageForm />


      </Container>
    </Global>
  )

};

export default App