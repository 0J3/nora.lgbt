import React from 'react';
export default class ProfilePage extends React.Component {
	render() {
		document.location.replace(
			document.location.href.replace(
				`${document.location.protocol}//${document.location.host}/goto/`,
				''
			)
		);
		return <div>Redirecting...</div>;
	}
}
