import React from 'react';
import Drill from './Drill.jsx';

export default ({datas, maxWidth, onUpdate}) => {
	return (
		<ul>{datas.map(drill =>
			<li key={drill.id}>
				<Drill data={drill} 
					maxWidth = {maxWidth}
					onUpdate={onUpdate.bind(null, drill.id)} />
			</li>
		)}</ul>
	);
}
