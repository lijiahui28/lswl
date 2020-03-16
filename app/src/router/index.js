import React,{Component} from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import Header from '../component/header/header'
import Home from '../component/home/Home'
import Director from '../component/director/director'
import Manage from '../component/Manage/Manage '
import About from '../component/about/about'
import directoradd from '../component/directoradd/directoradd'
import manageadd from '../component/manageadd/manageadd'
import sz from '../component/sz/sz'
import fx from '../component/fx/fx'
import fk from '../component/fk/fk'
import bz from '../component/bz/bz'
import gy from '../component/gy/gy'
import Index from './index.css'
function router() { 
    return(
        <div id="box">
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/manage' component={Manage}/>
                <Route path='/director' component={Director}/>
                <Route path='/about' component={About}/>
                <Route path='/directoradd' component={directoradd}/>
                <Route path='/manageadd' component={manageadd}/>
                <Route path='/sz' component={sz}/>
                <Route path='/fx' component={fx}/>
                <Route path='/fk' component={fk}/>
                <Route path='/bz' component={bz}/>
                <Route path='/gy' component={gy}/>
                <Route component={Home}/>
            </Switch>
        </div>
    )
}

export default router