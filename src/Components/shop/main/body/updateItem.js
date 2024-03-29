import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


import { DefaultLayout2 } from "./DefaultLayout2"
import { Model } from './addItem/model'
import { MoreOption } from './addItem/moreOption'
import { getStorage, setStorage } from '../../../../_metronic'
import { itemActions } from '../../../../app/store/ducks/itemReducer'
import { categoryActions } from '../../../../app/store/ducks/categoryReducer'

export const UpdateItem = (props) => {

  const dispatch = useDispatch()
  let [status, setStatus] = useState(false)
  let [addGroup, setAddGroup] = useState(false)
  const [numberGroup1, setnumberGroup1] = useState(0)
  const [numberGroup2, setnumberGroup2] = useState(0)
  const [productName, setproductName] = useState("")
  const [desc, setdesc] = useState("")
  let [attributes, setattribute] = useState([])
  const [quantity, setquantity] = useState(0)
  const [discount, setdiscount] = useState()
  const [newModel, setnewModel] = useState([])
  const [listImage, setlistImage] = useState([])
  const [tier_varaitionLength, settier_varaitionLength] = useState()
  const [tier_varaitionLength1, settier_varaitionLength1] = useState()
  const [tier_varaitionStatus, settier_varaitionStatus] = useState(true)
  const [tier_varaitionStatus1, settier_varaitionStatus1] = useState(true)
  const price = useSelector(state => state.itemReducer.price)
  const chooseCategoryToAdd = useSelector(state => state.categoryReducer.chooseCategoryToAdd)
  const tier_variations = useSelector(state => state.itemReducer.tier_variations)
  const model = useSelector(state => state.itemReducer.model)
  const model1 = useSelector(state => state.itemReducer.model1)
  const urlImage = useSelector(state => state.itemReducer.urlImage)
  const quantity1 = useSelector(state => state.itemReducer.quantity)
  const detailItem = useSelector(state => state.itemReducer.detailItem)
  const uploadImage = (formData, index) => {
    const config = {
      header: { "content-type": "multiple/form-data" }
    }

    Axios.post("http://localhost:4000/item/uploadImage", formData, config)
      .then(res => {
        urlImage[index] = res.data.path
        console.log(urlImage);
        dispatch(itemActions.loadImage(urlImage))

      }
      )

  }
  const handleType = () => {
    setStatus(!status)
    setnumberGroup1(1)
  }

  const handleGroupAdd = () => {
    setAddGroup(!addGroup)
    setnumberGroup2(1)
  }
  const handleAddAtrributes = (index, name, value) => {
    let newobject = {
      name, value
    }
    attributes[index] = newobject

  }
  const handle_SetTier_variation = (index, name) => {
    let newobj = {
      name,
      option: []

    }
    if (name.length > 0) {
      index === 1 ? settier_varaitionStatus1(false) : settier_varaitionStatus(false)
    }
    tier_variations[index] = newobj
    console.log(index, name);

    index === 1 ? settier_varaitionLength1(name.length) : settier_varaitionLength(name.length)
    dispatch(itemActions.setTier_variations(tier_variations))

  }
  const handleSetOptionTierVationation = (index, indexOption, option) => {

    tier_variations[index].option[indexOption] = option
  }
  const handleAddImgage = (index) => {

  }
  const handleAddMoreOptionGroup1 = () => {
    setnumberGroup1(numberGroup1 + 1)

  }
  const handleAddMoreOptionGroup2 = () => {
    setnumberGroup2(numberGroup2 + 1)

  }
  const handleUploadImage = (e, index) => {

    let objectUrl = URL.createObjectURL(e.target.files[0])
    let newArr = [...listImage]; // copying the old datas array
    newArr[index] = objectUrl; // replace e.target.value with whatever you want to change it to
    setlistImage(listImage);
    console.log(listImage);
    var formData = new FormData()
    formData.append("file", e.target.files[0])
    uploadImage(formData, index)

  }
  const handleUploadImage1 = (e, index) => {

    let objectUrl = URL.createObjectURL(e.target.files[0])
    let newArr = [...listImage]; // copying the old datas array
    newArr[index] = objectUrl; // replace e.target.value with whatever you want to change it to

    setlistImage(newArr);
    console.log(listImage);
    var formData = new FormData()
    formData.append("file", e.target.files[0])
    uploadImage(formData, index)
  }
  const handleUploadImage2 = (e, index) => {
    console.log("handle updaload", index);
    let objectUrl = URL.createObjectURL(e.target.files[0])
    let newArr = [...listImage]; // copying the old datas array
    newArr[index] = objectUrl; // replace e.target.value with whatever you want to change it to

    setlistImage(newArr);
    console.log(listImage);
    var formData = new FormData()
    formData.append("file", e.target.files[0])
    uploadImage(formData, index)

  }
  const handleUploadImage3 = (e, index) => {

    let objectUrl = URL.createObjectURL(e.target.files[0])
    let newArr = [...listImage]; // copying the old datas array
    newArr[index] = objectUrl; // replace e.target.value with whatever you want to change it to

    setlistImage(newArr);
    console.log(listImage);
    var formData = new FormData()
    formData.append("file", e.target.files[0])
    uploadImage(formData, index)

  }
  const handleUploadImage4 = (e, index) => {

    let objectUrl = URL.createObjectURL(e.target.files[0])
    let newArr = [...listImage]; // copying the old datas array
    newArr[index] = objectUrl; // replace e.target.value with whatever you want to change it to

    setlistImage(newArr);
    console.log(listImage);
    var formData = new FormData()
    formData.append("file", e.target.files[0])
    uploadImage(formData, index)

  }
  const handleUploadImage5 = (e, index) => {

    let objectUrl = URL.createObjectURL(e.target.files[0])
    let newArr = [...listImage]; // copying the old datas array
    newArr[index] = objectUrl; // replace e.target.value with whatever you want to change it to

    setlistImage(newArr);
    console.log(listImage);
    var formData = new FormData()
    formData.append("file", e.target.files[0])
    uploadImage(formData, index)

  }
  const handleUploadImage6 = (e, index) => {

    let objectUrl = URL.createObjectURL(e.target.files[0])
    let newArr = [...listImage]; // copying the old datas array
    newArr[index] = objectUrl; // replace e.target.value with whatever you want to change it to

    setlistImage(newArr);
    console.log(listImage);
    var formData = new FormData()
    formData.append("file", e.target.files[0])
    uploadImage(formData, index)

  }
  const handleUploadImage7 = (e, index) => {

    let objectUrl = URL.createObjectURL(e.target.files[0])
    let newArr = [...listImage]; // copying the old datas array
    newArr[index] = objectUrl; // replace e.target.value with whatever you want to change it to

    setlistImage(newArr);
    console.log(listImage);
    var formData = new FormData()
    formData.append("file", e.target.files[0])
    uploadImage(formData, index)

  }
  const handleSubmit = () => {
    let category = []
    chooseCategoryToAdd.map((v, i) => {
      category.push(v._id)
    })
    let newListmodel = []
    model.map((v, i) => {
	if(model1.length>0){

		model1.map((value, i) => {
			let modelUpdate = {
				name: `${v.name},${value.name}`, price: price[`${v.name},${value.name}`], quantity: quantity1[`${v.name},${value.name}`]
			      }
			      newListmodel.push(modelUpdate)
		})
	}else{
		newListmodel.push({ name: `${v.name}`, price: price[`${v.name}`], quantity: quantity1[`${v.name}`] })
	}
    })
    newListmodel.map((v, i) => {
      v._id = detailItem.models[i]._id
      dispatch(itemActions.updateModel(v))
    })
    let minPrice = price[Object.keys(price)[0]]

    let maxprice = 0
    let null1 = true
    Object.keys(price).map((v, i) => {

      price[v] < minPrice ? minPrice = price[v] : null1 = true
      price[v] > maxprice ? maxprice = price[v] : null1 = true

    })

    urlImage && tier_variations.length > 0 ? tier_variations[0].images = urlImage : null1 = true
    tier_variations.map((v, i) => {

      dispatch(itemActions.updateTier_variation(v))
    })

    dispatch(itemActions.updateItem(detailItem._id, productName, minPrice, maxprice, desc, attributes, category, discount))
    // props.history.push("/banhang/item")
  }

  useEffect(() => {

    dispatch(itemActions.getItem(props.match.params.id))
  }, [])
  useEffect(() => {
    detailItem && detailItem.name && setproductName(detailItem.name)
    detailItem && detailItem.desc && setdesc(detailItem.desc)
    detailItem && detailItem.attributes && setattribute(detailItem.attributes)
    let listnewimage = []

    detailItem && detailItem.tier_variations && detailItem.tier_variations[0] && setlistImage(detailItem.tier_variations[0].images)
    detailItem && detailItem.tier_variations && detailItem.tier_variations[0] && dispatch(itemActions.loadImage(detailItem.tier_variations[0].images))


    detailItem && detailItem.name && setproductName(detailItem.name)
    detailItem && detailItem.discount && setdiscount(detailItem.discount)
    detailItem && detailItem.desc && setdesc(detailItem.desc)
    detailItem && detailItem.category && dispatch(categoryActions.chooseCategoryToAdd(detailItem.category))
    detailItem && detailItem.tier_variations && detailItem.tier_variations[0].option && setnumberGroup1(detailItem.tier_variations[0].option.length)
    detailItem && detailItem.tier_variations && dispatch(itemActions.setTier_variations(detailItem.tier_variations))
    let newmodel = []
    let newmodel1 = []

    detailItem && detailItem.tier_variations && detailItem.tier_variations[0] && detailItem.tier_variations[0].option.map((v, i) => {
      let newobject = {
        name: v

      }
      newmodel.push(newobject)
    })
    detailItem && detailItem.tier_variations && detailItem.tier_variations[1] && detailItem.tier_variations[1].option.map((v, i) => {
      let newobject = {
        name: v
      }
      newmodel1.push(newobject)
    })
    detailItem && detailItem.tier_variations && detailItem.tier_variations[0] && dispatch(itemActions.setModel(newmodel))
    detailItem && detailItem.tier_variations && detailItem.tier_variations[1] && dispatch(itemActions.setModel1(newmodel1))
    setStatus(true)
    detailItem && detailItem.tier_variations && detailItem.tier_variations[1] && detailItem.tier_variations[1].option && setnumberGroup2(detailItem.tier_variations[1].option.length)
    setAddGroup(true)
    let newListprice = {}
    let newListquantity = {}
    model.map((v, i) => {
      model1.map((value, index) => {
        newListprice[`${v.name},${value.name}`] = 0
        newListquantity[`${v.name},${value.name}`] = 0
      })
    })
    detailItem && detailItem.models && detailItem.models.map((v, i) => {
      newListprice[v.name] = v.price
      newListquantity[v.name] = v.quantity
    })
    dispatch(itemActions.setprice(newListprice))
    dispatch(itemActions.setQuantity(newListquantity))
  }, [detailItem])
  useEffect(() => {

  }, [urlImage])
  return (
    <DefaultLayout2>
      <div className="element">
        <div className="product-new">
          <div className="product-edit">
            <div className="product-edit__container">
              <div className="product-edit__main">
                <section className="product-edit__section">
                  <h2>Product Information</h2>
                  <div className="product-basic-info">
                    <div className="form-container">
                      <div className="grid-edit-row">
                        <div className="edit-label">
                          <div className="mandatory">
                            <span className="mandatory__icon">*</span>
                          </div>
                          <span>Product name</span>
                        </div>
                        <div className="edit-input">
                          <div className="product-edit-content">
                            <div className="product-input-wrapper">
                              <div className="product-input">
                                <div className="product-input__inner">
                                  <input type="text"
                                    placeholder="Input here"
                                    size="large" resize="vertical"
                                    rows="2"
                                    minrows="2"
                                    minLength="10"
                                    restrictiontype="input"
                                    max="Infinity" min="-Infinity"
                                    isround="true"
                                    unicodenormalized="true"
                                    className="product-input__input"
                                    defaultValue={productName}
                                    onChange={(e) => setproductName(e.target.value)}
                                  />
                                  <div className="product-input__sulfix">
                                    <span className="product-input__sulfix-split"></span>
                                    {productName.length}/120
                                                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid-edit-row-description">
                        <div className="edit-label">
                          <div className="mandatory">
                            <span className="mandatory__icon">*</span>
                          </div>
                          <span>Product description</span>
                        </div>
                        <div className="edit-input">
                          <div className="product-edit-content">
                            <div className="textarea-description" autosize="" maxlength="3000" minLength="100" maxrows="26" minrows="9" unicode-normalized="">
                              <div className="textarea-description__edit">
                                <div className="texarea-description__input">
                                  <textarea
                                    type="textarea"
                                    placeholder=""
                                    resize="none"
                                    rows="2"
                                    minrows="9"
                                    maxrows="26"
                                    autosize="true"
                                    minLength="100"
                                    restrictiontype="input"
                                    maxLength="Infinity"
                                    min="-Infinity"
                                    unicodenormalized="true"
                                    className="textarea-description__inner"
                                    defaultValue={desc}
                                    onChange={(e) => setdesc(e.target.value)}
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="textarea-label">
                            <span className="textarea-label__pre">0</span>
                            {desc.length}/3000
                                                        </div>
                        </div>
                      </div>
                      <div className="grid-edit-row">
                        <div className="edit-label">
                          <div className="mandatory">
                            <span className="mandatory__icon">*</span>
                          </div>
                          <span>Category</span>
                        </div>
                        <div className="edit-input">
                          <div className="category-input">
                            <div className="category-name">
                              {chooseCategoryToAdd && chooseCategoryToAdd.map((v, i) => {
                                return (
                                  <span className="category-name__wrapper" key={i}>
                                    <span className="category-name__item">{v.name}</span>
                                    <span className="spacer-point">{">"}</span>
                                  </span>

                                )
                              })}

                            </div>
                            <Link to={`/banhang/choose-category/${props.match.params.id}`} className="edit-category-btn" onClick={() => setStorage("urlChooseCategory", props.match.path)}>
                              <i className="btn-icon">
                                <svg data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M988.1 316.06a127.07 127.07 0 0 0-37.5-90.5L798.4 73.36c-49.9-49.9-131.1-49.9-181.1 0l-91.8 91.8-.3.3-.3.3-470.2 470.4a63.47 63.47 0 0 0-18.8 45.2v242.7a64.06 64.06 0 0 0 64 64h242.8a63.47 63.47 0 0 0 45.2-18.8l470.6-470.6 92.1-92.1a127.07 127.07 0 0 0 37.5-90.5zm-842.9 320l402.7-402.7 242.8 242.7-402.8 402.8zm-45.3 288v-242.7l242.7 242.7zm805.5-562.7l-69.5 69.4-242.7-242.7 69.5-69.5a64.22 64.22 0 0 1 90.6 0l152.2 152.2a64.37 64.37 0 0 1-.1 90.6z" data-name="Layer 1"></path></svg>
                              </i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="grid-edit-row">
                        <div className="edit-label" >
                          <div className="mandatory">
                            <span className="mandatory__icon">*</span>
                          </div>
                          <span>Brand</span>
                        </div>
                        <div className="edit-input">
                          <div className="product-edit-content">
                            <div className="product-input-wrapper">
                              <div className="product-input">
                                <div className="product-input__inner">
                                  <input
                                    type="text"
                                    placeholder="Input here"
                                    size="large"
                                    resize="vertical"
                                    rows="2"
                                    minrows="2"
                                    minLength="10"
                                    restrictiontype="input"
                                    max="Infinity"
                                    min="-Infinity"
                                    isround="true"
                                    unicodenormalized="true"
                                    className="product-input__input"
                                    defaultValue={attributes && attributes[0] && attributes[0].value}
                                    onChange={(e) => handleAddAtrributes(0, "Brand", e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid-edit-row">
                        <div className="edit-label">
                          <div className="mandatory">
                            <span className="mandatory__icon">*</span>
                          </div>
                          <span>Material</span>
                        </div>
                        <div className="edit-input">
                          <div className="product-edit-content">
                            <div className="product-input-wrapper">
                              <div className="product-input">
                                <div className="product-input__inner">
                                  <input type="text"
                                    placeholder="Input here"
                                    size="large"
                                    resize="vertical"
                                    rows="2"
                                    minrows="2"
                                    minLength="10"
                                    restrictiontype="input"
                                    max="Infinity"
                                    min="-Infinity"
                                    isround="true"
                                    unicodenormalized="true"
                                    className="product-input__input"
                                    defaultValue={attributes && attributes[1] && attributes[1].value}
                                    onChange={(e) => handleAddAtrributes(1, "Material", e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid-edit-row">
                        <div className="edit-label">
                          <div className="mandatory">
                            <span className="mandatory__icon">*</span>
                          </div>
                          <span>Origin</span>
                        </div>
                        <div className="edit-input">
                          <div className="product-edit-content">
                            <div className="product-input-wrapper">
                              <div className="product-input">
                                <div className="product-input__inner">
                                  <input
                                    type="text"
                                    placeholder="Input here"
                                    size="large"
                                    resize="vertical"
                                    rows="2"
                                    minrows="2"
                                    minLength="10"
                                    restrictiontype="input"
                                    max="Infinity"
                                    min="-Infinity"
                                    isround="true"
                                    unicodenormalized="true"
                                    className="product-input__input"
                                    defaultValue={attributes && attributes[2] && attributes[2].value}
                                    onChange={(e) => handleAddAtrributes(2, "Origin", e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="product-edit__section">
                  <h2>Selling Information</h2>
                  <div className="product-sale-info">
                    <div className="grid-edit-row">
                      <div className="edit-label">
                        <div className="mandatory">
                          <span className="mandatory__icon">*</span>
                        </div>
                        <span>Discount</span>
                      </div>
                      <div className="edit-input">
                        <div className="product-edit-content">
                          <div className="product-input-wrapper">
                            <div className="product-input">
                              <div className="product-input__inner">
                                <div className="product-input__prefix">
                                  %
                                                                    <span className="product-input__prefix-split"></span>
                                </div>
                                <input
                                  type="text"
                                  placeholder="Input here"
                                  size="large"
                                  resize="vertical"
                                  rows="2"
                                  minrows="2"
                                  minLength="10"
                                  restrictiontype="input"
                                  max="Infinity"
                                  min="-Infinity"
                                  isround="true"
                                  unicodenormalized="true"
                                  className="product-input__input"
                                  defaultValue={discount && discount}
                                  onChange={(e) => setdiscount(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-edit-row">
                      <div className="edit-label">
                        <div className="mandatory">
                          <span className="mandatory__icon">*</span>
                        </div>
                        <span>Quantity</span>
                      </div>
                      <div className="edit-input">
                        <div className="product-edit-content">
                          <div className="product-input-wrapper">
                            <div className="product-input">
                              <div className="product-input__inner">
                                <input
                                  type="text"
                                  placeholder="Input here"
                                  size="large"
                                  resize="vertical"
                                  rows="2" minrows="2"
                                  minLength="10"
                                  restrictiontype="input"
                                  max="Infinity"
                                  min="-Infinity" isround="true"
                                  unicodenormalized="true"
                                  className="product-input__input"
                                  onChange={(e) => setquantity(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-edit-row" style={status ? { display: "none" } : { display: "flex" }}>
                      <div className="edit-label">
                        <span>Product classification</span>
                      </div>
                      <div className="edit-type">
                        <button type="button" className="type-btn" onClick={() => handleType()}>
                          <span>
                            <i className="type-btn__icon">
                              <svg data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                <g data-name="Layer 1">
                                  <path d="M512 1024A512.2 512.2 0 0 1 312.7 40.2a512.12 512.12 0 0 1 398.6 943.5A507.07 507.07 0 0 1 512 1024zm0-960a447.88 447.88 0 0 0-316.8 764.8A448 448 0 1 0 686.4 99.2 444.4 444.4 0 0 0 512 64z"></path>
                                  <path d="M768 480H544V256a32 32 0 0 0-64 0v224H256a32 32 0 0 0 0 64h224v224a32 32 0 0 0 64 0V544h224a32 32 0 0 0 0-64z"></path>
                                </g>
                              </svg>
                            </i>
                                                        Add classification
                                                    </span>
                        </button>
                      </div>
                    </div>
                    <div className="container" style={status ? { display: "block" } : { display: "none" }}>
                      <div className="grid-edit-row">
                        <div className="edit-label">
                          <span>Group 1</span>
                        </div>
                        <div className="variation-edit-wrapper">
                          <div className="options-panel">
                            <span className="options-close" onClick={() => handleType()}>
                              <i className="btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                  <path d="M28 6.1L25.9 4 16 13.9 6.1 4 4 6.1l9.9 9.9L4 25.9 6.1 28l9.9-9.9 9.9 9.9 2.1-2.1-9.9-9.9L28 6.1z"></path>
                                </svg>
                              </i>
                            </span>
                            <div className="group-name">
                              <div className="edit-label">
                                <span>Group Name</span>
                              </div>
                              <div className="edit-text">
                                <div className="variation-form" size="large" placeholder="Input Group name, such as: Color, Size, etc.">
                                  <div className="variation-form__content">
                                    <div className="product-input">
                                      <div className="product-input__inner">
                                        <input type="text"
                                          placeholder="Input Group name, such as: Color, Size, etc."
                                          resize="vertical" rows="2"
                                          minrows="2" minlength="10"
                                          restrictiontype="input"
                                          // max="Infinity"
                                          // min="-Infinity"
                                          isround="true"
                                          unicodenormalized="true"
                                          class="product-input__input"
                                          defaultValue={tier_variations && tier_variations[0] && tier_variations[0].name}
                                          onChange={(e) => handle_SetTier_variation(0, e.target.value, [])}
                                        />
                                        <div className="product-input__sulfix">
                                          <span className="product-input__sulfix-split"></span>
                                          {tier_varaitionLength ? tier_varaitionLength : 0}/14
                                                                                </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {[...Array(numberGroup1)].map((_, i) => <MoreOption key={i} count={i} index={0} group={"group1"} tier_variations={tier_variations && tier_variations[0]} tier_varaitionStatus={tier_varaitionStatus} numberOption={numberGroup1} />)}

                            <div className="btn-type-container">
                              <div className="edit-label"></div>
                              <div class="edit-type-add">
                                <button type="button" className="type-btn" onClick={() => handleAddMoreOptionGroup1()}>
                                  <span>
                                    <i className="type-btn__icon">
                                      <svg data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                        <g data-name="Layer 1">
                                          <path d="M512 1024A512.2 512.2 0 0 1 312.7 40.2a512.12 512.12 0 0 1 398.6 943.5A507.07 507.07 0 0 1 512 1024zm0-960a447.88 447.88 0 0 0-316.8 764.8A448 448 0 1 0 686.4 99.2 444.4 444.4 0 0 0 512 64z"></path>
                                          <path d="M768 480H544V256a32 32 0 0 0-64 0v224H256a32 32 0 0 0 0 64h224v224a32 32 0 0 0 64 0V544h224a32 32 0 0 0 0-64z"></path>
                                        </g>
                                      </svg>
                                    </i>
                                                                        Added ({numberGroup1}/20)
                                                                    </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid-edit-row">
                        <div className="edit-label">
                          <span>Group 2</span>
                        </div>
                        <div className="edit-type" style={addGroup ? { display: "none" } : { display: "block" }}>
                          <button type="button" className="type-btn" onClick={() => handleGroupAdd()}>
                            <span>
                              <i className="type-btn__icon">
                                <svg data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                  <g data-name="Layer 1">
                                    <path d="M512 1024A512.2 512.2 0 0 1 312.7 40.2a512.12 512.12 0 0 1 398.6 943.5A507.07 507.07 0 0 1 512 1024zm0-960a447.88 447.88 0 0 0-316.8 764.8A448 448 0 1 0 686.4 99.2 444.4 444.4 0 0 0 512 64z"></path>
                                    <path d="M768 480H544V256a32 32 0 0 0-64 0v224H256a32 32 0 0 0 0 64h224v224a32 32 0 0 0 64 0V544h224a32 32 0 0 0 0-64z"></path>
                                  </g>
                                </svg>
                              </i>
                                                            Add
                                                        </span>
                          </button>
                        </div>
                        <div className="variation-edit-wrapper" style={addGroup ? { display: "block" } : { display: "none" }}>
                          <div className="options-panel">
                            <span className="options-close" onClick={() => handleGroupAdd()}>
                              <i className="btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                  <path d="M28 6.1L25.9 4 16 13.9 6.1 4 4 6.1l9.9 9.9L4 25.9 6.1 28l9.9-9.9 9.9 9.9 2.1-2.1-9.9-9.9L28 6.1z"></path>
                                </svg>
                              </i>
                            </span>
                            <div className="group-name">
                              <div className="edit-label">
                                <span>Group Name</span>
                              </div>
                              <div className="edit-text">
                                <div className="variation-form" size="large" placeholder="Input Group name, such as: Color, Size, etc.">
                                  <div className="variation-form__content">
                                    <div className="product-input">
                                      <div className="product-input__inner">
                                        <input type="text"
                                          placeholder="Input Group name, such as: Color, Size, etc."
                                          resize="vertical" rows="2" minrows="2" minlength="10"
                                          restrictiontype="input" max="Infinity" min="-Infinity" isround="true" unicodenormalized="true"
                                          class="product-input__input"
                                          defaultValue={tier_variations && tier_variations[0] && tier_variations[0].name}
                                          onChange={(e) => handle_SetTier_variation(1, e.target.value, [])}
                                        />
                                        <div className="product-input__sulfix">
                                          <span className="product-input__sulfix-split"></span>
                                                                                    0/14
                                                                                </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {[...Array(numberGroup2)].map((_, i) => <MoreOption key={i} count={i} index={1} tier_variations={tier_variations && tier_variations[1]} tier_varaitionStatus1={tier_varaitionStatus1} numberOption={numberGroup2} />)}
                            <div className="btn-type-container">
                              <div className="edit-label"></div>
                              <div class="edit-type-add">
                                <button type="button" className="type-btn" onClick={() => handleAddMoreOptionGroup2()}>
                                  <span>
                                    <i className="type-btn__icon">
                                      <svg data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                        <g data-name="Layer 1">
                                          <path d="M512 1024A512.2 512.2 0 0 1 312.7 40.2a512.12 512.12 0 0 1 398.6 943.5A507.07 507.07 0 0 1 512 1024zm0-960a447.88 447.88 0 0 0-316.8 764.8A448 448 0 1 0 686.4 99.2 444.4 444.4 0 0 0 512 64z"></path>
                                          <path d="M768 480H544V256a32 32 0 0 0-64 0v224H256a32 32 0 0 0 0 64h224v224a32 32 0 0 0 64 0V544h224a32 32 0 0 0 0-64z"></path>
                                        </g>
                                      </svg>
                                    </i>
                                                                        Added ({numberGroup2}/20)
                                                                    </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="info-panel">
                        <div className="grid-edit-row">
                          <div className="edit-label">
                            <span>Quick set</span>
                          </div>
                          <div className="edit-main-batch">
                            <form className="edit-main-batch__form">
                              <div className="batch-price">
                                <div className="edit-maint-batch_control">
                                  <div className="edit-main-batch__content">
                                    <div className="product-input">
                                      <div className="product-input__inner">
                                        <div className="product-input__prefix">
                                          $
                                                                                    <span className="product-input__prefix-split"></span>
                                        </div>
                                        <input type="text" placeholder="Price" size="large" resize="vertical" rows="2" minrows="2" restrictiontype="value" max="Infinity" min="-Infinity" class="product-input__input" />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                              <div className="batch-storage">
                                <div className="edit-main-batch__control">
                                  <div className="edit-mait-batch__content">
                                    <div className="product-input">
                                      <div className="product-input__inner">
                                        <input type="text" placeholder="Storage" size="large" resize="vertical" rows="2" minrows="2" restrictiontype="value" max="Infinity" min="-Infinity" class="product-input__input" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="batch-sku">
                                <div className="edit-main-batch__control">
                                  <div className="edit-mait-batch__content">
                                    <div className="product-input">
                                      <div className="product-input__inner">
                                        <input type="text" placeholder="SKU" size="large" resize="vertical" rows="2" minrows="2" restrictiontype="value" max="Infinity" min="-Infinity" class="product-input__input" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                            <button className="apply-all-btn" type="button">
                              <span>Apply for all type</span>
                            </button>
                          </div>
                        </div>
                        <div className="grid-edit-row">
                          <div className="edit-label">
                            <span>Manual set</span>
                          </div>
                          <div className="edit-input">
                            <div className="variation-model-panel">
                              <div className="row">
                                <div className="table-cell-header"><span>Name</span></div>
                                {model1.length > 0 ?

                                  <div className="table-cell-header"><span>{tier_variations[1].name}</span></div> : ""
                                }
                                <div className="table-cell-header"><span>Price</span></div>
                                <div className="table-cell-header"><span>Quantity</span></div>
                                <div className="table-cell-header"><span>Storage</span></div>
                                <div className="table-cell-header"><span>Save</span></div>
                              </div>
                              {
                                model && model.map((v, i) => {
                                  return (
                                    <Model value={v} key={i} index={i} quantity={quantity}></Model>
                                  )
                                })
                              }


                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </section>
                <section className="product-edit__section">
                  <h2>Image Management</h2>
                  <div>
                    <div className="image-offset">
                      <div className="edit-label">
                        <span>Product image</span>
                      </div>
                      <div className="image-manager">
                        <div className="image-manager__container">
                          <div className="image-manager__item">
                            <div className="image-manager__content">
                              <label htmlFor="image-upload" className="image-manager__label">
                                <div className="image-manager__upload">
                                  <div className="file-upload">
                                    <div className="file-upload__wrapper">
                                      <input type="file" name="file" number={0} className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage(e, 0)} />
                                      <img src={"http://localhost:4000/" + urlImage[0]} style={listImage[0] ? { display: "block" } : { display: "none" }} />
                                      <div className="file-upload__content">
                                        <i className="upload-icon">
                                          <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                            <g fill-rule="nonzero">
                                              <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                              <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                            </g>
                                          </svg>
                                        </i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                              <div className="explain-text">
                                <div className="mandatory">
                                  <div className="mandatory__icon">*</div>
                                </div>
                                                                Cover Image
                                                            </div>
                            </div>
                          </div>
                          <div className="image-manager__item">
                            <div className="image-manager__content">
                              <label htmlFor="image-upload" className="image-manager__label">
                                <div className="image-manager__upload">
                                  <div className="file-upload">
                                    <div className="file-upload__wrapper">
                                      <input type="file" name="file" number={1} className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage1(e, 1)} />
                                      <img src={"http://localhost:4000/" + urlImage[1]} style={listImage[1] ? { display: "block" } : { display: "none" }} />
                                      <div className="file-upload__content">
                                        <i className="upload-icon">
                                          <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                            <g fill-rule="nonzero">
                                              <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                              <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                            </g>
                                          </svg>
                                        </i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                              <div className="explain-text">
                                <span>
                                  <span className="explain-text__text">Picture</span>
                                                                    1

                                                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="image-manager__item">
                            <div className="image-manager__content">
                              <label for="image-upload" className="image-manager__label">
                                <div className="image-manager__upload">
                                  <div className="file-upload">
                                    <div className="file-upload__wrapper">
                                      <input type="file" name="file" className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage2(e, 2)} />
                                      <img src={"http://localhost:4000/" + urlImage[2]} style={listImage[2] ? { display: "block" } : { display: "none" }} />
                                      <div className="file-upload__content">
                                        <i className="upload-icon">
                                          <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                            <g fill-rule="nonzero">
                                              <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                              <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                            </g>
                                          </svg>
                                        </i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                              <div className="explain-text">
                                <span>
                                  <span className="explain-text__text">Picture</span>
                                                                    2
                                                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="image-manager__item">
                            <div className="image-manager__content">
                              <label for="image-upload" className="image-manager__label">
                                <div className="image-manager__upload">
                                  <div className="file-upload">
                                    <div className="file-upload__wrapper">
                                      <input type="file" name="file" className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage3(e, 3)} />
                                      <img src={"http://localhost:4000/" + urlImage[3]} style={listImage[3] ? { display: "block" } : { display: "none" }} />
                                      <div className="file-upload__content">
                                        <i className="upload-icon">
                                          <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                            <g fill-rule="nonzero">
                                              <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                              <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                            </g>
                                          </svg>
                                        </i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                              <div className="explain-text">
                                <span>
                                  <span className="explain-text__text">Picture</span>
                                                                    3
                                                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="image-manager__item">
                            <div className="image-manager__content">
                              <label for="image-upload" className="image-manager__label">
                                <div className="image-manager__upload">
                                  <div className="file-upload">
                                    <div className="file-upload__wrapper">
                                      <input type="file" name="file" className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage4(e, 4)} />
                                      <img src={"http://localhost:4000/" + urlImage[4]} style={listImage[4] ? { display: "block" } : { display: "none" }} />
                                      <div className="file-upload__content">
                                        <i className="upload-icon">
                                          <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                            <g fill-rule="nonzero">
                                              <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                              <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                            </g>
                                          </svg>
                                        </i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                              <div className="explain-text">
                                <span>
                                  <span className="explain-text__text">Picture</span>
                                                                    4
                                                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="image-manager__item">
                            <div className="image-manager__content">
                              <label for="image-upload" className="image-manager__label">
                                <div className="image-manager__upload">
                                  <div className="file-upload">
                                    <div className="file-upload__wrapper">
                                      <input type="file" name="file" className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage5(e, 5)} />
                                      <img src={"http://localhost:4000/" + urlImage[5]} style={listImage[5] ? { display: "block" } : { display: "none" }} />
                                      <div className="file-upload__content">
                                        <i className="upload-icon">
                                          <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                            <g fill-rule="nonzero">
                                              <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                              <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                            </g>
                                          </svg>
                                        </i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                              <div className="explain-text">
                                <span>
                                  <span className="explain-text__text">Picture</span>
                                                                    5
                                                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="image-manager__item">
                            <div className="image-manager__content">
                              <label for="image-upload" className="image-manager__label">
                                <div className="image-manager__upload">
                                  <div className="file-upload">
                                    <div className="file-upload__wrapper">
                                      <input type="file" name="file" className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage6(e, 6)} />
                                      <img src={"http://localhost:4000/" + urlImage[6]} style={listImage[6] ? { display: "block" } : { display: "none" }} />
                                      <div className="file-upload__content">
                                        <i className="upload-icon">
                                          <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                            <g fill-rule="nonzero">
                                              <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                              <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                            </g>
                                          </svg>
                                        </i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                              <div className="explain-text">
                                <span>
                                  <span className="explain-text__text">Picture</span>
                                                                    6
                                                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="image-manager__item">
                            <div className="image-manager__content">
                              <label for="image-upload" className="image-manager__label">
                                <div className="image-manager__upload">
                                  <div className="file-upload">
                                    <div className="file-upload__wrapper">
                                      <input type="file" name="file" className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage7(e, 7)} />
                                      <img src={"http://localhost:4000/" + urlImage[7]} style={listImage[7] ? { display: "block" } : { display: "none" }} />
                                      <div className="file-upload__content">
                                        <i className="upload-icon">
                                          <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                            <g fill-rule="nonzero">
                                              <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                              <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                            </g>
                                          </svg>
                                        </i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                              <div className="explain-text">
                                <span>
                                  <span className="explain-text__text">Picture</span>
                                                                    7
                                                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section style={{ height: "30px" }}></section>
              </div>
              <div className="fixed-bottom-card" z-index="999">
                <div className="fix-container" >
                  <div className="fix-container__container">
                    <div className="fix-container__btn-group">
                      <button type="button" className="normal-btn">
                        <span>Cancel</span>
                      </button>
                      <button type="button" className="normal-btn">
                        <span>Save and Hide</span>
                      </button>
                      <a href="/banhang/item" type="button" className="primary-btn" onClick={() => handleSubmit()}>
                        <span>Save and Display</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-edit__side">
                <div className="side-wrapper">
                  <ul className="side-nav-list">
                    <li className="side-nav-item">
                      <a href="">Product Information</a>
                    </li>
                    <li className="side-nav-item">
                      <a href="">Selling Information</a>
                    </li>
                    <li className="side-nav-item active">
                      <a href="">Image Management</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout2>
  )
}