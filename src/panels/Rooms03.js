import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, Group} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import persik from '../img/persik.png';
import './Rooms.css';
import img17 from '../img_room/17.jpg';
import img18 from '../img_room/18.jpg';
import img19 from '../img_room/19.jpg';
import img20 from '../img_room/20.jpg';
import img21 from '../img_room/21.jpg';
import img22 from '../img_room/22.jpg';
import img23 from '../img_room/23.jpg';
import img24 from '../img_room/24.jpg';
import img25 from '../img_room/25.jpg';

import Button from "@vkontakte/vkui/dist/es6/components/Button/Button";

const Rooms02 = (props) => {
	const {getRandom} = props;
	const rooms = [img17, img18, img19, img20, img21, img22, img23, img24, img25]
	return 	<Panel id={props.id}>
		<Group className="rooms">
			<img src={rooms[getRandom(0,8)]} alt='rooms' className="img-rooms"/>
			<Button className="button-close-rooms" onClick={props.go} data-to="Rooms02">Закрыть дверь комнтаы</Button>
			<Button className="button-catch-cat" level="commerce" onClick={props.go} data-to="Rooms02">Поймать кошку</Button>
			<Button className="button-save-out" level="destructive" onClick={props.go} data-to="Rooms02">Сохранить и выйти</Button>
		</Group>
	</Panel>

};


export default Rooms02;
