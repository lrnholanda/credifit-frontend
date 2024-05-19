import { IFuncionario } from '../interfaces/funcionarios';
import { Api } from '../providers';

const getAllFuncionarios = () => Api.get<IFuncionario[]>('/ funcionarios');

export const FuncionarioService = {
    getAllFuncionarios
};