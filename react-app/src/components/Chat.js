import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../context/mainContext';
import { SocketContext } from '../context/socketContext';
import { UsersContext } from '../context/usersContext';
import { FiList } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';
import { RiSendPlaneFill } from 'react-icons/ri';
import ScrollToBottom from 'react-scroll-to-bottom';

const Chat = () => {
	const { name, room, setName, setRoom } = useContext(MainContext);
	const socket = useContext(SocketContext);
	const { users } = useContext(UsersContext);
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
    const history = useHistory()
};

export default Chat
