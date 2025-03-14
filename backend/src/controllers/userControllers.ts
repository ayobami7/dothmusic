import {Request, Response} from 'express';
import { User } from '../models/User';
import { AppDataSource } from '../config/data-source';


const userRepository = AppDataSource.getRepository(User);

export const getUsers = async (req: Request, res: Response) => {
    try{
        const users = await userRepository.find();
        res.status(200).json(users);
    } catch (err: any){
        res.status(500).json({message: err.message})
    }
}

export const getUser = async (req: Request, res: Response) => {
    try{
        const user = await userRepository.findOneBy({id: parseInt(req.params.id)});
        if (user){
            res.status(200).json(user);
        } else {
            res.status(404).json({message: "User not found"});
        }
    } catch (err: any){
        res.status(500).json({message: err.message})
    }   
}

export const createUser = async (req: Request, res: Response) => {
    const{username, email, password, role} = req.body;
    try{
        const user = userRepository.create({username, email, password, role} );
        const result = await userRepository.save(user);
        res.json(result);
    } catch (err: any){
        res.status(500).json({message: err.message})
    }  
}

export const updateUser = async (req: Request, res: Response) => {
    try{
        const user = await userRepository.findOneBy({id: parseInt(req.params.id)});
        if (user) {
            userRepository.merge(user, req.body);
            const result = await userRepository.save(user);
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "User not found"});
        }
    } catch (err: any){
        res.status(500).json({message: err.message})
    }
    
}

export const deleteUser = async (req: Request, res: Response) => {
    try{
        const result = await userRepository.delete(req.params.id);
        if(result.affected){
            res.status(200).json({message: "User deleted"});
        } else{
            res.status(404).json({message: "User not found"});
        }
        
    } catch (err: any){
        res.status(500).json({message: err.message})
    }
    
}

