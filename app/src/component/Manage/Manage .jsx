import React,{Component} from 'react'
import './Manage.css'
export default class Manage extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
            <div style={{width:"200px",margin:"0 auto",marginTop:"20px",overflow:"hidden",borderRadius:"5px",border:"1px solid #199ed8"}}>
                <div style={{width:"50%",float:"left",backgroundColor:"#199ed8",textAlign:"center",color:"#fff",fontSize:"16px",height:"40px",lineHeight:"40px"}}>收礼</div>
                <div style={{width:"50%",float:"left",textAlign:"center",color:"#199ed8",fontSize:"16px",height:"40px",lineHeight:"40px"}}>送礼</div>
            </div>
        </div>
        
    )
}
}
