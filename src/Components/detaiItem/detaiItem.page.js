import React, { useEffect } from 'react'
import ImageSlider from './ImageSlider.page'
import Infor from './Infor.page'
import "./detaiItem.styles.scss"
import data from "../../seed1.json"
import start from "../../star_rate-24px.svg"
import StarIcon from '@material-ui/icons/Star';
import DefaultLayout from '../../app/layout/Defaultlayout'
import { useDispatch, useSelector } from "react-redux"
import { itemActions } from '../../app/store/ducks/itemReducer'
import { getStorage } from '../../_metronic/utils/utils'
const DetailItem = () => {
  const dispatch = useDispatch()
  const item = useSelector(state => state.itemReducer.detailItem)
  useEffect(() => {
    //itemActions.getItem(getStorage("idItem"))
    dispatch(itemActions.getItem("60093dcf165f0dfe00ca07f2"))

  }, [])
  return (
    <DefaultLayout>


      <div className="detailItem">
        <div className="detailItem--group">


          <div className="detailItem--wrapper">
            <div className="detailItem--wrapper--image">
              <ImageSlider tier_variations={data.tier_variations}>
              </ImageSlider>
            </div>
            <div className="detailItem--wrapper--infor">
              <Infor></Infor>
            </div>
          </div>
          <div className="detailItem--content">
            <div className="content--left">
              <div className="product--detail page--product__detail">
                <div className="content">
                  <div className="content--label">Chi Tiết Sản Phẩm</div>
                  <div className="content--attr">
                    <div className="content--attr--element">
                      <label>Danh mục</label>
                      <div>Vinall {'>'} Quần {'>'} Quần kaki</div>
                    </div>
                    <div className="content--attr--element">
                      <label>Chất liệu</label>
                      <div> vải </div>
                    </div>
                    <div className="content--attr--element">
                      <label>Chất liệu</label>
                      <div> vải </div>
                    </div>
                    <div className="content--attr--element">
                      <label>Chất liệu</label>
                      <div> vải </div>
                    </div >
                    <div className="content--attr--element">
                      <label>Chất liệu</label>
                      <div> vải </div>
                    </div>
                  </div>
                </div>
                <div className="description">
                  <div className="description--label">MÔ TẢ SẢN PHẨM</div>
                  <div className="description--text">
                    <span>THÔNG TIN THƯƠNG HIỆU:
                  Thương hiệu Đồng hồ Julius Hàn Quốc sản xuất theo tiêu chuẩn quốc tế. Julius Sử dụng công nghệ Nhật Bản với máy Nhật nhập khẩu 100% từ Citizen. Đồng hồ được lắp ráp tại Trung Quốc để giảm giá thành phù hợp người tiêu dùng.<br />
                  Đồng hồ Julius thiết kế bởi chuyên gia thời trang hàng đầu Hàn Quốc với hơn 1000 mẫu đồng hồ thời trang dành cho giới trẻ yêu thích thời trang và phá cách.<br />
                  Xem thêm Đồng hồ nữ Julius, Đồng hồ nam Julius, Đồng hồ đôi Julius<br />
                  THÔNG TIN SẢN PHẨM:<br />
                  Mã sản phẩm: Julius JA-979E<br />
                  Dành cho: Nữ giới, yêu thích thời trang và phá cách<br />
                  Chất liệu dây: Dây da Genuine Leather bền bỉ<br />
                  Chất liệu mặt kính: Mặt kính khoáng cao cấp trong suốt rõ nét, độ cứng cao (chống va đập tốt ở mức sinh hoạt hằng ngày)<br />
                  Kích thước bề mặt: 2,3cm (Mặt tròn)<br />
                  Độ dày: 0,8cm<br />
                  Tổng độ dài đồng hồ: 21,5cm<br />
                  Độ rộng của dây: 0,8cm<br />
                  Kiểu khóa: Khóa gài<br />
                  Chất liệu vỏ máy: Hợp kim mạ ion , sử dụng công nghệ mạ IP chân không tiên tiến giúp đem lại độ sáng bóng và bền màu<br />
                  Máy: Quartz Nhật MIYOTA 2035 (được sản xuất bởi Citizen Nhật Bản)
                  Khả năng chịu nước:  Chống thấm nước 3ATM (30m) có thể đi mưa, rửa tay, rửa mặt. Tránh tiếp xúc với môi trường hóa chất như giặt đồ, tấm gội.<br />
                  CHẾ ĐỘ BẢO HÀNH:<br />
                  Bảo hành đồng hồ Julius: 12 tháng, Thay dây miễn phí 1 lần, hậu mãi 3 năm chi phí thấp sau bảo hành, mua linh kiện với giá ưu đãi<br />
                  HƯỚNG DẪN SỬ DỤNG:<br />
                  THƯỜNG XUYÊN vệ sinh đồng hồ bằng vải mềm hơi ẩm.<br />
                  THÁO đồng hồ khi tắm hoặc làm việc nhà, cọ sát tay nhiều, không đeo cùng vòng tay sắc nhọn.<br />
                  KHÔNG chỉnh đồng hồ khi bị vào nước, kHÔNG để đồng hồ tiếp xúc: xà phòng, axit..v.v. Liên hệ ngay khi gặp sự cố.<br />
                  #Ja-979, #julius, #julius việt nam,#julius chính hãng, #julius hàn quốc, #đồng hồ nữ, #đồng hồ<br />
                    </span>
                  </div>

                </div>
              </div>
              <div className="product--detail page--product__rating">
                <div className="product--rating--header">
                  ĐÁNH GIÁ SẢN PHẨM
              </div>
                <div className="product-rating-overview">
                  <div className="product-rating-overview__briefing">
                    <div className="product-rating-overview__score-wrapper">
                      <span className="product-rating-overview__rating-score">4.9</span>
                      <span className="product-rating-overview__rating-score-out-of">trên 5</span>
                    </div>
                    <div className="vinall-rating-stars product-rating-overview__stars">
                      <div className="vinall-rating-stars__stars">
                        <div className="vinall-rating-stars__star-wrapper">
                          <div className="star">

                            <StarIcon></StarIcon>
                          </div>

                        </div>
                        <div className="shopee-rating-stars__star-wrapper">
                          <div className="star">

                            <StarIcon></StarIcon>
                          </div>
                        </div>
                        <div className="shopee-rating-stars__star-wrapper">
                          <div className="star">

                            <StarIcon></StarIcon>
                          </div>
                        </div>
                        <div className="shopee-rating-stars__star-wrapper">
                          <div className="star">

                            <StarIcon></StarIcon>
                          </div>
                        </div>
                        <div className="shopee-rating-stars__star-wrapper">
                          <div className="star">

                            <StarIcon></StarIcon>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-rating-overview__filters">
                    <div className="product-rating-overview__filter">Tất cả </div>
                    <div className="product-rating-overview__filter"> 5 sao</div>
                    <div className="product-rating-overview__filter"> 4 sao</div>
                    <div className="product-rating-overview__filter"> 3 sao</div>
                    <div className="product-rating-overview__filter">2 sao</div>
                    <div className="product-rating-overview__filter">1 sao</div>
                    <div className="product-rating-overview__filter">Có bình luân</div>
                    <div className="product-rating-overview__filter">Có hình ảnh</div>
                  </div>
                </div>
                <div className="product--rating--list"></div>
              </div>
              <div className="reconmendation"></div>
            </div>
            <div className='content--right'>
              <div className="page--product--vouchers">right</div>
              <div className="page--product--hotsales"></div>
            </div>
          </div>


        </div>

      </div>
    </DefaultLayout>
  )
}
export default DetailItem