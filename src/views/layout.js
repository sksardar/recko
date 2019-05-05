import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { GraphContainer } from "../components/graphContainer.js";
import { updateData } from "../actions/entities.js";

class Layout extends PureComponent {
  componentDidMount() {

    //to update data dynamically
    setTimeout(() => {
      this.props.updateData();
    }, 2000)
  }
  render() {
    const { grid: { gridColumn, gridEntries }, entities } = this.props;
    return (
      <div>
        {
          gridEntries.map((rowEntries, i) => {
            return (<div className="graph-container-row" style={{}} key={i}>
              {
                Array.from({ length: gridColumn }, (v, i) => i)
                  .map(index => {
                    const graphType = rowEntries[index];
                    return (
                      <div className="graph-container-row--element" key={index}>
                        <GraphContainer config={entities[graphType]} />
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


const mapStateToProps = ({ grid, entities }) => {
  return {
    grid: grid,
    entities: entities
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateData: () => dispatch(updateData())
}
)
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
