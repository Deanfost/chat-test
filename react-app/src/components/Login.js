import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../context/mainContext';
import { SocketContext } from '../context/socketContext';
import { UsersContext } from '../context/usersContext';