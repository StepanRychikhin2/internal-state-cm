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

`
function App() {
	return (
		<>
			<ListStikers>
				<List></List>
			</ListStikers>
      <Text id="txt">srvrbretb</Text>
		</>
	)
}

export default App
