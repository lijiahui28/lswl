import React,{Component} from 'react'
import './Manage.css'
export default class Manage extends Component{
render(){
    return(
        <div>
            <div style={{backgroundColor:"#fff",padding:"10px 0"}}>
                <div className="manage-top">
                    <div className="manage-top-l">收礼</div>
                    <div className="manage-top-r">送礼</div>
                </div>
            </div>
            
            <div className="manage-sel">
                <div className="sel-item">类别<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u228.png?token=8f6e29af0909d6517b5f170d8ebe78e664c99274a27307872d88ce3f8688c67f" alt=""/></div>
                <div className="sel-item">时间<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u228.png?token=8f6e29af0909d6517b5f170d8ebe78e664c99274a27307872d88ce3f8688c67f" alt=""/></div>
                <div className="sel-item">金额<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u228.png?token=8f6e29af0909d6517b5f170d8ebe78e664c99274a27307872d88ce3f8688c67f" alt=""/></div>
            </div>
            <div className="manage-item">
                <div className="manage-item-top">
                    <div className="manage-item-t-l">
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=4e77da7d4f51db07c47f79cb5ad8fcb1979399ae51a0122ba2e1ed19ec5e09ec" alt=""/>项目类型
                    </div>
                    <div className="manage-item-t-r">15000.00</div>
                </div>
                <div className="manage-item-bottom">
                    <div className="manage-item-t-l">
                        <span>收</span>姓名
                    </div>
                    <div className="manage-item-t-r2">
                        <span>10人送礼</span>
                        <span>2020.02.02</span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
}
