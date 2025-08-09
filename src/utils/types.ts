import {v4 as uuidv4} from 'uuid';

export type UUID = string;

export const generateUUID = (): UUID => {
    return uuidv4() as UUID;
};
