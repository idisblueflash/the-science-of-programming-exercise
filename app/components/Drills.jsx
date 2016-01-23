import React from 'react';
import Drill from './Drill.jsx';

export default ({datas}) => {
	return (
		<ul>{datas.map(drill =>
			<li key={drill.id}>
				<Drill data={drill} />
			</li>
		)}</ul>
	);
}
