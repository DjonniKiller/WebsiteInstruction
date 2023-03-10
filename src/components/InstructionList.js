import React from 'react';
import Instruction from './Instruction';
import data from '../data/instructions.json';

export default function InstructionsList() {
	return (
		<ul className='instruction-list'>
			{data.map((data, i) => <li key={i}><Instruction key={i} {...data} /></li>)}
		</ul>
	);
}