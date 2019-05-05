import GraphTypes from "../graphTypes.js";

const EntitiesAction = {
  UPDATE: {
    [GraphTypes.INTERPOLATION]: {
      DATA: `EntitiesAction.Update.${Symbol.keyFor(GraphTypes.INTERPOLATION)}.Data`
    },
    [GraphTypes.ZOOMABLE_GRAPH]: {
      DATA: `EntitiesAction.Update.${Symbol.keyFor(GraphTypes.ZOOMABLE_GRAPH)}.Data`
    },
    [GraphTypes.GRAPH_AREA]: {
      DATA: `EntitiesAction.Update.${Symbol.keyFor(GraphTypes.GRAPH_AREA)}.Data`
    },
    [GraphTypes.CIRCULAR_PIE_CHART]: {
      DATA: `EntitiesAction.Update.${Symbol.keyFor(GraphTypes.CIRCULAR_PIE_CHART)}.Data`
    },

  }
}

export default EntitiesAction;