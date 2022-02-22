import ioClient from 'socket.io-client';

const socket = ioClient('http://localhost:5000/logger');

export const io = socket;
