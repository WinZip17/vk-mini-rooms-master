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
import img26 from '../img_room/26.jpg';
import img27 from '../img_room/27.jpg';
import img28 from '../img_room/28.jpg';
import img29 from '../img_room/29.jpg';
import img30 from '../img_room/30.jpg';
import img31 from '../img_room/31.jpg';
import img32 from '../img_room/32.jpg';
import img33 from '../img_room/33.jpg';
import img34 from '../img_room/34.jpg';
import Button from "@vkontakte/vkui/dist/es6/components/Button/Button";

const osName = platform();

const Rooms02 = (props) => {
	const {getRandom} = props;
	const rooms = [img26, img27, img28, img29, img30, img31, img32, img33, img34]
	return 	<Panel id={props.id}>
		<Group className="rooms">
			<img src={rooms[getRandom(0,8)]} alt='rooms' className="img-rooms"/>
			<Button className="button-close-rooms" onClick={props.go} data-to="Rooms01">Закрыть дверь комнтаы</Button>
			<Button className="button-catch-cat" level="commerce" onClick={props.go} data-to="Rooms02">Поймать кошку</Button>
			<Button className="button-save-out" level="destructive" onClick={props.go} data-to="Rooms02">Сохранить и выйти</Button>
		</Group>
	</Panel>

};


export default Rooms02;
