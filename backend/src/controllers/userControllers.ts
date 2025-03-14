import {Request, Response} from 'express';
import { UserAccount } from '../models/User';
import { AppDataSource } from '../config/data-source';


const userRepository = AppDataSource.getRepository(UserAccount);

export const getUsers = async (req: Request, res: Response) => {
    const users = await userRepository.find();
    res.json(users);
}

export const getUser = async (req: Request, res: Response) => {
    const user = await userRepository.findOneBy({id: parseInt(req.params.id)});
    res.json(user);
}

export const createUser = async (req: Request, res: Response) => {
    const{username, email, password, role} = req.body;
    const createdUser = userRepository.create({username, email, password, role} );
    const result = await userRepository.save(createdUser);
    res.json(result);
}

export const updateUser = async (req: Request, res: Response) => {
    const user = await userRepository.findOneBy({id: parseInt(req.params.id)});
    if(user){
        userRepository.merge(user, req.body);
        const result = await userRepository.save(user);
        res.json(result);
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const result = await userRepository.delete(req.params.id);
    res.json(result);
}

