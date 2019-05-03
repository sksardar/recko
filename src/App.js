import React, { PureComponent, Fragment } from 'react';
import './App.css';
import Interpolation, { ZoomableGraph, AnimatingCircularprogressBar } from "./graph/interpolation.js";

const GraphTypes ={
  INTERPOLATION: Symbol.for("Interpolation"),
  ZOOMABLE_GRAPH: Symbol.for("ZoomableGraph"),
  PIE_CHART: Symbol.for("PieChart"),
  CIRCULAR_PIE_CHART: Symbol.for("CircularPieChart")
};

const Configs = {
  gridColumn: 2,
  gridEntries: [
    [GraphTypes.INTERPOLATION, GraphTypes.ZOOMABLE_GRAPH],
    // [GraphTypes.PIE_CHART, GraphTypes.CIRCULAR_PIE_CHART ]
  ],

  entities:{
    [GraphTypes.INTERPOLATION]:{
      type: GraphTypes.INTERPOLATION,
      header: Symbol.keyFor(GraphTypes.INTERPOLATION),
      data:[
        { x: 0, y: 0 },
        { x: 1, y: 2 },
        { x: 2, y: 1 },
        { x: 3, y: 4 },
        { x: 4, y: 3 },
        { x: 5, y: 5 }
      ],

    },
    [GraphTypes.ZOOMABLE_GRAPH]:{
      type: GraphTypes.ZOOMABLE_GRAPH,
      header: Symbol.keyFor(GraphTypes.ZOOMABLE_GRAPH),
      subHeader:"Scroll mouse on Graph",
      data:[
        { x: new Date(1982, 1, 1), y: 125 },
        { x: new Date(1987, 1, 1), y: 257 },
        { x: new Date(1993, 1, 1), y: 345 },
        { x: new Date(1997, 1, 1), y: 515 },
        { x: new Date(2001, 1, 1), y: 132 },
        { x: new Date(2005, 1, 1), y: 305 },
        { x: new Date(2011, 1, 1), y: 270 },
        { x: new Date(2015, 1, 1), y: 470 }
      ]
    },
    // [GraphTypes.PIE_CHART]:{
    //   type: GraphTypes.PIE_CHART
    // },
    // [GraphTypes.CIRCULAR_PIE_CHART]:{
    //   type: GraphTypes.CIRCULAR_PIE_CHART
    // }
  }
}

console.log("Configs===",Configs);

const GraphComnponents = {
  [GraphTypes.INTERPOLATION]: Interpolation,
  [GraphTypes.ZOOMABLE_GRAPH]: ZoomableGraph,
  [GraphTypes.PIE_CHART]: AnimatingCircularprogressBar,
  [GraphTypes.CIRCULAR_PIE_CHART]: AnimatingCircularprogressBar,
}

class Layout extends PureComponent{
  render(){
    const { gridColumn, gridEntries, entities} = Configs;
    return(
      <div>
        {
          gridEntries.map((rowEntries,i) => {
            return (<div className="graph-container-row" style={{}} key={i}>
              {
                Array.from({length: gridColumn}, (v, i)=> i)
                  .map(index=> {
                    const graphType = rowEntries[index];
                    const Comp = GraphComnponents[graphType];
                    return (
                      <div className="graph-container-row--element" key={index}>
                        <Comp/>
                      </div>)
                  })
              }
            </div>)
          })
        }
      </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <Layout/>

      <h1>Layout</h1>

      {/* <div style={{display: "flex"}}> */}
        <div style={{width: "50%",}}>
           <Interpolation/>
        </div>
        <div style={{width: "50%"}}>
           <ZoomableGraph/>
        </div>
        <div style={{width: "50%"}}>
           <AnimatingCircularprogressBar/>
        </div>

     
      </div>
      
  );
}

export default App;
