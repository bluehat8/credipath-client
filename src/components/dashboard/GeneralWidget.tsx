"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent, CardHeader,
    CardTitle
} from "components/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "components/components/ui/chart"
import { totalAmount, paidAmount, totalCapital, totalInterest, totalOverdueInterest } from "helpers"

const chartData = [
  { browser: "ganancia", visitors: paidAmount, fill: "#A5D8FF " },
  { browser: "prestado", visitors: totalAmount, fill: "#B0E57C " },
  { browser: "capital", visitors: totalCapital, fill: "#FFD700 " },
  { browser: "interes", visitors: totalInterest, fill: "#FFB3B3 " },
  { browser: "interesMora", visitors: totalOverdueInterest, fill: "#FFB3E0 " },
]

const chartConfig = {
  visitors: {
    label: "Amount",
  },
  ganancia: {
    label: "Ganancia",
    color: "hsl(var(--chart-1))",
  },
  prestado: {
    label: "Prestado",
    color: "hsl(var(--chart-2))",
  },
  capital: {
    label: "Capital",
    color: "hsl(var(--chart-3))",
  },
  interes: {
    label: "Interés",
    color: "hsl(var(--chart-4))",
  },
  interesMora: {
    label: "Interés por mora",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export default function GeneralWidget() {
  return (
    <Card className="mt-3">
      <CardHeader>
        <CardTitle>Visión General</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 15,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
