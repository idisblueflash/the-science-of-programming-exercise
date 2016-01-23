import React from 'react';

export default ({data}) => <div>
	{data.label}
	<input id={data.id} placeholder="all states: FF" />
</div>;
