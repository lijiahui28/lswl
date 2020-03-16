import React,{Component} from 'react'
import './director.css'
function Items(props) {
    function itemChange(i){
        console.log(props);
        console.log(i);
        props.info[i].isJoin=true;
    }
    return(
        <div>
            {
                props.info.map((el,index)=>{
                    if(!props.type){
                        if(!el.isJoin){
                            return (
                                <div key={index} className="director-item" onDoubleClick={itemChange.bind(this,index)} >
                                    <div className="director-item-top">
                                        <div className="director-item-t-l">
                                            {el.text}
                                        </div>
                                        <div className="director-item-t-r">待参加</div>
                                    </div>
                                    <div className="director-item-bottom">
                                        <div className="director-item-t-l">
                                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼事列表/u478.svg?token=06cc3e92cb67a06773867ef640f606099b702077bd9e2dfd65d26ac7264997f8" alt=""/>{el.site}
                                        </div>
                                        <div className="director-item-t-r2">
                                            <span>{el.date}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }else{
                        if(el.isJoin){
                            return (
                                <div key={index} className="director-item">
                                    <div className="director-item-top">
                                        <div className="director-item-t-l">
                                            {el.text}
                                        </div>
                                        <div className="director-item-t-r">已参加</div>
                                    </div>
                                    <div className="director-item-bottom">
                                        <div className="director-item-t-l">
                                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼事列表/u478.svg?token=06cc3e92cb67a06773867ef640f606099b702077bd9e2dfd65d26ac7264997f8" alt=""/>{el.site}
                                        </div>
                                        <div className="director-item-t-r2">
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
export default class director extends Component{
    constructor(prop){
        super(prop)
        this.state = {
            directors:[
                {
                    text:"搬家请客",
                    isJoin:false,
                    site:"地点名称",
                    date:"2020.02.02"
                },
                {
                    text:"搬家请客",
                    isJoin:false,
                    site:"地点名称",
                    date:"2020.02.02"
                },
                {
                    text:"搬家请客",
                    isJoin:false,
                    site:"地点名称",
                    date:"2020.02.02"
                },
                {
                    text:"搬家请客",
                    isJoin:true,
                    site:"地点名称",
                    date:"2020.02.02"
                },
            ],
            isJoin:false
        }
        this.joinChange=this.joinChange.bind(this)
        this.goTo=this.goTo.bind(this)
    }
    joinChange(s){
        this.setState({isJoin:s});
    }
    goTo(){
        this.props.history.push('/directoradd')
    }
    componentWillMount(){
        var a=localStorage.getItem("info") 
        if(a){
            this.setState({
                directors:JSON.parse(a).directors,
                isJoin:JSON.parse(a).isJoin
            })
            console.log(JSON.parse(a));
        }
        
    }
    componentDidMount(){
        if(this.props.location.query){
            this.state.directors.push(this.props.location.query)
            this.setState({
                directors:this.state.directors
            })
            localStorage.setItem("info", JSON.stringify(this.state))
        }
    }
    
    static getDerivedStateFromProps  (nextProps){
        console.log(nextProps);
    }
    render(){
        
        return(
            <div info={this.state.directors}>
                <div style={{backgroundColor:"#fff",padding:"10px 0",position:"relative"}}>
                    <div className="director-top">
                        <div className="director-top-l" onClick={this.joinChange.bind(this, false)} style={{backgroundColor:!this.state.isJoin?"#199ed8":"",color:!this.state.isJoin?"#fff":""}}>待参加</div>
                        <div className="director-top-r" onClick={this.joinChange.bind(this, true)} style={{backgroundColor:this.state.isJoin?"#199ed8":"",color:this.state.isJoin?"#fff":""}}>已参加</div>
                    </div>
                    <div className="director-add" onClick={this.goTo.bind(this)}>
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u90.svg?token=fe9fb97c4e04137da23a4c642d6e6761a2b86dc595a3e4cd1dbd530da68be456" alt=""/>
                    </div>
                </div>
                <div className="director-sel">
                    <div className="sel-item">类别<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u228.png?token=d14c61dce98ed9b64f2c0e7311e69e0d613cdaa5cfc277ab072d0f5d42125b6f" alt=""/></div>
                    <div className="sel-item">时间<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u228.png?token=d14c61dce98ed9b64f2c0e7311e69e0d613cdaa5cfc277ab072d0f5d42125b6f" alt=""/></div>
                </div>
                <Items info={this.state.directors} type={this.state.isJoin}></Items>
            </div>
        )
    }
}
