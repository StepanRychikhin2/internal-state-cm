import './App.css'
import List from './components/StickerList'
import styled from 'styled-components'

const ListStikers = styled.ul`
list-style: none;
display: flex;
gap:60px;
justify-content: center;
`
function App() {
	return (
		<>
			<ListStikers>
				<List></List>
			</ListStikers>
		</>
	)
}

export default App
