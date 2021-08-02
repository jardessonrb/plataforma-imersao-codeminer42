import { Entity, Column, Generated, CreateDateColumn, PrimaryColumn, Unique } from 'typeorm';

@Unique(['email_student'])
@Entity("table_student")
export class Student{

    @PrimaryColumn("uuid")
    @Generated("uuid")
    id_student: string;

    @Column({name: 'name_student', type: 'varchar'})
    name_student: string;

    @Column({name: 'email_student', type: 'varchar'})
    email_student: string;

    @Column({name: 'password_student', type: 'varchar'})
    password_student: string;

    @Column()
    @CreateDateColumn()
    created_at: Date;
}
