import React,{useState,useRef} from 'react'
import {Bar,Line,Pie,Doughnut,Mixed, Bubble} from "react-chartjs-2"
import { useSelector } from 'react-redux'


const Chart = (props) => {
    const chartReference = useRef()
    const totalMonth1=useSelector(state=>state.totalReducer.totalMonth1)
    const totalMonth2=useSelector(state=>state.totalReducer.totalMonth2)
    const totalMonth3=useSelector(state=>state.totalReducer.totalMonth3)
    const totalMonth4=useSelector(state=>state.totalReducer.totalMonth4)
    const nameMonth1=useSelector(state=>state.totalReducer.nameMonth1)
    const nameMonth2=useSelector(state=>state.totalReducer.nameMonth2)
    const nameMonth3=useSelector(state=>state.totalReducer.nameMonth3)
    const nameMonth4=useSelector(state=>state.totalReducer.nameMonth4)
    const [name, setname] = useState("Line")
    const [ChartData, setChartData] = useState( {
        labels: [nameMonth4,nameMonth3,nameMonth2,nameMonth1],
        datasets:[
          {
            label:'sold',
            data:[
            totalMonth4,totalMonth3,totalMonth2,totalMonth1
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ],
            boderWidth:4,
            width:"100%",
            height:"300px",
            hoverBackgroundColor:"rgba(30, 25, 12, 0.8)",
            hoverBorderColor:"rgba(30, 25, 12, 0.8)",
            hoverBorderWidth:"rgba(30, 25, 12, 0.8)",
          }
        ]
      })
      if(props.chart=="lineChart"){
        return( <div className="chart" > 
        {}
             <Line
          data={ChartData}
          options={{
             maintainAspectRatio:false,
            title:{
              display:true,
              text:'Number sold of per month',
              fontSize:25
            },
            legend:{
              display:true,
              position:"bottom"
            }
           
          }}
          />
          </div>)
      }if(props.chart=="barChart"){
    return (
      <div className="chart" > 
      {}
           <Bar
        data={ChartData}
        options={{
           maintainAspectRatio:false,
          title:{
            display:true,
            text:'Number sold of per month',
            fontSize:25
          },
          legend:{
            display:true,
            position:"bottom"
          }
         
        }}
        />
        </div>
    )
      }if(props.chart=="pieChart"){
        return (
          <div className="chart" > 
          {}
               <Pie
            data={ChartData}
            options={{
               maintainAspectRatio:false,
              title:{
                display:true,
                text:'Number sold of per month',
                fontSize:25
              },
              legend:{
                display:true,
                position:"bottom"
              }
             
            }}
            />
            </div>
        )
      }if(props.chart=="doughnutChart"){
        return (
          <div className="chart" > 
          {}
               <Doughnut
            data={ChartData}
            options={{
               maintainAspectRatio:false,
              title:{
                display:true,
                text:'Number sold of per month',
                fontSize:25
              },
              legend:{
                display:true,
                position:"bottom"
              }
             
            }}
            />
            </div>
        )
      }if(props.chart=="bubbleChart"){
        return (
          <div className="chart" > 
          {}
               <Bubble
            data={ChartData}
            options={{
               maintainAspectRatio:false,
              title:{
                display:true,
                text:'Number sold of per month',
                fontSize:25
              },
              legend:{
                display:true,
                position:"bottom"
              }
             
            }}
            />
            </div>
        )
      }if(props.chart=="mixedChart"){
        return (
          <div className="chart" > 
          {}
               <Mixed
            data={ChartData}
            options={{
               maintainAspectRatio:false,
              title:{
                display:true,
                text:'Number sold of per month',
                fontSize:25
              },
              legend:{
                display:true,
                position:"bottom"
              }
             
            }}
            />
            </div>
        )
      }
}
export default Chart
 {/* <Bar
          data={ChartData}
          options={{
           maintainAspectRatio:false,
           title:{
             display:true,
             text:"largest city in massasuset",
             fontSize:25
           },
           legend:{
             display:true,
             position:"right"
           }
          }}
        />
        <Pie
          data={ChartData}
          options={{
             maintainAspectRatio:false,
            title:{
              display:true,
              text:'Largest Cities In ',
              fontSize:25
            },
            legend:{
              display:true,
              position:"bottom"
            }
          }}
        />
       <Line
          data={ChartData}
          options={{
             maintainAspectRatio:false,
            title:{
              display:true,
              text:'Largest Cities In ',
              fontSize:25
            },
            legend:{
              display:true,
              position:"bottom"
            }
          }}
        /> */}
        // <div> <Doughnut
        //  ref={chartReference}
        //  id={"chartjs "}
        //   data={ChartData}
        //    width={100}
        //       height={50}
        //   options={{
        //    maintainAspectRatio:true,
        //    responsive:true,
        //    title:{
        //      display:true,
        //      text:"Thông số tuần này",
        //      fontSize:25
        //    },
        //    legend:{
        //      display:false,
        //      position:"right"
        //    },
        //    scales:{
        //      yAxes:[
        //        {
        //          ticks:{
        //            autoSkip:true,
        //            maxTicksLimit:10,
        //            beginAtZero:true
        //          },
        //          gridLines:{
        //            display:false
        //          }
        //        }
        //      ],
        //      xAxes:[
        //        {
        //          gridLines:{
        //            display:false
        //          }
        //        }
        //      ]
        //    },
        //    tooltips:{
        //     enabled:true,
        //     backgroundColor:'rgba(30, 25, 12, 0.8)'
        //    },
        //    animation:{
        //      display:true
        //    }
        //   }}
        // /></div>