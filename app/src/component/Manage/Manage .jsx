import React,{Component} from 'react'
import './Manage.css'
function Items(props) {
    return(
        <div>
            {
                props.info.map((el,index)=>{
                    if(!props.type){
                        if(!el.isGiver){
                            return (
                                <div key={index} className="manage-item">
                                    <div className="manage-item-top">
                                        <div className="manage-item-t-l">
                                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=6054992d5e9f3730099f874848b294a2aee4424be80184921bbd0228e7152b57" alt=""/>{el.type}
                                        </div>
                                        <div className="manage-item-t-r">{el.amount}</div>
                                    </div>
                                    <div className="manage-item-bottom">
                                        <div className="manage-item-t-l">
                                            <span>收</span>{el.name}
                                        </div>
                                        <div className="manage-item-t-r2">
                                            <span>1人送礼</span>
                                            <span>{el.date}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }else{
                        if(el.isGiver){
                            return (
                                <div key={index} className="manage-item">
                                    <div className="manage-item-top">
                                        <div className="manage-item-t-l">
                                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=6054992d5e9f3730099f874848b294a2aee4424be80184921bbd0228e7152b57" alt=""/>{el.type}
                                        </div>
                                        <div className="manage-item-t-r">{el.amount}</div>
                                    </div>
                                    <div className="manage-item-bottom">
                                        <div className="manage-item-t-l">
                                            <span>收</span>{el.name}
                                        </div>
                                        <div className="manage-item-t-r2">
                                            <span>1人收礼</span>
                                            <span>{el.date}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                })
            }
        </div>
    )
}
export default class Manage extends Component{
    constructor(props){
        super(props)
        this.state = {
            manage:[
                {
                    type:"类目名称",
                    isGiver:false,
                    name:"姓名",
                    date:"2020.02.02",
                    amount:"15000"
                },
                {
                    type:"类目名称",
                    isGiver:false,
                    name:"姓名",
                    date:"2020.02.02",
                    amount:"15000"
                },
                {
                    type:"类目名称",
                    isGiver:false,
                    name:"姓名",
                    date:"2020.02.02",
                    amount:"15000"
                },
                {
                    type:"类目名称",
                    isGiver:true,
                    name:"姓名",
                    date:"2020.02.02",
                    amount:"15000"
                },
            ],
            isGiver:false
        }
    }
giverChange(s){
    this.setState({isGiver:s});
}
goTo(){
    this.props.history.push('/manageadd')
}
componentWillMount(){
    var a=localStorage.getItem("info") 
    if(a){
        this.setState({
            manage:JSON.parse(a).manage,
            isJoin:JSON.parse(a).isJoin
        })
        console.log(JSON.parse(a));
    }
    
}
componentDidMount(){
    if(this.props.location.query){
        this.state.manage.push(this.props.location.query)
        this.setState({
            manage:this.state.manage
        })
        localStorage.setItem("info", JSON.stringify(this.state))
    }
}
render(){
    return(
        <div>
            <div style={{backgroundColor:"#fff",padding:"10px 0",position:"relative"}}>
                <div className="manage-top">
                    <div className="manage-top-l" onClick={this.giverChange.bind(this, false)} style={{backgroundColor:!this.state.isGiver?"#199ed8":"",color:!this.state.isGiver?"#fff":""}}>收礼</div>
                    <div className="manage-top-r" onClick={this.giverChange.bind(this, true)} style={{backgroundColor:this.state.isGiver?"#199ed8":"",color:this.state.isGiver?"#fff":""}}>送礼</div>
                </div>
                <div className="manage-add" onClick={this.goTo.bind(this)}>
                    <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u90.svg?token=fe9fb97c4e04137da23a4c642d6e6761a2b86dc595a3e4cd1dbd530da68be456" alt=""/>
                </div>
            </div>
            
            <div className="manage-sel">
                <div className="sel-item">类别<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u228.png?token=d14c61dce98ed9b64f2c0e7311e69e0d613cdaa5cfc277ab072d0f5d42125b6f" alt=""/></div>
                <div className="sel-item">时间<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u228.png?token=d14c61dce98ed9b64f2c0e7311e69e0d613cdaa5cfc277ab072d0f5d42125b6f" alt=""/></div>
                <div className="sel-item">金额<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u228.png?token=d14c61dce98ed9b64f2c0e7311e69e0d613cdaa5cfc277ab072d0f5d42125b6f" alt=""/></div>
            </div>
            <Items info={this.state.manage} type={this.state.isGiver}></Items>
        </div>
        
    )
}
}
