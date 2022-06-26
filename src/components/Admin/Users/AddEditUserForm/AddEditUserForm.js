import React from 'react'
import {Form,Button,Checkbox} from 'semantic-ui-react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import{useUser} from '../../../../hooks'
import './AddEditUserForm.scss'


export function AddEditUserForm(props) {
    const {onClose, onRefetch,user} = props;
    const {addUser,updateUser} = useUser();
    const formik = useFormik({
        initialValues: initialValues(user),
        validationSchema: Yup.object(user? updateSchema(): newSchema()),
        validationOnChange: false,
        onSubmit: async (formValues) => {
            try{
                if(user) {
                    console.log(user)
                    await updateUser(user.id, formValues);
                }
                else await addUser(formValues);
                

                onRefetch();
                onClose();
            }
            catch(error){
                console.log(error);
            }
        }
    }
    );
  return (
    <Form className = 'add-edit-user-form' onSubmit={formik.handleSubmit}>
        <Form.Input name = 'username' placeholder = 'Nombre de ususario' value={formik.values.username} onChange={formik.handleChange} error={formik.errors.username} />
        <Form.Input name = 'email' placeholder = 'Correo Electronico' value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email}/>
        <Form.Input name = 'first_name' placeholder = 'Nombre' value={formik.values.first_name} onChange={formik.handleChange} error={formik.errors.first_name}/>
        <Form.Input name = 'last_name' placeholder = 'Apellidos' value={formik.values.last_name} onChange={formik.handleChange} error={formik.errors.last_name}/>
        <Form.Input name = 'password' type='password' placeholder = 'Contraseña' value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password}/>
        <div className='add-edit-user-form__active'>
            <Checkbox toggle checked={formik.values.is_active} onChange={(_,data)=>formik.setFieldValue('is_active',data.checked)} /> Usuario Activo
        </div>

        <div className='add-edit-user-form__staff'>
            <Checkbox toggle checked={formik.values.is_staff} onChange={(_,data)=>formik.setFieldValue('is_staff',data.checked)} /> Usuario Administrador
        </div>

        <Button type='submit' primary fluid content={user? "Actualizar":"Crear"} />

    </Form>
  )
}

function initialValues(user) {
    return {
        username: user? user.username: '',
        email: user? user.email: '',
        first_name: user? user.first_name: '',
        last_name: user? user.last_name: '',
        password: '',
        is_active: user?.is_active ? true : false,
        is_staff: user?.is_staff ? true : false,
    }
}

function newSchema(){
    return{
        username: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        first_name: Yup.string(),
        last_name: Yup.string(),
        password: Yup.string().required(true),
        is_active: Yup.boolean().required('El estado del usuario es requerido'),
        is_staff: Yup.boolean().required('El estado del usuario es requerido'),

    }
}

function updateSchema(){
    return{
        username: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        first_name: Yup.string(),
        last_name: Yup.string(),
        password: Yup.string(),
        is_active: Yup.boolean().required('El estado del usuario es requerido'),
        is_staff: Yup.boolean().required('El estado del usuario es requerido'),

    }
}
