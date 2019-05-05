import React from "react";
import {
  VictoryTheme,
  VictoryLine,
  VictoryGroup,
  VictoryArea,
  VictoryScatter,
  VictoryAxis,
} from "victory";

export const GraphLine = (data) => (
  <VictoryLine
    interpolation={"natural"}
    data={data}
    style={{ data: { stroke: "#c43a31" } }}
  />
)

export const GraphScatter = (data) => (
  <VictoryScatter data={data}
    size={4}
    style={{ data: { fill: "blue" } }}
  />
)

export const GraphXAxis = header => (
  <VictoryAxis
    theme={VictoryTheme.material}
    style={{
      tickLabels: { fontSize: 10 }
    }}
    orientation="bottom"
    label={`${header} x-axis`}
    style={{
      tickLabels: { fontSize: 12 },
      axisLabel: { fontSize: 10, padding: 25, overflow: "visible" }
    }}
  />
)

export const GraphYAxis = header => (
  <VictoryAxis
    orientation="left"
    theme={VictoryTheme.material}
    dependentAxis
    label={`${header} y-axis`}
    padding={10}
    style={{
      tickLabels: { fontSize: 12 },
      axisLabel: { fontSize: 10, padding: 30, overflow: "visible" }
    }}
  />
)

export const GraphGroup = (data, color) => {
  return (
    <VictoryGroup
      style={{ data: { strokeWidth: 2, fillOpacity: 0.4 } }}
    >
      {
        data.map((eachAreaData, i) => {
          return (
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
