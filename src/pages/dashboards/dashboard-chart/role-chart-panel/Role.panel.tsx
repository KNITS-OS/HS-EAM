import { distributionByRoleReport } from "data";

import { ChartPanel } from "../chart-panels";
import { useChart } from "../hooks";

import { renderChart } from "./Role.renderer";

export const RoleChartPanel = () => {
  const { isLoading, chart, alert } = useChart(distributionByRoleReport, renderChart);

  return (
    <ChartPanel
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Composition"
      subTitle="By Role"
    />
  );
};
