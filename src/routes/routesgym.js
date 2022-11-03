import { Router } from "express";
import {getUsers, getUser, createUser, updateUser, DeleteUser} from '../controllers/users';
import {getMembers, getMember, createMember, updateMember, Delete} from '../controllers/members';
import {getRooms, getRoom, createRoom, updateRoom, DeleteRoom} from '../controllers/rooms';
import {getDevices, getDevice, createDevice, updateDevice, DeleteDevice} from '../controllers/devices';
import {getInstructors, getInstructor, createInstructor, updateInstructor, DeleteInstructor} from '../controllers/Instructor';
import {getClasses, getClass, createClass, updateClass, DeleteClass} from '../controllers/Classes';
import {getCourts, getCourt, createCourt, updateCourt, DeleteCourt} from '../controllers/Squash_Courts';
import {getReservations, getReservation, createReservation, updateReservation, DeleteReservation} from '../controllers/Reservation';
import {getAssigns, getAssign, createAssign, updateAssign, DeleteAssign} from '../controllers/Assigned';
import {getAttends, getAttend, createAttend, updateAttend, DeleteAttend} from '../controllers/Attend';
import {Login} from '../controllers/Login';

const router = Router()

// Members
router.get('/member', getMembers)          
router.get('/member/:id', getMember)      
router.post('/member', createMember)      
router.put('/member/:id', updateMember)   
router.delete('/member/:id', Delete)

//USERS
router.get('/user',getUsers)
router.get('/user/:id', getUser)
router.post('/user', createUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id', DeleteUser)

//ROOMS
router.get('/room', getRooms)
router.get('/room/:id', getRoom)
router.post('/room', createRoom)
router.put('/room/:id', updateRoom)
router.delete('/room/:id', DeleteRoom)

//Devices
router.get('/device', getDevices)
router.get('/device/:id', getDevice)
router.post('/device', createDevice)
router.put('/device/:id', updateDevice)
router.delete('/device/:id', DeleteDevice)

//Instructor
router.get('/instructor', getInstructors)
router.get('/instructor/:id', getInstructor)
router.post('/instructor', createInstructor)
router.put('/instructor/:id', updateInstructor)
router.delete('/instructor/:id', DeleteInstructor)

//CLASSES
router.get('/class', getClasses)
router.get('/class/:id', getClass)
router.post('/class', createClass)
router.put('/class/:id', updateClass)
router.delete('/class/:id', DeleteClass)

//SQUASH COURTS
router.get('/court', getCourts)
router.get('/court/:id', getCourt)
router.post('/court', createCourt)
router.put('/court/:id', updateCourt)
router.delete('/court/:id', DeleteCourt)

//RESERVATIONS
router.get('/reservation', getReservations)
router.get('/reservation/:id', getReservation)
router.post('/reservation', createReservation)
router.put('/reservation/:id', updateReservation)
router.delete('/reservation/:id', DeleteReservation)

//ASSIGNS
router.get('/assign', getAssigns)
router.get('/assign/:id', getAssign)
router.post('/assign', createAssign)
router.put('/assign/:id', updateAssign)
router.delete('/assign/:id', DeleteAssign)

router.get('/attend', getAttends)
router.get('/attend/:id', getAttend)
router.post('/attend', createAttend)
router.put('/attend/:id', updateAttend)
router.delete('/attend/:id', DeleteAttend)

router.get('/login/:user/:pass', Login)

export default router