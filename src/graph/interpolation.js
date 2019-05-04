
import React , { PureComponent, Fragment } from "react";
import { VictoryTheme, VictoryChart, VictoryLine, VictoryGroup, VictoryVoronoiContainer, VictoryScatter, VictoryZoomContainer, VictoryTooltip, VictoryAxis, round ,VictoryPie, VictoryAnimation, VictoryLabel} from "victory";

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
      }
     } = this.props;
    return(
      <div style={{position:"relative"}}>
        <Graphheader header={header} subHeader={subHeader} />
        <div style={{display:"flex"}}>
          <div style={{width: "100%", display: "inline-block",  background:"black" , borderRadius:4}}>
            <VictoryChart
              padding={{ top: 30, right: 40, bottom: 40, left: 50 }}
              height={200}
              {...this.setZoomableProps()}
            >
              { GraphLine(data) }
              { GraphScatter(data) }
              { GraphXAxis(header) }
              { GraphYAxis( header) }
            </VictoryChart>
          </div>
        </div>
      </div>
    )
  }
}

export class AnimatingCircularprogressBar extends PureComponent{
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

  render(){
    return(
      <div>
        <h4>pie chart</h4>
        <VictoryPie
          width={370}
          height={370}
          data={[
            { x: 1, y: 2, label: "one" },
            { x: 2, y: 3, label: "two" },
            { x: 3, y: 5, label: "three" }
          ]}

          padding={{ top: 80, right: 40, bottom: 80, left: 78 }}
          height={500}
        />


        
        <h4>circular pie chart</h4>
        <svg viewBox="0 0 400 400" width="50%" height="100%">
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
      </div>
    );
  }
  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }
}

// export default Interpolation;