
import React, { PureComponent } from "react";
import { VictoryChart, VictoryZoomContainer } from "victory";
import { GraphTypes } from "../constants";

import GraphHeader from "./graphHeader.js";
import {
  GraphLine,
  GraphScatter,
  GraphXAxis,
  GraphYAxis,
  GraphGroup
} from "./graphComponentWrapper.js"
import AnimatingCircularProgressBar from "./animattedCircularProgressBar.js";


export class GraphContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      zoomDomain: { x: [new Date(1990, 1, 1), new Date(2019, 1, 1)] }
    };
  }
  handleZoom(domain) {
    this.setState({ zoomDomain: domain });
  }

  setZoomableProps = () => {
    const {
      config: {
        zoom: {
          isZoomable = false,
          scaleAxis,
          scaleOption
        } = {}
      }
    } = this.props;

    if (isZoomable) {
      return {
        scale: { [scaleAxis]: scaleOption },
        containerComponent:
          <VictoryZoomContainer
            zoomDimension="x"
            zoomDomain={this.state.zoomDomain}
            onZoomDomainChange={this.handleZoom.bind(this)}
            style={{ height: "auto" }}
          />
      }
    }
    return {}
  }

  render() {
    const {
      config: {
        type,
        header,
        subHeader = "",
        data,
        color = []
      }
    } = this.props;
    return (
      <div style={{ position: "relative" }}>
        <GraphHeader header={header} subHeader={subHeader} />
        <div style={{ display: "flex" }}>
          <div style={{ maxWidth: "100%", maxHeight: "400px", width: "100%", height: "400px", display: "inline-block", background: "black", borderRadius: 4 }}>
            {type === GraphTypes.CIRCULAR_PIE_CHART && <AnimatingCircularProgressBar />}
            {type !== GraphTypes.CIRCULAR_PIE_CHART &&
              <VictoryChart
                padding={{ top: 30, right: 40, bottom: 40, left: 50 }}
                height={200}
                animate={{ duration: 1000 }}
                {...this.setZoomableProps()}
              >
                {GraphTypes.GRAPH_AREA === type && GraphGroup(data, color)}
                {GraphTypes.GRAPH_AREA !== type && GraphLine(data)}
                {GraphTypes.GRAPH_AREA !== type && GraphScatter(data)}
                {GraphTypes.GRAPH_AREA !== type && GraphXAxis(header)}
                {GraphTypes.GRAPH_AREA !== type && GraphYAxis(header)}
              </VictoryChart>
            }
          </div>
        </div>
      </div>
    )
  }
}
