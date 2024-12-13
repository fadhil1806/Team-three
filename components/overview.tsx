"use client"

import { useState } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const data = [
  { name: "Jan", task: 4000, submit: 2400 },
  { name: "Feb", task: 3000, submit: 1398 },
  { name: "Mar", task: 2000, submit: 9800 },
  { name: "Apr", task: 2780, submit: 3908 },
  { name: "May", task: 1890, submit: 4800 },
  { name: "Jun", task: 2390, submit: 3800 },
  { name: "Jul", task: 3490, submit: 4300 },
  { name: "Aug", task: 4000, submit: 2400 },
  { name: "Sep", task: 3000, submit: 1398 },
  { name: "Oct", task: 2000, submit: 9800 },
  { name: "Nov", task: 2780, submit: 3908 },
  { name: "Dec", task: 1890, submit: 4800 },
]

export function Overview() {
  const [selectedYear, setSelectedYear] = useState("2023")

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Overview</CardTitle>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <CardDescription>
          Compare task and submit for {selectedYear}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Legend />
            <Bar dataKey="task" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="submit" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
