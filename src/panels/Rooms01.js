import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, Group} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import img1 from '../img_room/01.jpg';
import img2 from '../img_room/02.jpg';
import img3 from '../img_room/03.jpg';
import img4 from '../img_room/04.jpg';
import img5 from '../img_room/05.jpg';
import img6 from '../img_room/06.jpg';
import img7 from '../img_room/07.jpg';
import img8 from '../img_room/08.jpg';
import './Rooms.css';
import Div from "@vkontakte/vkui/dist/es6/components/Div/Div";
import Button from "@vkontakte/vkui/dist/es6/components/Button/Button";
import View from "@vkontakte/vkui/dist/components/View/View";

const osName = platform();

const Rooms01 = (props) => {
	const {getRandom} = props;
	const rooms = [img1, img2, img3, img4, img5, img6, img7, img8]
	return 	<Panel id={props.id}>
		<Group>
			<img src={rooms[getRandom(0,7)]} alt='rooms' className="img-rooms"/>
			<Button className="button-close-rooms" onClick={props.go} data-to="Rooms03">Закрыть дверь комнтаы</Button>
			<Button className="button-catch-cat" level="commerce" onClick={props.go} data-to="Rooms02">Поймать кошку</Button>
			<Button className="button-save-out" level="destructive" onClick={props.go} data-to="Rooms02">Сохранить и выйти</Button>
		</Group>
	</Panel>

};



export default Rooms01;
