import Product from "../components/Product";
import Category from "../components/Category";
import Tag from "../components/Tag";
import User from "../components/User";


const routes = [
    { path: '/products', component: Product, name: 'products' },
    { path: '/categories', component: Category, name: 'categories' },
    { path: '/tags', component: Tag, name: 'tags' },
    { path: '/users', component: User, name: 'users' },
    ]


export default routes