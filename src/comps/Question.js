import React,{useState, useEffect, useContext} from 'react'
import {AppContext} from './../App';

const Question = () => {
	const {word, loading} = useContext(AppContext);
	return (
		<div className="question">
			{loading ? <h2>Loading question...</h2> : <h2>{word.definition}</h2> }
		</div>
	)
}

export default Question