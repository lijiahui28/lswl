import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './bz.css'
export default class about extends Component{
render(){
    return(
        <div>
			<div className="bz">
				<NavLink to="/about">
					<div className="bz-img"><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=33322991ede4fde3424b1dc4dc59c0daeffe02755274fee6b5bd9b4a11eb5627"/></div>
				</NavLink>
				<p>帮助</p>
			</div>
			<div className="bz-box">
				<div className="bz-span">通过礼尚往来记账的好处</div>
				<div className="bz-img2">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u900.png?token=cf7d4660c49326fff03635107793d0df3f007542e786949c7e931b3889aa8d8f"/>
				</div>
			</div>
			<div className="bz-box">
				<div className="bz-span">如何记账</div>
				<div className="bz-img2">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u900.png?token=cf7d4660c49326fff03635107793d0df3f007542e786949c7e931b3889aa8d8f"/>
				</div>
			</div>
			
			<div className="bz-box">
				<div className="bz-span">如何记事</div>
				<div className="bz-img2">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u900.png?token=cf7d4660c49326fff03635107793d0df3f007542e786949c7e931b3889aa8d8f"/>
				</div>
			</div>
			
			<div className="bz-box">
				<div className="bz-span">如何发请柬</div>
				<div className="bz-img2">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u900.png?token=cf7d4660c49326fff03635107793d0df3f007542e786949c7e931b3889aa8d8f"/>
				</div>
			</div>
			<div className="bz-box">
				<div className="bz-span">如何看盈亏</div>
				<div className="bz-img2">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u900.png?token=cf7d4660c49326fff03635107793d0df3f007542e786949c7e931b3889aa8d8f"/>
				</div>
			</div>
			<div className="bz-box">
				<div className="bz-span">如何计算婚宴预订桌数</div>
				<div className="bz-img2">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u900.png?token=cf7d4660c49326fff03635107793d0df3f007542e786949c7e931b3889aa8d8f"/>
				</div>
			</div>
		</div>
    )
}
}
