import { h, Component, ComponentChild } from 'preact';

const valURL = (u: string) => {
	// eslint-disable-next-line
	const rg =
		/^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{1,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?(\#([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?)?$/;

	return rg.test(u);
};

export class InvalidURL {
	static create(link: string) {
		return (
			<div>
				⚠️ Invalid URL detected ⚠️
				<br />
				This URL seems invalid
				<br />
				If you wish to proceed anyway, click this link:{' '}
				<a href={link}>{link}</a>
			</div>
		);
	}
}

export default class Goto extends Component {
	render() {
		let t = document.location.href
			.replace(
				`${document.location.protocol}//${document.location.host}/goto/`,
				''
			)
			.replace(
				`${document.location.protocol}//${document.location.host}/reroute/`,
				''
			)
			.replace(
				`${document.location.protocol}//${document.location.host}/redir/`,
				''
			)
			.replace(
				`${document.location.protocol}//${document.location.host}/redirect/`,
				''
			);
		if (t.toLowerCase().startsWith('gh/')) {
			t = t.replace('gh/', '');
			t = `https://github.com/${t}`;
		}
		if (t.toLowerCase().startsWith('ghp/')) {
			const rawt = t;
			t = t.replace('ghp/', '');
			const v = t.split('/');
			if (v[0]) {
				t = `https://${v.shift()}.github.io/${v.join('/')}`;
			} else {
				return InvalidURL.create(rawt);
			}
		}
		console.log(t);
		if (t.toLowerCase().startsWith('disbot/')) {
			t = t.replace('disbot/', '');
			const split = t.split('/');
			t = `https://discord.com/oauth2/authorize?client_id=${
				split[0]
			}&scope=bot+applications.commands&permissions=${split[1] || -1}`;
			console.log('disbot-' + t);
		}

		t = t.toLowerCase().startsWith('yt/')
			? t.split('?').join('&').replace('yt/', 'https://youtu.be/')
			: t;
		t = t.toLowerCase().startsWith('https://youtu.be/')
			? t.split('?').join('&').replace('youtu.be/', 'youtube.com/watch?v=')
			: t;
		t =
			t.startsWith('https://youtube.com/watch?v=') ||
			t.startsWith('https://www.youtube.com/watch?v=')
				? t + '&has_verified=true'
				: t;

		// eslint-disable-next-line
		if (t.toLowerCase().startsWith('javascript:'))
			return (
				<div>
					⚠️ Potential XSS Attack Blocked ⚠️
					<br />
					We have not redirected to the <code>JavaScript:</code> url specified.
					<br />
					<code>JavaScript:</code> links can contain "Cookie Loggers" and run
					any code, as if it were from nora.lgbt!
					<br />
					If you wish to proceed anyway, and run said code, click this link:{' '}
					<a href={t}>{t}</a>
					<br />
					We take no responsibility if you do run said code by clicking this
					link.
				</div>
			);
		if (
			!(
				t.toLowerCase().startsWith('https://') ||
				t.toLowerCase().startsWith('http://')
			)
		)
			t = 'https://' + t;

		if (!valURL(t)) {
			return InvalidURL.create(t);
		}
		document.location.replace(t);
		return <div>Redirecting...</div>;
	}
}
