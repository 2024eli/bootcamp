/*
Edit this file to edit which routers are used by the server.
In order to add a router, please 
1) Import it into the file
2) Come up with a prefix for routes which direct to the router. 
The prefix should be of the form '/api/ROUTERNAME'
3) Add an entry with the prefix and imported router to prefixToRouterMap
*/
import { Router } from 'express';
import userRouter from './user.route';

const prefixToRouterMap: { prefix: string; router: Router }[] = [
  {
    prefix: '/api/users',
    router: userRouter,
  },
];

export default prefixToRouterMap;
