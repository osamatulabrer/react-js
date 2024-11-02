import Panel from "./panel";
import { useState } from "react";



function Nav(){
    // const [active,setActive] = useState(false)
    const [index,setIndex] = useState()
    let activeHandler = (indexNamber)=>{
        setIndex(indexNamber)
    }
    return(
       <>
       <Panel isIndex={index==0} index={0}  active={activeHandler} title="about us"></Panel>
       <Panel isIndex={index==1} index={1} active={activeHandler} title="about madrasha"></Panel>
       <Panel isIndex={index==2} index={2} active={activeHandler} title='about lorem'></Panel>
       
       </>
    )
}
export default Nav;