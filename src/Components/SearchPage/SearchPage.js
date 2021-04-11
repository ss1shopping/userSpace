import React, { useState, useEffect } from 'react'
import DefaultLayout from '../../app/layout/Defaultlayout'
import { FaFilter } from "react-icons/fa"
import { FcIdea } from "react-icons/fc"
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai"
import { BsCaretLeftFill, BsCaretRightFill, BsCaretDown, BsCheck } from "react-icons/bs"
import { useSelector, useDispatch } from 'react-redux'
import { Item } from '../item/item'
const SearchPage = () => {
  const dispatch = useDispatch()

  const [OrderPrice, setOrderPrice] = useState()
  const keyword = useSelector(state => state.itemReducer.keyword)
  const item = useSelector(state => state.itemReducer.searchItem)
  useEffect(() => {

  }, [item])
  return (
    <DefaultLayout>

      <div className="searchPage">
        <div className="searchPage--nav">
          <div className="searchPage--nav--header">
            <span>
              <FaFilter />
            </span>
            <h3>Bộ lọc tìm kiếm </h3>
          </div>
          <div className="nav--filter--category">
            <div className="filter-header"><h7>Theo danh mục</h7></div>
            <div>
              <input type="checkbox" value="jean" onClick={(e) => console.log(e.currentTarget.checked)} />
              <span> Quần jean </span> <br />

            </div>
            <div>
              <input type="checkbox" value="jean" onClick={(e) => console.log(e.currentTarget.checked)} />
              <span> Quần jean </span> <br />
            </div>
            <div>
              <input type="checkbox" value="jean" onClick={(e) => console.log(e.currentTarget.checked)} />
              <span> Quần jean </span> <br />
            </div>
            <div>
              <input type="checkbox" value="jean" onClick={(e) => console.log(e.currentTarget.checked)} />
              <span> Quần jean </span> <br />
            </div>
          </div>
          <div className="nav--filter--position">
            <div className="filter-header"><h7>Nơi bán</h7></div>
            <div>
              <input type="checkbox" value="jean" onClick={(e) => console.log(e.currentTarget.checked)} />
              <span> Hà nội </span> <br />
            </div>
            <div>
              <input type="checkbox" value="jean" onClick={(e) => console.log(e.currentTarget.checked)} />
              <span> Hồ Chí Minh </span> <br />
            </div>
            <div>
              <input type="checkbox" value="jean" onClick={(e) => console.log(e.currentTarget.checked)} />
              <span> Đà Nẵng  </span> <br />
            </div>
            <div>
              <input type="checkbox" value="jean" onClick={(e) => console.log(e.currentTarget.checked)} />
              <span> Huế  </span> <br />
            </div>
          </div>
          <div className="nav--filter--rangeprice">
            <div className="filter-header"><h7>Khoảng giá</h7></div>
            <div className="rangeprice--box">
              <div className="from">
                <input placeholder="đ từ" size="20" />
              </div>
              <div>--</div>
              <div className="to">
                <input placeholder="đ đến" size="20" />
              </div>
            </div>
            <div>Áp dụng </div>
          </div>
          <div className="nav--filter--rate">
            <div className="filter-header"><h7>đánh giá</h7></div>
            <div class="five-star">

              <AiTwotoneStar className="five" />
              <AiTwotoneStar className="four" />
              <AiTwotoneStar className="three" />
              <AiTwotoneStar className="two" />
              <AiTwotoneStar className="one" />
            </div>
            <div class="four-star">
              <AiTwotoneStar className="five" />
              <AiTwotoneStar className="four" />
              <AiTwotoneStar className="three" />
              <AiTwotoneStar className="two" />
              <AiOutlineStar />
            </div>
            <div class="three-star">
              <AiTwotoneStar className="five" />
              <AiTwotoneStar className="four" />
              <AiTwotoneStar className="three" />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <div class="two-star">
              <AiTwotoneStar className="five" />
              <AiTwotoneStar className="four" />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <div class="one-star">
              <AiTwotoneStar className="five" />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </div>
          <div className="nav--filter--remove">
            <button className="btn btn--primary">Xoá tất cả</button>
          </div>
        </div>
        <div className="searchPage--main">
          <div className="main--header">
            <FcIdea /> Kết quả tìm kiếm cho từ khoá '<span>{keyword && keyword}</span>'
          </div>
          <div className="main--filter">
            <div className="main--filter--order">
              <div className="main--filter--title"> Sắp xếp theo</div>
              <div className="main--filter--box">
                <div className="box--listbtn">
                  <button className="btn btn--option">Liên quan</button>
                  <button className="btn btn--option">Mới nhất</button>
                  <button className="btn btn--option">Bán chạy </button>
                </div>
                <div class="box--dropdown">
                  <div className="box--dropdown--title btn--option" >
                    <div className="name" > Giá: {OrderPrice}</div>
                    <div><BsCaretDown></BsCaretDown></div>
                  </div>
                  <div class="dropdown-content" >
                    <div className="select" onClick={() => setOrderPrice("Thấp đến cao")}>Giá: Thấp đến cao <span className="check">{OrderPrice === "Thấp đến cao" ? <BsCheck /> : ""}</span> </div>
                    <div className="select" onClick={() => setOrderPrice("Cao đến thấp")}>Giá: Cao đến thấp  <span className="check">{OrderPrice === "Cao đến thấp" ? <BsCheck /> : ""}</span> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main--filter--pagination">
              <div className="pagination--number">1/10</div>
              <div className="pagination--button">
                <button className="btn btn--pagination btn--disable"><BsCaretLeftFill /></button>
                <button className="btn btn--pagination"><BsCaretRightFill /></button>
              </div>
            </div>
          </div>
          <div className="main--item">
            <div className="main--item--searchResult">
              {item && item.map((v, i) => {
                return (

                  <Item key={i} item={v._source} id={v._id}></Item>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
export default SearchPage
