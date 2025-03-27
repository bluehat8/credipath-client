"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { Card, CardContent } from "components/components/ui/card";
import { ChartConfig, ChartContainer } from "components/components/ui/chart";

const chartData = [
  { browser: "safari", visitors: 50 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "#05CD99", // Este color se usará como referencia para el degradado
  },
} satisfies ChartConfig;

export function RadialChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-square"
    >
      <RadialBarChart
        data={chartData}
        startAngle={30}
        endAngle={250}
        innerRadius={90}
        outerRadius={120}
      >
        {/* Definición del degradado vertical */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#05CD89", stopOpacity: 0 }} /> {/* Claro abajo */}
            <stop offset="100%" style={{ stopColor: "#05CD89", stopOpacity: 1 }} /> {/* Oscuro arriba */}
          </linearGradient>
        </defs>

        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          polarRadius={[86, 74]}
        />

        {/* Barra radial con el degradado aplicado */}
        <RadialBar
          dataKey="visitors"
          background
          cornerRadius={10}
          fill="url(#gradient)"
        />

        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox?.cy ?? 0) - 40}
                      className="fill-[#A0AEC0] text-[14px]"
                    >
                      Seguro
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-white text-[50px] font-bold"
                    >
                      {chartData[0].visitors.toLocaleString()}%
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 30}
                      className="fill-[#A0AEC0] text-[14px]"
                    >
                      Diferencia
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}