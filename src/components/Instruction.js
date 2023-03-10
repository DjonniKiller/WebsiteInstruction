import React from 'react';

export default function Instruction({ image, instruction }) {
	return (
		<section className='instruction'>
			<div>
				<img src={`../src/screenshots/${image}`}></img>
			</div>
			<p>{instruction}</p>
		</section>
	)
}