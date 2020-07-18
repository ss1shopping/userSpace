import React,{useRef,useState,useEffect} from "react"
export function useOutsideClick(ref,callback,when){
  const saveCallback=useRef(callback)
  useEffect(()=>{
    saveCallback.current =callback
  })
  function handler(e){
    if(ref.current && ref.current.contains(e.target)){
      saveCallback.current()
    }
  }
  useEffect(() => {
    if(when){
      document.addEventListener("click",handler)
      return ()=>document.removeEventListener("click",handler)
    }
    
  }, [handler, when])
}