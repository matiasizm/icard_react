import {useState} from 'react';
import { getProductsApi, addProductApi, updateProductApi,deleteProductApi} from '../api/products';
import { useAuth } from './';

export function useProduct(){
    const [loading, setLoading] = useState(true);
    const [error,seterror] = useState(false);
    const [products, setProducts] = useState(null);
    const {auth} = useAuth();

    const getProducts = async () => {
        seterror(false);
        try{
            setLoading(true);
            const response = await getProductsApi();
            setLoading(false);
            setProducts(response);
        }catch(error){
            setLoading(false);
            seterror(error);    
        }
    };

    const addProduct = async (data) => {
        try{
            setLoading(true);
            await addProductApi(data,auth.token);
            setLoading(false);
            


        }catch(error){
            setLoading(false);
            seterror(error);   
        }
    }

    const updateProduct = async (id,data) => {
        try{
            setLoading(true);
            await updateProductApi(id,data,auth.token);
            setLoading(false);
            


        }catch(error){
            setLoading(false);
            seterror(error);   
        }
    }

    const deleteProduct = async (id) => {
        try{
            setLoading(true);
            await deleteProductApi(id,auth.token);
            setLoading(false);
        }catch(error){
            setLoading(false);
            seterror(error);   
        }
    }


    return {
        loading,
        error,
        products,
        getProducts,
        addProduct,
        updateProduct,
        deleteProduct,
    };
}