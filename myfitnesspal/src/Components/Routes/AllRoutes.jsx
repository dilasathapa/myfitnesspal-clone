import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../Landing/Landing"
import Home from "../Homepage/Home"
import Profile from "../Homepage/Profile"
import Start from "../Forms/Start";
import Name from "../Forms/Name";
import Goals from "../Forms/Goals";
import Steps from "../Forms/Steps";
import { Set, Statments } from "../Forms/Steps";
import { Baseline } from "../Forms/Statement";
import { PersonaData1, PersonaData2, Login, Username } from "../Forms/PersonalData1";
import { Calorie } from "../Forms/PersonalData1";
import BlogPage from "../Blog/BlogPage";
import Exercise from "../../Pages/Exercise/Exercise";
import AddExercise from "../../Pages/AddExercise/AddExercise"
import BlogArticleList from "../Blog/BlogArticleList";
import AddFood from "../../Pages/AddFood/AddFood"
import Food from "../../Pages/Food/Food"
import Reports from "../../Pages/Reports/Reports"
import BlogArticleLiseItem from "../Blog/BlogArticleListItem";
import BlogPostPage from "../Blog/BlogPostPage";

const AllRoutes = () => {


    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/' element={<Landing />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path='/start' element={<Start />}></Route>
                <Route path='/name' element={<Name />}></Route>
                <Route path='/goals' element={<Goals />}></Route>
                <Route path='/set' element={<Set />}></Route>
                <Route path='/steps' element={<Steps />}></Route>
                <Route path='/statments' element={<Statments />}></Route>
                <Route path='/baseline' element={<Baseline />}></Route>
                <Route path='/personadata1' element={<PersonaData1 />}></Route>
                <Route path='/personadata2' element={<PersonaData2 />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/username' element={<Username />}></Route>
                <Route path='/calorie' element={<Calorie />}></Route>
                <Route path="/blogpage" element={<BlogPage />}></Route>
                <Route path="/exercise" element={<Exercise />}></Route>
                <Route path="/add_exercise" element={<AddExercise />}></Route>
                <Route path="/blogposts" element={<BlogPostPage />}></Route>
                <Route path="/add_food" element={<AddFood />}></Route>
                <Route path="/food" element={<Food />}></Route>
                <Route path="/reports" element={<Reports />}></Route>

            </Routes>
        </div>
    )
}

export default AllRoutes;
