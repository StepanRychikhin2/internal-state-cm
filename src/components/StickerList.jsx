import React, { Component } from 'react'
import sters from '../stickers.json'
import styled from "styled-components";

class List extends Component {
	render() {
		return sters.map((img) => {
			//    console.log(img)
			return (
				<li key={img.id}>
					<img src={img.img} alt={img.label} />
                    <p>{img.label}</p>
				</li>
			)
		})
	}
}

export default List
