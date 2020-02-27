import React,{Component} from 'react'
import './director.css'
export default class director extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
            <div style={{backgroundColor:"#fff",padding:"10px 0"}}>
                <div className="director-top">
                    <div className="director-top-l">待参加</div>
                    <div className="director-top-r">已参加</div>
                </div>
            </div>
            <div className="director-sel">
                <div className="sel-item">类别<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u228.png?token=8f6e29af0909d6517b5f170d8ebe78e664c99274a27307872d88ce3f8688c67f" alt=""/></div>
                <div className="sel-item">时间<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u228.png?token=8f6e29af0909d6517b5f170d8ebe78e664c99274a27307872d88ce3f8688c67f" alt=""/></div>
            </div>
            <div className="director-item">
                <div className="director-item-top">
                    <div className="director-item-t-l">
                        搬家请客
                    </div>
                    <div className="director-item-t-r">待参加</div>
                </div>
                <div className="director-item-bottom">
                    <div className="director-item-t-l">
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼事列表/u478.svg?token=dd67287e4f4be0db781b30a6ac13ac422054d4a62d5bf46395b52bbc16d066ed" alt=""/>地点名称
                    </div>
                    <div className="director-item-t-r2">
                        <span>2020.02.02</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
