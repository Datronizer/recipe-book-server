import { BaseEntity } from "@/app/base/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: "user" })
export class User extends BaseEntity 
{
    @Column({ type: "text" })
    name: string;

    @Column({ type: "text", unique: true })
    email: string;

    @Column({ type: "text" })
    username: string;
}
