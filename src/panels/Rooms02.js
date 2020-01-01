import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, Group} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import './Rooms.css';
import img9 from '../img_room/09.jpg';
import img10 from '../img_room/10.jpg';
import img11 from '../img_room/11.jpg';
import img12 from '../img_room/12.jpg';
import img13 from '../img_room/13.jpg';
import img14 from '../img_room/14.jpg';
import img15 from '../img_room/15.jpg';
import img16 from '../img_room/16.jpg';
import Div from "@vkontakte/vkui/dist/es6/components/Div/Div";
import Button from "@vkontakte/vkui/dist/es6/components/Button/Button";

const Rooms02 = (props) => {
	const {getRandom} = props;
	const rooms = [img9, img10, img11, img12, img13, img14, img15, img16]
	return 	<Panel id={props.id}>
		<Group className="rooms">
			<img src={rooms[getRandom(0,7)]} alt='rooms' className="img-rooms"/>
			<Button className="button-close-rooms" onClick={props.go} data-to="Rooms04">Закрыть дверь комнтаы</Button>
			<Button className="button-catch-cat" level="commerce" onClick={props.go} data-to="Rooms02">Поймать кошку</Button>
			<Button className="button-save-out" level="destructive" onClick={props.go} data-to="Rooms02">Сохранить и выйти</Button>
		</Group>
	</Panel>

};


export default Rooms02;
