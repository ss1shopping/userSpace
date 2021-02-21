import React, { useState } from 'react'
import data from "../../seed.json"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import { FiChevronRight } from "react-icons/fi"
import { Link } from 'react-router-dom'
const Category = () => {
  const [CategorryChoose, setCategorryChoose] = useState(null)
  return (
    <div className="category" onMouseLeave={() => setCategorryChoose(null)}>
      {
        data.branches.map((value, index) => {
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