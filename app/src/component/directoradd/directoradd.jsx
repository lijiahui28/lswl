import React,{Component} from 'react'
import './directoradd.css'
import {NavLink} from 'react-router-dom'
export default class director extends Component{
    constructor(prop){
        super(prop)
        this.state = {
            text:"",
            isJoin:false,
            site:"",
            date:""
        }
        this.goTo=this.goTo.bind(this)
        this.text=this.text.bind(this)
        this.site=this.site.bind(this)
        this.date=this.date.bind(this)
    }
    goTo(){
        this.props.history.push('/director')
    }
    date(event){
        this.setState({date:event.target.value});
    }
    text(event){
        this.setState({text:event.target.value});
    }
    site(event){
        this.setState({site:event.target.value});
    }
    render(){
        return(
            <div>
                <div className="directoradd-head">
                    <img onClick={this.goTo} className="directoradd-back" src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=ff14f5b935ac8f26062b70423e3cb04b0b48431c30ba266bdf3e352e1993d7e2" alt=""/>
                    礼事
                </div>
                <div className="directoradd-type">
                    <input type="text" onChange={this.text} placeholder="请输入礼事类型"/>
                </div>
                <div className="directoradd-date">
                    日期：<input type="date" onChange={this.date}/>
                </div>
                <div className="directoradd-site">
                    <input type="text" onChange={this.site} placeholder="请输入地点"/>
                </div>
                <NavLink className="directoradd-btn" to = {
                    {
                        pathname:'/director',
                        search:"",
                        query:this.state
                    }
                } 
                >提交</NavLink>
            </div>
        )
    }
}
