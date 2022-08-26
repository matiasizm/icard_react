import {useState} from 'react';
import { getTablesApi} from '../api/table';
import { useAuth } from './';

export function useTable(){
    const [loading, setLoading] = useState(true);
    const [error,seterror] = useState(null);
    const [tables, setTables] = useState(null);
    const {auth} = useAuth();

    

    const getTables = async () => {
        seterror(false);
        try{
            setLoading(true);
            const response = await getTablesApi(auth.token);
            setLoading(false);
            setTables(response);
        }catch(error){
            setLoading(false);
            seterror(error);    
        }
    };


    return {
        loading,
        error,
        tables,
        getTables,
    };
}

