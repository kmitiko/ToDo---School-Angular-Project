import { TodoStatus } from "../enums/status.enum";

export interface TodoModel {
  id?: string;
  nome: string;
  status: TodoStatus; // Enum 0 - pendente | 1 -  em_andamento | 2 - concluido
  dataCriacao: Date;
  dataFinalizacao: Date;

}
