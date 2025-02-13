import { Header } from "./Components/Header";
import { Post } from "./Post";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <Post author="Guilherme" content="AAAAAAAAAAAAAAAAAAA" />
      <Post author="Marcelo" content="BBBBBBBBBBBBBBB" />
    </>
  );
}

export default App;
