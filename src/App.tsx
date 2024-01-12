import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";


function App() {

    return (
        <div className="App">
            <NavLink to={ '/' }>main</NavLink>----
            <NavLink to={ '/login' }>login</NavLink>---
            <NavLink to={ '/profile' }>profile</NavLink>---
            <NavLink to={ '/profile/settings' }>settings</NavLink>---

            <Routes>

                <Route path={ '/*' } element={ <div>404</div> }/>
                <Route path={ '/' } element={ <div>main</div> }/>
                <Route path={ '/login/*' } element={ <div>login</div> }/>
                {/*1. Когда нужно отобразить просто садержание новой компаненты*/}
{/*
                <Route path={ '/profile/*' } element={
                    <div>
                        profile
                    </div>
                }/>
                <Route path={ '/profile/settings' } element={ <div>settings</div> }/>
*/}
                {/*2. Когда нужно отобразить вложенность первый способ*/}
{/*
                <Route path={ '/profile/*' } element={
                    <div>
                        profile
                        <Routes>
                            <Route path={ '/settings' } element={ <div>settings</div> }/>
                        </Routes>
                    </div>
                }/>
*/}
                {/*3. Когда нужно отобразить вложенность второй способ.
                Т.е. на место <Outlet/> ставится то что находиться между <Route>...</Route>*/}
{/*
                <Route path={ '/profile' } element={
                    <div>
                        profile

                            <Outlet/>
                    </div>
                }>
                    //нужно указывать путь (/profile/settings) или (settings) без ничего
                    //<Route path={ '/profile/settings' } element={ <div>settings</div> }/>
                    <Route path={ 'settings' } element={ <div>settings</div> }/>
                </Route>
*/}
{/*
                4. Когда нужно отобразить вложенность второй способ.
                Т.е. на место <Outlet/> ставится то что находиться между <Route>...</Route>
*/}

{/*
                <Route path={ '/profile' } element={
                    <div>
                        profile

                            <Outlet/>
                    </div>
                }>
                    <Route path={ '/profile/*' } element={ <div>profile page not found</div> }/>
                    <Route path={ '/profile/settings' } element={ <div>settings</div> }/>
                </Route>
*/}
                {/*5. Когда нужно отобразить вложенность второй способ.
                Т.е. на место <Outlet/> ставится то что находиться между <Route>...</Route>*/}

{/*
                <Route path={ '/profile' } element={
                    <div>
                        profile

                            <Outlet/>
                    </div>
                }>
                    <Route path={ '/profile/*' } element={ <div>profile page not found</div> }/>
                    <Route path={ '/profile:id' } element={ <div>id</div> }/>
                    <Route path={ '/profile:id/:x' } element={ <div>id and x</div> }/>
                    <Route path={ '/profile/settings' } element={ <div>settings</div> }/>
                    // альтернативная запись

                    // <Route path={ '*' } element={ <div>profile page not found</div> }/>
                    // <Route path={ ':id' } element={ <div>id</div> }/>
                    // <Route path={ ':id/:x' } element={ <div>id and x</div> }/>
                    // <Route path={ 'settings' } element={ <div>settings</div> }/>

                </Route>
*/}
                {/*6. Когда нужно отобразить вложенность второй способ.
                Т.е. на место <Outlet/> ставится то что находиться между <Route>...</Route>*/}

                <Route path={ '/profile' } element={
                    <div>
                        profile

                        <Outlet/>
                    </div>
                }>
                    {/*если убрать эту строчку то при вводе неправилбного адреса
                    (http://localhost:3000/profile/123/23) попадет сюда
                    <Route path={ '/*' } element={ <div>404</div> }/>
                    */}

                    {/*<Route path={ '/profile/*' } element={ <div>profile page not found</div> }/>*/}
                    <Route index element={ <div>check id</div> }/>
                    <Route path={ '/profile:id' } element={ <div>id</div> }/>
                    <Route path={ '/profile/settings' } element={ <div>settings</div> }/>
                </Route>



            </Routes>
        </div>
    )
}

export default App;


/*
const Profile=()=>{
    const navigate=useNavigate()
    /!*
        useEffect(()=>{
            if(true)navigate('/login')
        },[])
        })
    *!/
    return <div>
        profile
        <button onClick={()=>{navigate(-1)}}>logout</button>
    </div>

}
*/

/*
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
                {/!*!//для безопасности*!/}
                xxxx
            </a>

            <Routes>
                <Route path={ '/!*' } element={ <div>404</div> }/>
                <Route path={ '/' } element={ <div>main</div> }/>
                <Route path={ '/login/!*' } element={ <div>login</div> }/>
                {/!*<Route path={ '/profile/:x/:y' } element={<Profile/> }/>*!/}
{/!*
                <Route path={ '/profile/:id' } element={<Profile/> }/>
*!/}
                <Route path={ '/profile/!*' } element={<Profile/> }/>

            </Routes>
        </div>
    )
}
*/

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
