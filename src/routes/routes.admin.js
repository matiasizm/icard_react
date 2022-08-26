import {AdminLayout} from '../layouts';
import {
    HomeAdmin,
    UsersAdmin,
    CategoriesAdmin,
    ProductAdmin,
    TablesAdmin} from '../pages/Admin';


const routesAdmin =[
    {
        path:'/admin', 
        layout: AdminLayout,
        component: HomeAdmin,
        
    },
    {
        path:'/admin/users', 
        layout: AdminLayout,
        component: UsersAdmin,
        
        
    },
    {
        path:'/admin/categories', 
        layout: AdminLayout,
        component: CategoriesAdmin,
        
        
    },
    {
        path:'/admin/products', 
        layout: AdminLayout,
        component: ProductAdmin,
        
        
    },
    {
        path:'/admin/tables',
        layout: AdminLayout,
        component: TablesAdmin,
        
        
    },

];

export default routesAdmin;