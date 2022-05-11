import React,{useState, useEffect, useContext} from 'react'
import {AppContext} from './../App';

const Board = () => {
	const {word, newQ, loading, wordArray, setWordArray} = useContext(AppContext);

	useEffect(() => {
		if(!word.word) return;
		let currentWord = word.word;
		let arr = []
		for(var i = 0; i< currentWord.length; i++) {
			arr.push("")
		}
		setWordArray(arr);
	}, [word])
	useEffect(() => {
		if(!word.word) return;
		let currentWord = word.word;
		let arr = []
		for(var i = 0; i< currentWord.length; i++) {
			arr.push("")
		}
		setWordArray(arr);
	}, [newQ])
	return (
		<div className="board">
			<div className="row">
				{wordArray.map((item, i) => (
					<div key={i}className="letter">{item}</div>
				))}
			</div>
		</div>
	)
}

export default Board