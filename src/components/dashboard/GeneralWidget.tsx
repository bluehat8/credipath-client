"use client"

import { Card, CardContent, CardHeader, CardTitle } from "components/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const chartData = [
  { name: "Ganancia", value: 15000, fill: "hsl(var(--primary))" },
  { name: "Prestado", value: 55000, fill: "hsl(var(--primary))" },
  { name: "Capital", value: 20000, fill: "hsl(var(--primary))" },
  { name: "Interés", value: 5000, fill: "hsl(var(--primary))" },
  { name: "Interés Mora", value: 1000, fill: "hsl(var(--destructive))" },
]

type GeneralWidgetProps = {
  className?: string
}


export default function GeneralWidget({ className }: GeneralWidgetProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Visión General</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={chartData} layout="vertical" margin={{ top: 10}}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" axisLine={true} tickLine={true} tickFormatter={(value) => `$${value / 1000}k`} />
            <YAxis
              dataKey="name"
              type="category"
              scale="band"
              axisLine={true}
              tickLine={false}
              fontSize={12}
              width={70}
              tickMargin={5}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card-background, white)",
                border: "1px solid #3c5543",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                color: "black",
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, "Monto"]}
              cursor={{ fill: "rgba(80, 194, 113, 0.1)" }}
            />
            <Bar
              dataKey="value"
              radius={[0, 4, 4, 0]}
              barSize={30}
              label={{
                position: "right",
                formatter: (value: any) => `$${value / 1000}k`,
                fill: "white",
                fontSize: 12,
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

