import Container from "./components/container";
import Login from "./components/login";
import Header from "./components/header";
import Register from "./components/register";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Register />
        <Login />
      </Container>
    </div>
  );
}

export default App;
