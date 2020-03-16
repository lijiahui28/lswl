import React,{Component} from 'react'
import './manageadd.css'
import {NavLink} from 'react-router-dom'
export default class manageadd extends Component{
    constructor(prop){
        super(prop)
        this.state = {
            info:{
                type:"",
                isGiver:false,
                name:"",
                date:"",
                amount:""
            },
            isGiver:false
        }
        this.goTo=this.goTo.bind(this)
        this.amount=this.amount.bind(this)
        this.name=this.name.bind(this)
        this.date=this.date.bind(this)
        this.type=this.type.bind(this)
    }
    goTo(){
        this.props.history.push('/manage')
    }
    date(event){
        this.state.info.date=event.target.value;
        this.setState({
            info:this.state.info
        });
    }
    amount(event){
        this.state.info.amount=event.target.value;
        this.setState({
            info:this.state.info
        });
    }
    name(event){
        this.state.info.name=event.target.value;
        this.setState({
            info:this.state.info
        });
    }
    type(event){
        this.state.info.type=event.target.value;
        this.setState({
            info:this.state.info
        });
    }
    giverChange(s){
        this.setState({isGiver:s});
        this.state.info.isGiver=s;
        this.setState({
            info:this.state.info
        })
    }
    render(){
        return(
            <div>
                <div className="manageadd-head">
                    <img onClick={this.goTo} className="manageadd-back" src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=ff14f5b935ac8f26062b70423e3cb04b0b48431c30ba266bdf3e352e1993d7e2" alt=""/>
                    <div className="manage-top">
                        <div className="manage-top-l" onClick={this.giverChange.bind(this, false)} style={{backgroundColor:!this.state.isGiver?"#199ed8":"",color:!this.state.isGiver?"#fff":""}}>收礼</div>
                        <div className="manage-top-r" onClick={this.giverChange.bind(this, true)} style={{backgroundColor:this.state.isGiver?"#199ed8":"",color:this.state.isGiver?"#fff":""}}>送礼</div>
                    </div>
                </div>
                <div className="manageadd-type">
                    <input type="text" onChange={this.type} placeholder="请输入送礼类型"/>
                </div>
                <div className="manageadd-type">
                    <input type="text" onChange={this.amount} placeholder="请输入数额"/>
                </div>
                <div className="manageadd-date">
                    日期：<input type="date" onChange={this.date}/>
                </div>
                <div className="manageadd-site">
                    <input type="text" onChange={this.name} placeholder="请输入名字"/>
                </div>
                <NavLink className="manageadd-btn" to = {
                    {
                        pathname:'/manage',
                        search:"",
                        query:this.state.info
                    }
                } 
                >提交</NavLink>
            </div>
        )
    }
}
