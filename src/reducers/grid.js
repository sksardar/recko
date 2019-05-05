import { GraphTypes } from "../constants";

const GridDefaultValue = {
  gridColumn: 2,
  gridEntries: [
    [GraphTypes.INTERPOLATION, GraphTypes.ZOOMABLE_GRAPH],
    [GraphTypes.GRAPH_AREA, GraphTypes.CIRCULAR_PIE_CHART],
  ],
}

function grid(state = GridDefaultValue, action) {
  switch (action.type) {
    default: return state;
  }
}
export default grid;