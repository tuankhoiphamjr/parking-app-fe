import "../../../node_modules/react-vis/dist/style.css";
import {
      XYPlot,
      LineSeries,
      LineMarkSeries,
      XAxis,
      YAxis,
      VerticalGridLines,
      HorizontalGridLines,
      DiscreteColorLegend,
} from "react-vis";
import { useWindowDimensions } from "../../api";

const Chart = ({ userStatistical }) => {
      const { height, width } = useWindowDimensions();
      // console.log({ height, width });
      const series = [2, 1].map((i) =>
            userStatistical.map((d) => ({ x: d[0], y: d[i] }))
      );
      const axisProps = {
            tickSizeInner: 0,
            style: { line: { stroke: "#939393", strokeWidth: "1px" } },
      };
      const color = ["#469cac", "#cc3d38"];
      const items = [
            { title: "Người dùng", color: "#469cac", strokeWidth: 6 },
            { title: "Chủ bãi", color: "#cc3d38", strokeWidth: 6 },
      ];
      return (
            <div style={{ marginTop: "15px" }}>
                  <DiscreteColorLegend items={items} orientation="horizontal" />
                  <XYPlot height={300} width={600}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis {...axisProps} tickFormat={String} />
                        <YAxis {...axisProps} tickFormat={String} />
                        {series.map((d, i) => (
                              <LineMarkSeries
                                    key={i}
                                    size={3}
                                    data={d}
                                    color={color[i]}
                              />
                        ))}
                  </XYPlot>
            </div>
      );
};

export default Chart;
