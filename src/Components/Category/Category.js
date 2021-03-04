import React, { useState, useEffect } from 'react'
import data from "../../seed.json"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import { FiChevronRight } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { categoryActions } from '../../app/store/ducks/categoryReducer'
const Category = () => {
  const dispatch = useDispatch()
  const category = useSelector(state => state.categoryReducer.category)
  const [CategorryChoose, setCategorryChoose] = useState(null)
  useEffect(() => {
    dispatch(categoryActions.getCategory())
  }, [])
  return (
    <div className="category" onMouseLeave={() => setCategorryChoose(null)}>
      {
        category && category.branches.map((value, index) => {
          return (
            <>
              <div className="category--parent" >
                <ul >
                  <div className="category--parent--title" onMouseOver={() => setCategorryChoose(value)}>
                    <div className="category-parent-ttile--box">
                      <li className="active"  ><a href="#">{value.name}</a> </li>
                    </div>
                    <div>

                      <FiChevronRight />
                    </div>
                  </div>

                </ul>

              </div>
              <div className="category--child" style={CategorryChoose == value ? { display: "block", zIndex: "10000000000" } : { display: "none" }}>
                {value.branches && value.branches.map((v, index) => {
                  return (
                    <Link to="#">{v.name}</Link>
                  )
                })}
              </div>
            </>
          )
        })}
      <div className="category--parent" >
        <ul >
          <div className="category--parent--title" >
            <div className="category-parent-ttile--box">
              <li className="active"  ><a href="#">xem thêm</a> </li>
            </div>
            <div>
              <FiChevronRight />
            </div>
          </div>

        </ul>

      </div>
    </div>
  )
}
export default Category;