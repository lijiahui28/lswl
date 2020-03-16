import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './header.css'
export default class Home extends Component{
constructor(){
    super()
}
render(){
    return(
        <div id="header">
			<div id="head" style={{textAlign:"center"}}>
				礼尚往来
			</div>
			
            <div id="u1">
				<li>
						<img  style={{width:"19px",height:"19px",lineHeight:"19px"}} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u12.svg?token=22fd106c1fe860a4d46bedd93c4d36a8b089b0821fe9019c8f921c28bb1b612e" alt=""/>
				<NavLink to="/">首页</NavLink></li>
				<li>
						<img  style={{width:"19px",height:"19px",lineHeight:"19px"}} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u13.svg?token=c27ce08e85ba9d0d0cf537436ae45f2b99ab978cadaad1c63c77578c13d59f2b" alt=""/>
					<NavLink to="/director">礼账</NavLink></li>
					<li><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u19.svg?token=bb6218028dc999bb15327c91dc5c8d9afbd58c3044ffb929c47db23e592af57f" alt=""/></li>
				<li>
						<img  style={{width:"19px",height:"19px",lineHeight:"19px"}} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u14.svg?token=709967c4493b3e3cc5553f0d3d224371152522f613edd6665e0612920394cc85" alt=""/>
					<NavLink to="/manage">礼事</NavLink></li>
				<li>
						<img  style={{width:"19px",height:"19px",lineHeight:"19px"}} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u11.svg?token=b568afa3cc53567d12bb6b14d0c3696338b8ed988f651430f6efc2fd55b0f46a" alt=""/>
					<NavLink to="/about">我的</NavLink></li>
			</div>
        </div>
    )
}
}
