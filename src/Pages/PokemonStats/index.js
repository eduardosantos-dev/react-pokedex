import React, { Component } from "react";
import Chart from "react-apexcharts";

class PokemonStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          },
          foreColor: "#fff"
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          categories: this.props.stats.map(obj => obj.stat.name),
          labels: {
            show: false
          }
        },
        tooltip: {
          enabled: false
        },
        grid: {
          borderColor: "#fff"
        },
        responsive: [
          {
            breakpoint: "800",
            options: {
              plotOptions: {
                bar: {
                  horizontal: false
                }
              },
              xaxis: {
                labels: {
                  show: true
                }
              }
            }
          }
        ]
      },
      series: [
        {
          name: "series-1",
          data: this.props.stats.map(obj => obj.base_stat)
        }
      ]
    };
  }

  render() {
    console.log(this.state.series);
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonStats;
