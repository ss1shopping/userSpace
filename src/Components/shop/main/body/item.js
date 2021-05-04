import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { orderActions } from '../../../../app/store/ducks/orderReducer'
import { DefaultLayout } from "../defaultLayout"
import { Search2 } from './search2'
import { Tab2 } from "./tab2"
import { useDispatch, useSelector } from "react-redux"
import { itemActions } from '../../../../app/store/ducks/itemReducer'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom'
import { getStorage } from '../../../../_metronic'
export const ManageItem = () => {
  const dispatch = useDispatch()
  const [page, setpage] = useState(1)
  const [sort, setsort] = useState("_id")
  const [order, setorder] = useState("ASC")
  const [statusDialogBox, setstatusDialogBox] = useState(false)
  const [productchoosetoDelete, setproductChoosetoDelete] = useState()
  const items = useSelector(state => state.itemReducer.item)

  const handleChangepage = (page) => {
    if (page < 1) {
      setpage(1)
    } else {
      setpage(page)

    }
  }
  const handleOpenDialogBox = (value, product) => {
    setstatusDialogBox(value)
    setproductChoosetoDelete(product)
  }
  const handleDelete = () => {
    dispatch(itemActions.deleteItem(productchoosetoDelete._id))
    setstatusDialogBox(false)
    setproductChoosetoDelete("")
    dispatch(itemActions.loadingitem(page, sort, getStorage("shopId")))
  }

  useEffect(() => {
    dispatch(itemActions.loadingitem(page, sort, getStorage("shopId")))

  }, [page, sort])
  return (

    <DefaultLayout>
      <Tab2></Tab2>
      <Search2></Search2>
      <div className="itemShopowner">
        <div className="itemShopowner--title1">
          <div className="itemShopowner--title1--name"> Sản phẩm   </div>
        </div>
        <div className="itemShopowner--table">
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" /> </th>
                <th>Sản phẩm </th>
                <th>Phân loại hàng  </th>
                <th>Giá  </th>
                <th> Đã bán  </th>
                <th> Sửa thông tin  </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              {
                items && items.map((value, index) => {
                  console.log(value.category[value.category.length - 1].name);
                  console.log();
                  return (
                    <tr>
                      <th><input type="checkbox" /> </th>
                      <th>{value.name}</th>
                      <th>{value.category[value.category.length - 1].name}</th>
                      <th>{value.priceMin}-{value.priceMax}</th>
                      <th>{value.sold}</th>
                      <th> <Link to={`/banhang/update/item/${value._id}`} className="btn btn--outline">Sửa thông tin</Link>  </th>
                      <th> <button onClick={() => handleOpenDialogBox(true, value)} className="btn btn--outline">Xoá</button>  </th>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>

        <div className="itemShopowner--pagination">
          <div className={page === 1 ? "btn btn--pagination disable" : "btn btn--pagination"} onClick={() => handleChangepage(page - 1)}>Previous</div>
          <div className="itemShopowner--pagination--page">{page}</div>
          <div className="btn btn--pagination" onClick={() => handleChangepage(page + 1)}>Next</div>

        </div>
      </div>
      <div className="dialogbox" style={statusDialogBox ? { display: "block" } : { display: "none" }}>
        <div className="dialogbox--wrapper--exit">

          <button onClick={() => handleOpenDialogBox(false)} className="btn">x</button>
        </div>
        <div className="dialogbox--wrapper">

          <div className="dialogbox--wrapper--title"> Are you sure want delete product?</div>
          <div className="dialogbox--wrapper--button">
            <button className="btn btn--outline" onClick={() => handleDelete()}> Yes</button>
            <button className="btn btn--outline" onClick={() => handleOpenDialogBox(false)}> No</button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
