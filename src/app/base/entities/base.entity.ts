import { UUID } from "@/utils/types";
import { Column, PrimaryGeneratedColumn, BaseEntity as Base } from "typeorm";

export abstract class BaseEntity extends Base
{
    @PrimaryGeneratedColumn("uuid")
    id: UUID;


    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}