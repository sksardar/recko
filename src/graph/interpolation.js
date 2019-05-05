
import React , { PureComponent, Fragment } from "react";
import {
  VictoryTheme,
  VictoryChart, 
  VictoryLine, 
  VictoryGroup, 
  VictoryArea, 
  VictoryScatter, 
  VictoryZoomContainer, 
  VictoryAxis, 
  VictoryPie, 
  VictoryAnimation, 
  VictoryLabel
} from "victory";
import GraphTypes from "../graphTypes.js";

const Graphheader = ({header, subHeader})=>(
  <h4 style={{ position: "absolute", color: "red", margin: "0 auto", background: "black", marginLeft: "40%"}}>
    { `${header} ${subHeader? "(" + subHeader + ") ":""}`}:
  </h4>
)

const GraphLine = (data)=>(
  <VictoryLine
    interpolation={"natural"}
    data={data}
    style={{ data: { stroke: "#c43a31" } }}
  />
)

const GraphScatter = (data) =>(
  <VictoryScatter data={data}
    size={4}
    style={{ data: { fill: "blue" } }}
  />
)

const GraphXAxis = header =>(
  <VictoryAxis
    theme={VictoryTheme.material}
    style={{
      tickLabels: { fontSize: 10 }
    }}
    orientation="bottom"
    label={`${header} x-axis`}
    style={{
      tickLabels: { fontSize: 12 },
      axisLabel: { fontSize: 10,  padding: 25, overflow: "visible" }
    }}
  />
)

const GraphYAxis = header =>(
  <VictoryAxis
    orientation="left"
    theme={VictoryTheme.material}
    dependentAxis
    label={`${header} y-axis`}
    padding={10}
    style={{
      tickLabels: { fontSize: 12 },
      axisLabel: { fontSize: 10,  padding: 30, overflow: "visible" }
    }} 
  />
)

const GraphGroup = ( data, color ) =>{
  return(
    <VictoryGroup
      style={{ data : {strokeWidth: 2, fillOpacity: 0.4}}}
    >
      {
        data.map((eachAreaData, i)=>{
          return(
            <VictoryArea
              key={i}
              style={{
                data: { fill: color[i], stroke: color[i] }
              }}
              data={eachAreaData}
            />
          )
        })
      }
    </VictoryGroup>
  )
}

class AnimatingCircularprogressBar extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 25, data: this.getData(0)
    };
  }

  componentDidMount() {
    let percent = 25;
    this.setStateInterval = window.setInterval(() => {
      percent += (Math.random() * 25);
      percent = (percent > 100) ? 0 : percent;
      this.setState({
        percent, data: this.getData(percent)
      });
    }, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  render() {
    return (
        <svg viewBox="0 0 400 400" width="100%" height="400px" maxWidth="100%" maxHeight="400px">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400} height={400}
            data={this.state.data}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: { fill: (d) => {
                const color = d.y > 30 ? "green" : "red";
                return d.x === 1 ? color : "transparent";
              }
              }
            }}
          />
          <VictoryAnimation duration={1000} data={this.state}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={200} y={200}
                  text={`${Math.round(newProps.percent)}%`}
                  style={{ fontSize: 45 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
    );
  }
}



export class GraphComponent extends PureComponent{
  constructor() {
    super();
    this.state = {
      zoomDomain: { x: [new Date(1990, 1, 1), new Date(2019, 1, 1)] }
    };
  }
  handleZoom(domain) {
    this.setState({ zoomDomain: domain });
  }

  setZoomableProps = ()=>{
    const {
      config:{
        zoom:{
          isZoomable=false,
          scaleAxis,
          scaleOption
        }={}
      }
    } = this.props;

    if(isZoomable){
      return{
        scale:{ [scaleAxis] : scaleOption},
        containerComponent:
          <VictoryZoomContainer
            zoomDimension="x"
            zoomDomain={this.state.zoomDomain}
            onZoomDomainChange={this.handleZoom.bind(this)}
            style={{height: "auto"}}
          />
      }
    }
    return {}
  }

  render(){
    const {
      config:{
        type,
        header,
        subHeader="",
        data,
        color=[]
      }
     } = this.props;
    return(
      <div style={{position:"relative"}}>
        <Graphheader header={header} subHeader={subHeader} />
        <div style={{display:"flex"}}>
          <div style={{maxWidth: "100%", maxHeight:"400px", width:"100%", height:"400px", display: "inline-block",  background:"black" , borderRadius:4}}>
            {type === GraphTypes.CIRCULAR_PIE_CHART && <AnimatingCircularprogressBar/>}
            {type !== GraphTypes.CIRCULAR_PIE_CHART && <VictoryChart
              padding={{ top: 30, right: 40, bottom: 40, left: 50 }}
              height={200}
              {...this.setZoomableProps()}
            >
              { GraphTypes.GRAPH_AREA === type && GraphGroup (data, color) }
              { GraphTypes.GRAPH_AREA !== type && GraphLine(data) }
              { GraphTypes.GRAPH_AREA !== type && GraphScatter(data) }
              { GraphTypes.GRAPH_AREA !== type && GraphXAxis(header) }
              { GraphTypes.GRAPH_AREA !== type && GraphYAxis( header) }
            </VictoryChart>}
          </div>
        </div>
      </div>
    )
  }
}
