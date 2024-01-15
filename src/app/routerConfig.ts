import {Routes} from '@angular/router'
import { ProductComponent } from './components/product/product.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const appRoutes : Routes = [
    {
        path :'',
        component : ProductComponent
    },
    {
        path :'product',
        component : ProductComponent
    },
    {
        path :'product/add',
        component : AddproductComponent
    },
    {
        path :'product/edit/:id',
        component : EditproductComponent
    }

   
    
]

export default appRoutes;