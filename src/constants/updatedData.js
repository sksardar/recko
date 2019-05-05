import GraphTypes from "./graphTypes.js";

const UpdatedData = [
  {
    [GraphTypes.INTERPOLATION]: {
      data: [
        { x: 6, y: 10 },
        { x: 7, y: 12 },
        { x: 8, y: 11 },
        { x: 9, y: 14 },
        { x: 10, y: 13 },
        { x: 11, y: 15 },
      ]
    },
    [GraphTypes.ZOOMABLE_GRAPH]: {
      data: [
        { x: new Date(1983, 1, 1), y: 255 },
        { x: new Date(1989, 1, 1), y: 227 },
        { x: new Date(1994, 1, 1), y: 370 },
        { x: new Date(1998, 1, 1), y: 450 },
        { x: new Date(2003, 1, 1), y: 372 },
        { x: new Date(2006, 1, 1), y: 405 },
        { x: new Date(2012, 1, 1), y: 370 },
        { x: new Date(2016, 1, 1), y: 440 }
      ]
    },
    [GraphTypes.GRAPH_AREA]: {
      data: [
        [
          { x: 1, y: 4 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 1 },
          { x: 5, y: 3 }
        ]
      ]
    }

  }, {
    [GraphTypes.INTERPOLATION]: {
      data: [
        { x: 12, y: 7 },
        { x: 13, y: 12 },
        { x: 14, y: 10 },
        { x: 15, y: 13 },
        { x: 16, y: 12 },
        { x: 17, y: 3 },
      ]
    },
    [GraphTypes.ZOOMABLE_GRAPH]: {
      data: [
        { x: new Date(1984, 1, 1), y: 255 },
        { x: new Date(1990, 1, 1), y: 227 },
        { x: new Date(1995, 1, 1), y: 345 },
        { x: new Date(1999, 1, 1), y: 450 },
        { x: new Date(2004, 1, 1), y: 172 },
        { x: new Date(2007, 1, 1), y: 305 },
        { x: new Date(2013, 1, 1), y: 270 },
        { x: new Date(2017, 1, 1), y: 370 }
      ]
    },
    [GraphTypes.GRAPH_AREA]: {
      data: [
        [
          { x: 1, y: 2 },
          { x: 2, y: 1 },
          { x: 3, y: 3 },
          { x: 4, y: 7 },
          { x: 5, y: 2 }
        ]
      ]
    }
  }
]


export default UpdatedData;