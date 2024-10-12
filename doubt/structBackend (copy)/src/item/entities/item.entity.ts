import { Entity, PrimaryGeneratedColumn,Column} from 'typeorm';
@Entity({name:'item'})
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
  
    @Column()
    description:string;
}
