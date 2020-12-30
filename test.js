const x = () => {
	const a = x => {
		x = document.getElementsByClassName(x);
		for (const key in x) {
			if (Object.hasOwnProperty.call(x, key)) {
				const e = x[key];
				e.contentEditable = 'true';
				e.setAttribute('spellcheck', 'false');
			}
		}
	};
	a('da-username');
	a('da-messageContent');
	a('da-header');
	a('da-timestamp');
	a('da-nicknames');
	a('da-headerText');
	a('da-usernameContainer');
	a('da-headerTagNoNickname');
	a('da-nameTag');
	a('da-connectedAccountName');
	a('da-membersGroup');
};

x();
setInterval(x, 100);
