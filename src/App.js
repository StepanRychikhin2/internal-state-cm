import './App.css'
import List from './components/StickerList'
import styled from 'styled-components'
// import Choise from './components/Choice'

const ListStikers = styled.ul`
list-style: none;
display: flex;
gap:60px;
justify-content: center;
`
const Text = styled.p`
display: flex;
margin-left: auto;
margin-right: auto;
justify-content: center;
align-items: center;
font-size: 40px

`
function App() {
	return (
		<>
			<ListStikers>
				<List></List>
			</ListStikers>
      <Text> Pigs: <span id="txt">...</span></Text>
		</>
	)
}

export default App
