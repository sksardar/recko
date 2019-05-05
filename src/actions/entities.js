import { GraphTypes, UpdatedData, EntitiesAction } from "../constants";


const dispatchUpdatedata = (graphType, data) => {
  return {
    type: EntitiesAction.UPDATE[graphType].DATA,
    data: data,
    graphType: graphType
  }
}
function renderData(dispatch, eachData, graphType, phaseIndex, order) {
  const { data = [] } = eachData[graphType];
  setTimeout(() => {
    dispatch(dispatchUpdatedata(graphType, data))
  }, (phaseIndex * 6 + order) * 2000)
}

export function updateData() {
  return (dispatch) => {
    UpdatedData.map((eachData, phaseIndex) => {
      renderData(dispatch, eachData, GraphTypes.INTERPOLATION, phaseIndex, 1);
      renderData(dispatch, eachData, GraphTypes.ZOOMABLE_GRAPH, phaseIndex, 2);
      renderData(dispatch, eachData, GraphTypes.GRAPH_AREA, phaseIndex, 3);
    })
  }
}
