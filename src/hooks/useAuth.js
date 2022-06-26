import {useContext} from 'react'; //para usar contexto

import {AuthContext} from '../context';

export const useAuth = () => useContext(AuthContext); //obtiene el valor del contexto