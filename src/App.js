import './App.css';
import List from "./components/StickerList";
import styled from "styled-components";

const ListStikers = styled.ul`

`
function App() {
  return (
  <>
  <ListStikers>
  <List></List>
  </ListStikers>
  
  
  </>
  );
}

export default App;
