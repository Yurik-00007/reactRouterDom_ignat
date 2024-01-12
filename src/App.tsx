import React, {useEffect} from 'react';
import './App.css';
import {Navigate, NavLink, Outlet, Route, Routes, useNavigate, useParams} from "react-router-dom";
import {realpath} from "fs";


const Profile=()=>{
    const navigate=useNavigate()
/*
    useEffect(()=>{
        if(true)navigate('/login')
    },[])
    })
*/
    return <div>
        profile
        <button onClick={()=>{navigate(-1)}}>logout</button>
    </div>

}

function App() {

    return (
        <div className="App">
            <NavLink className={({isActive})=>isActive?'act':'def'} to={ '/' }>main</NavLink>---
            <NavLink className={'def'} to={ '/login' }>login</NavLink>---
            <NavLink to={ '/profile' }
            style={(par)=>( {color: par.isActive?"lime":'black'})}
            >profile</NavLink>---
            <NavLink to={ '/profile/8' }>profile/1</NavLink>---
            <a href={'https://reactrouter.com/en/main/hooks/use-params'}
               target={'_blank'}
               // новая вкладка
               rel={'noopener noreferrer nofollow'}>
                {/*//для безопасности*/}
                xxxx
            </a>

            <Routes>
                <Route path={ '/*' } element={ <div>404</div> }/>
                <Route path={ '/' } element={ <div>main</div> }/>
                <Route path={ '/login/*' } element={ <div>login</div> }/>
                {/*<Route path={ '/profile/:x/:y' } element={<Profile/> }/>*/}
{/*
                <Route path={ '/profile/:id' } element={<Profile/> }/>
*/}
                <Route path={ '/profile/*' } element={<Profile/> }/>

            </Routes>
        </div>
    )
}

export default App;


{/* <Route path={ '/profile/' } element={ (
                    <div>
                    profile
                    <Outlet/>
                </div>
                )}>
                    <Route path={'*'} element={<div>propfile page not found</div>}/>
                    <Route path={':id/:x'} element={<div>id</div>}/>
                    <Route path={'settings'} element={<div>settings</div>}/>
                </Route>*/}
{/*
        <Route path={'/profile/*'} element={<div>
            profile

            <Routes>
                <Route path={'/settings'} element={<div>settings</div>}/>
            </Routes>
        </div>}/>
*/ }
{/*
        <Route path={'/profile/settings'} element={<div>settings</div>}/>
*/ }
