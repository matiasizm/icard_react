import React, {useEffect} from 'react'
import {Loader} from 'semantic-ui-react'
import {HeaderPage,TableTablesAdmin} from '../../components/Admin'
import {useTable} from '../../hooks'

export function TablesAdmin() {
    const {loading, tables, getTables} = useTable()

    useEffect(() => getTables(), [])


  return (
    <>
    <HeaderPage title="Mesas" btnTitle="Crear Nueva Mesa"/>
    {loading ? (
        <Loader active inline="centered">
            Cargando...
        </Loader> ):(
            <TableTablesAdmin tables = {tables} />
            )}
    </>
  )
}
