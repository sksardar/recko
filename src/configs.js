import GraphTypes from "./graphTypes.js";

const Configs = {
    gridColumn: 2,
    gridEntries: [
      [GraphTypes.INTERPOLATION, GraphTypes.ZOOMABLE_GRAPH],
      [GraphTypes.GRAPH_AREA, GraphTypes.CIRCULAR_PIE_CHART],
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
          { x: 5, y: 5 },
        ],
      },
      [GraphTypes.ZOOMABLE_GRAPH]:{
        type: GraphTypes.ZOOMABLE_GRAPH,
        header: Symbol.keyFor(GraphTypes.ZOOMABLE_GRAPH),
        subHeader:"Scroll mouse on Graph",
        data:[
          { x: new Date(1982, 1, 1), y: 155 },
          { x: new Date(1987, 1, 1), y: 257 },
          { x: new Date(1993, 1, 1), y: 345 },
          { x: new Date(1997, 1, 1), y: 450 },
          { x: new Date(2001, 1, 1), y: 172 },
          { x: new Date(2005, 1, 1), y: 305 },
          { x: new Date(2011, 1, 1), y: 270 },
          { x: new Date(2015, 1, 1), y: 470 }
        ],
        zoom:{
          isZoomable: true,
          scaleAxis: "x",
          scaleOption: "time"
  
        }
      },
      [GraphTypes.GRAPH_AREA]:{
        type: GraphTypes.GRAPH_AREA,
        header: Symbol.keyFor(GraphTypes.GRAPH_AREA),
        subHeader: "With Stoke",
        data:[
          [
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ],
          [
            { x: 1, y: 3 },
            { x: 2, y: 2 },
            { x: 3, y: 6 },
            { x: 4, y: 2 },
            { x: 5, y: 6 }
          ]
        ],
        color: ["cyan", "magenta"]
      },
      [GraphTypes.CIRCULAR_PIE_CHART]:{
        type: GraphTypes.CIRCULAR_PIE_CHART,
        header: Symbol.keyFor(GraphTypes.CIRCULAR_PIE_CHART),
      }
    }
  }

  export default Configs;