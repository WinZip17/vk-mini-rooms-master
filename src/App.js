import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Rooms01 from './panels/Rooms01';
import Rooms02 from "./panels/Rooms02";
import Rooms03 from "./panels/Rooms03";
import Rooms04 from "./panels/Rooms04";

const App = () => {
	const [activePanel, setActivePanel] = useState('Rooms01');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);
	{/*<ScreenSpinner size='large' />*/}
	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const getRandom = (min, max) => {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	return (
		<View activePanel={activePanel} popout={popout} header={false}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Rooms01 id='Rooms01' getRandom={getRandom} go={go} />
			<Rooms02 id='Rooms02' getRandom={getRandom} go={go} />
			<Rooms03 id='Rooms03' getRandom={getRandom} go={go} />
			<Rooms04 id='Rooms04' getRandom={getRandom} go={go} />
		</View>
	);
}

export default App;

