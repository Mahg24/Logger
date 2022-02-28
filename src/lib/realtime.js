import ioClient from 'socket.io-client';

const socket = ioClient('http://ec2-54-221-167-163.compute-1.amazonaws.com:5000/logger');

export const io = socket;
