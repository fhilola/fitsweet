import { Route, Routes } from "react-router-dom"
import Home from './home/Home'
import Category from './category/Category'
import AllPosts from './all-posts/AllPosts'
import BlogPost from './blog-post/BlogPost'
import AboutUs from './about-us/AboutUs'
import Register from './register/Register'
import Login from './login/Login'
import Accaunt from './accaunt/Accaunt'
import MyPosts from './my-posts/MyPosts'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/all-posts' element={<AllPosts/>}/>
        <Route path='/blog-post' element={<BlogPost/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/accaunt' element={<Accaunt/>}/>
        <Route path='/my-posts' element={<MyPosts/>}/>
      </Routes>
  )
}

export default AllRoutes