import React from 'react'
import { Row, Col } from "react-bootstrap";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useSelector } from 'react-redux';
const TotalInfor = () => {
  const totalView = useSelector(state => state.itemReducer.totalView)
  const totalSold = useSelector(state => state.itemReducer.totalSold)
  const totalIncome = useSelector(state => state.itemReducer.totalIncome)
  const totalUser = useSelector(state => state.itemReducer.totalUser)
  const percentageSold = useSelector(state => state.itemReducer.percentageSold)
  const percentageView = useSelector(state => state.itemReducer.percentageView)
  const percentageIncome = useSelector(state => state.itemReducer.percentageIncome)
  const percentageUser = useSelector(state => state.itemReducer.percentageUser)
  return (


    <Row>
      <Col lg={12} md={12}>
        <div className="statistic__table">
          <div className="statistic__table--user">
            <h5>Total Users</h5>
            <div>{totalUser}</div>
            <div className="statistic__table--percentage"><span className={percentageUser > 0 ? `statistic__table--percent` : `statistic__table--percent down`}> {percentageUser > 0 ? <AiFillCaretUp /> : <AiFillCaretDown />} {`${percentageUser}`}</span> from lastweek</div>
          </div>
          <div className="statistic__table--income">
            <h5>Total Sold</h5>
            <div>{totalSold}</div>
            <div className="statistic__table--percentage"><span className={percentageSold > 0 ? `statistic__table--percent` : `statistic__table--percent down`}> {percentageSold > 0 ? <AiFillCaretUp /> : <AiFillCaretDown />}{`${percentageSold}%`}</span> from lastweek</div></div>
          <div className="statistic__table--sold">
            <h5 className="statistic__table--title">Total Income</h5>
            <div className="statistic__table--number">{totalIncome}</div>
            <div className="statistic__table--percentage"><span className={percentageIncome > 0 ? `statistic__table--percent` : `statistic__table--percent down`}> {percentageIncome > 0 ? <AiFillCaretUp /> : <AiFillCaretDown />}{`${percentageIncome}%`}</span> from lastweek</div></div>
          <div className="statistic__table--view">
            <h5>Total View</h5>
            <div>{totalView}</div>
            <div className="statistic__table--percentage"><span className={percentageView > 0 ? `statistic__table--percent` : `statistic__table--percent down`}> {percentageView > 0 ? <AiFillCaretUp /> : <AiFillCaretDown />}{`${percentageView}%`}</span> from lastweek</div>
          </div>

        </div>
      </Col>
    </Row>
  )
}
export default TotalInfor;
