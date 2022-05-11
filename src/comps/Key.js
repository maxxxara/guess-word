import React,{useState, useEffect, useContext} from 'react'
import {AppContext} from './../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Key = ({item}) => {
	const {usedKey, setUsedKey, score, setScore, newQ, setNewQ, word, loading, wordArray, setWordArray, currIndex, setCurrIndex} = useContext(AppContext);
	


	let onKeyClick = (item) => {
		if(item === "ENTER" && currIndex == word.word.length) {
			if(word.word.split('').toString() == wordArray.toString()) {
				setScore(score + 1)
				toast.success('Wow so easy! +1', {
					position: "top-right",
					autoClose: 1000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			} else {
				toast.error('Incorrect Answer', {
					position: "top-right",
					autoClose: 1000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
			setWordArray([]);
			setCurrIndex(0);
			setNewQ(newQ + 1)
		} else if(item == "REMOVE" && currIndex !== 0) {
			let tArr = [...wordArray];
			tArr[currIndex - 1] = "";
			setCurrIndex(currIndex - 1);
			setWordArray(tArr)
		} else if(currIndex !== word.word.length && item !== "ENTER" && item !== "REMOVE") {
			let tArr = [...wordArray];
			tArr[currIndex] = item;
			setWordArray(tArr)
			setCurrIndex(currIndex + 1)
		}
		
	}

	return (
		<p className="keyboard__letter" onClick={() => {onKeyClick(item)}}>{item}</p>
	)
}

export default Key