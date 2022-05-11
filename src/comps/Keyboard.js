import React,{useState, useEffect, useContext} from 'react'
import {AppContext} from './../App';
import Key from './Key'

const Keyboard = () => {
	const {usedKey, setUsedKey, keyArray, setKeyArray, word, loading, wordArray, setWordArray} = useContext(AppContext);


	useEffect(() => {
		if(!word.word) return;
		let currentWord = word.word;
		let newKeyArray = []
		for(var j = 0; j < currentWord.length; j++) {
			newKeyArray = [...newKeyArray, currentWord[j]]
		}
		var randArr = []
		var possible = "abcdefghijklmnopqrstuvwxyz";
		for (var i = 0; i < 5; i++) randArr.push(possible.charAt(Math.floor(Math.random() * possible.length)));
		
		for(var i = 0; i < randArr.length; i++) {
			newKeyArray = [...newKeyArray, randArr[i]]
		}
		setKeyArray(newKeyArray.sort(() => Math.random() - 0.5))
	}, [word])

	return (
		<div className="keyboard">
			<div className="keyboard__row">
				{keyArray.map((item, i) => (
					<Key key={i} item={item} />
				))}
			</div>
			<div className="bigs">
				<Key item={"ENTER"} id="big"/>
				<Key item={"REMOVE"} />
			</div>
		</div>
	)
}

export default Keyboard