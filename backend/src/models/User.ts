import {Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserAccount {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    username!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    role!: string;
}