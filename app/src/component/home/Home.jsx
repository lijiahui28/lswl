import React,{Component} from 'react'
import './Home.css'
export default class Home extends Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div id="Home">
				<div id="home-top">
					<div id="home-top1">
						<div>
							<p>历史收礼</p>
							<p>5500.00</p>
						</div>
						<div style={{borderRadius: '50%',backgroundColor: '#bbb',}}>
							<p style={{color:'#fff'}}>历史盈亏</p>
							<p style={{color:'#fff'}}>2948.00</p>
						</div>
						<div>
							<p>历史送礼</p>
							<p>2500.00</p>
						</div>
					</div>
					<div id="home-top2">
						<div>
							<p>6月收礼</p>
							<p>5500.00</p>
						</div>
						<div style={{borderRadius: '50%',backgroundColor: 'blue',}}>
							<p style={{color:'#fff'}}>本月盈亏</p>
							<p style={{color:'#fff'}}>2948.00</p>
						</div>
						<div>
							<p>六月送礼</p>
							<p>2500.00</p>
						</div>
					</div>
				</div>
				<div>
					<div className="home-tag">
						<div className="home-tag-item">排行</div>
						<div className="home-tag-item">用户</div>
						<div className="home-tag-item">历史盈亏</div>
						<div className="home-tag-item">本月盈亏</div>
						<div className="home-tag-item">更多</div>
					</div>
					<div className="home-content">
						<div className="home-content-item">1</div>
						<div className="home-content-item">aaaaaa</div>
						<div className="home-content-item">2500.00</div>
						<div className="home-content-item">25000.00</div>
					</div>
					<div className="home-content">
						<div className="home-content-item">2</div>
						<div className="home-content-item">bbbbb</div>
						<div className="home-content-item">2500.00</div>
						<div className="home-content-item">25000.00</div>
					</div>
				</div>
			</div>
		)
	}
}
