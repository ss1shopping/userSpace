import React,{useState} from 'react'
import img1 from '../../../app/scss/item.jpeg'
import {FaRegSave} from "react-icons/fa"
import {ImRedo2} from "react-icons/im"
import { API_URL } from '../../../app/constant/api/apiConstants'
import Axios from 'axios'
import { Link } from 'react-router-dom'
export const ItemBanner = (props) => {
    const [isUpdate, setisUpdate] = useState(false)
    const [image, setimage] = useState(img1)
    const [date, setdate] = useState({positio:props.index})
    /**
     * 
     * @param {*} formData 
     */
    const uploadImage = (formData) => {
        const config = {
            header: { "content-type": "multiple/form-data" }
        }
        Axios.post(`${API_URL}/items/upload/image`, formData, config)
            .then(res => {
                setdate({...date,image_url:res.data})
            }
            )
    }

    /**
     * Save change
     */
    const handleSave=()=>{
        setisUpdate(true)
    }

    /**
     * 
     * @param {chooseFile} e 
     */
    const handleChooseFile=(e)=>{
        let objectUrl=""
        try {
             objectUrl = URL.createObjectURL(e.target.files[0]) 
        } catch (error) {
            objectUrl=null
        }
        setimage(objectUrl);
        
        var formData = new FormData()
        formData.append("file", e.target.files[0])
        uploadImage(formData)
    }
    return (
        <tr>
            <td> 
                <div className="banner__slider">
                 <img src={image} alt="banner"></img>   
                 <input type="file" onChange={(e)=>handleChooseFile(e)} ></input>
                </div>
            </td>
            <td className="th"> 
                <input type="text" className="banner__item--title" placeholder="title" onChange={(e)=>setdate({...date,title:e.target.value})}/>
            </td>
            <td className="th">
            <input type="text" className="banner__item--title" placeholder="link"onChange={(e)=>setdate({...date,url:e.target.value})}  />
            </td>
            <td> 
                <div className="banner__button">
                    <div className="banner__button--save" style={isUpdate?{background:"#b5b7ba"}:{background:"#28a745"}} onClick={()=>handleSave()}> <FaRegSave/></div>
                    <Link to ="/" className="banner__button--link"> <ImRedo2/></Link>
                </div>
            </td>

        </tr>

    )
}
