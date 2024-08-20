import Choise from './Choice'
import styled from 'styled-components'
const PhoroPigs = styled.img`
	width: 150px;
	height: 150px;
`
const TextPigsTag = styled.p`
  font-size: 25px;
  font-style: italic;
`
export default function Stiker(imgUrl, imgalt, imgId) {
	return (
		<li
			onClick={(e) =>
				(document.getElementById(`txt`).textContent = Choise(imgalt))
			}
			key={imgId}
		>
			<PhoroPigs src={imgUrl} alt={imgalt} />
			<TextPigsTag  id={imgId}></TextPigsTag>
		</li>
	)
}

