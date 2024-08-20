import React, { Component } from 'react'
import sters from '../stickers.json'
import Stiker from './Sticker'
class List extends Component {
	state = {
		ishiden: false
	}
	render() {
		return sters.map((img) => {
			return Stiker(img.img, img.label, img.id)
		})
	}
}

export default List;
