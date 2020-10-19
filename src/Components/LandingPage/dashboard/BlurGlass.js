import React ,{useEffect,useState}from 'react'
import anh from "../../../app/scss/1.jpg"
export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('scroll', handleResize);
      return () => window.removeEventListener('scroll', handleResize);
    }, []);
  
    return windowDimensions;
  }
  function getWindowDimensions() {
    const { scrollY: width, scrollY: height,  } = window;
    return {
      width,
      height
    };
  }
 const BlurGlass = () => {
    const width= useWindowDimensions()
    const [top, setTop] = useState("1000")
    useEffect(() => {
        if(width.width>300){
            setTop(60)
        }else{
            setTop(440)
        }
        if(width.width>1223){
            setTop(440)
        }
    
    }, [width])
    return (
        <div className="blurPic">
            <div className="blur">
                <div className="layer1">
              
                </div>
                <div className="layer2">
                   
                </div>
            </div>
            <div className="message">
               <div className="message__content" style={{left:top}}>
           <p className="message__content--text" >
               hi, Tiến đây !!
           </p>
         <p className="message__content--text">chúc c 20/10 vui vẻ, mọi may mắn sẽ đến nha cô gái mà t theo đuổi !!</p>
               </div>
           </div>
        </div>
    )
}
export default BlurGlass;
