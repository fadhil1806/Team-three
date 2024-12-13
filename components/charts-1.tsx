"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  // April
  {
    date: "2024-04-01",
    kelas10: 222,
    kelas11: 150,
    kelas12: 180,
    kelas13: 200,
  },
  { date: "2024-04-02", kelas10: 97, kelas11: 180, kelas12: 120, kelas13: 160 },
  {
    date: "2024-04-03",
    kelas10: 167,
    kelas11: 120,
    kelas12: 140,
    kelas13: 170,
  },
  {
    date: "2024-04-04",
    kelas10: 242,
    kelas11: 260,
    kelas12: 200,
    kelas13: 220,
  },
  {
    date: "2024-04-05",
    kelas10: 373,
    kelas11: 290,
    kelas12: 240,
    kelas13: 250,
  },
  {
    date: "2024-04-06",
    kelas10: 301,
    kelas11: 340,
    kelas12: 300,
    kelas13: 320,
  },
  {
    date: "2024-04-07",
    kelas10: 245,
    kelas11: 180,
    kelas12: 190,
    kelas13: 200,
  },
  {
    date: "2024-04-08",
    kelas10: 409,
    kelas11: 320,
    kelas12: 360,
    kelas13: 380,
  },
  { date: "2024-04-09", kelas10: 59, kelas11: 110, kelas12: 90, kelas13: 100 },
  {
    date: "2024-04-10",
    kelas10: 261,
    kelas11: 190,
    kelas12: 210,
    kelas13: 220,
  },
  {
    date: "2024-04-11",
    kelas10: 327,
    kelas11: 350,
    kelas12: 400,
    kelas13: 420,
  },
  {
    date: "2024-04-12",
    kelas10: 292,
    kelas11: 210,
    kelas12: 230,
    kelas13: 240,
  },
  {
    date: "2024-04-13",
    kelas10: 342,
    kelas11: 380,
    kelas12: 370,
    kelas13: 390,
  },
  {
    date: "2024-04-14",
    kelas10: 137,
    kelas11: 220,
    kelas12: 150,
    kelas13: 170,
  },
  {
    date: "2024-04-15",
    kelas10: 120,
    kelas11: 170,
    kelas12: 160,
    kelas13: 180,
  },
  {
    date: "2024-04-16",
    kelas10: 138,
    kelas11: 190,
    kelas12: 180,
    kelas13: 200,
  },
  {
    date: "2024-04-17",
    kelas10: 446,
    kelas11: 360,
    kelas12: 400,
    kelas13: 420,
  },
  {
    date: "2024-04-18",
    kelas10: 364,
    kelas11: 410,
    kelas12: 420,
    kelas13: 440,
  },
  {
    date: "2024-04-19",
    kelas10: 243,
    kelas11: 180,
    kelas12: 150,
    kelas13: 160,
  },
  { date: "2024-04-20", kelas10: 89, kelas11: 150, kelas12: 130, kelas13: 140 },
  {
    date: "2024-04-21",
    kelas10: 137,
    kelas11: 200,
    kelas12: 180,
    kelas13: 190,
  },
  {
    date: "2024-04-22",
    kelas10: 224,
    kelas11: 170,
    kelas12: 190,
    kelas13: 200,
  },
  {
    date: "2024-04-23",
    kelas10: 138,
    kelas11: 230,
    kelas12: 200,
    kelas13: 210,
  },
  {
    date: "2024-04-24",
    kelas10: 387,
    kelas11: 290,
    kelas12: 260,
    kelas13: 280,
  },
  {
    date: "2024-04-25",
    kelas10: 215,
    kelas11: 250,
    kelas12: 270,
    kelas13: 290,
  },
  { date: "2024-04-26", kelas10: 75, kelas11: 130, kelas12: 100, kelas13: 110 },
  {
    date: "2024-04-27",
    kelas10: 383,
    kelas11: 420,
    kelas12: 400,
    kelas13: 420,
  },
  {
    date: "2024-04-28",
    kelas10: 122,
    kelas11: 180,
    kelas12: 140,
    kelas13: 150,
  },
  {
    date: "2024-04-29",
    kelas10: 315,
    kelas11: 240,
    kelas12: 210,
    kelas13: 230,
  },
  {
    date: "2024-04-30",
    kelas10: 454,
    kelas11: 380,
    kelas12: 450,
    kelas13: 470,
  },

  // May
  {
    date: "2024-05-01",
    kelas10: 165,
    kelas11: 220,
    kelas12: 180,
    kelas13: 190,
  },
  {
    date: "2024-05-02",
    kelas10: 293,
    kelas11: 310,
    kelas12: 330,
    kelas13: 340,
  },
  {
    date: "2024-05-03",
    kelas10: 247,
    kelas11: 190,
    kelas12: 210,
    kelas13: 230,
  },
  {
    date: "2024-05-04",
    kelas10: 385,
    kelas11: 420,
    kelas12: 380,
    kelas13: 390,
  },
  {
    date: "2024-05-05",
    kelas10: 481,
    kelas11: 390,
    kelas12: 450,
    kelas13: 460,
  },
  {
    date: "2024-05-06",
    kelas10: 498,
    kelas11: 520,
    kelas12: 490,
    kelas13: 510,
  },
  {
    date: "2024-05-07",
    kelas10: 388,
    kelas11: 300,
    kelas12: 350,
    kelas13: 370,
  },
  {
    date: "2024-05-08",
    kelas10: 149,
    kelas11: 210,
    kelas12: 170,
    kelas13: 180,
  },
  {
    date: "2024-05-09",
    kelas10: 227,
    kelas11: 180,
    kelas12: 190,
    kelas13: 200,
  },
  {
    date: "2024-05-10",
    kelas10: 293,
    kelas11: 330,
    kelas12: 310,
    kelas13: 320,
  },
  {
    date: "2024-05-11",
    kelas10: 335,
    kelas11: 270,
    kelas12: 290,
    kelas13: 300,
  },
  {
    date: "2024-05-12",
    kelas10: 197,
    kelas11: 240,
    kelas12: 250,
    kelas13: 260,
  },
  {
    date: "2024-05-13",
    kelas10: 197,
    kelas11: 160,
    kelas12: 140,
    kelas13: 150,
  },
  {
    date: "2024-05-14",
    kelas10: 448,
    kelas11: 490,
    kelas12: 500,
    kelas13: 510,
  },
  {
    date: "2024-05-15",
    kelas10: 473,
    kelas11: 380,
    kelas12: 450,
    kelas13: 460,
  },

  // June
  {
    date: "2024-06-01",
    kelas10: 178,
    kelas11: 200,
    kelas12: 190,
    kelas13: 200,
  },
  {
    date: "2024-06-02",
    kelas10: 470,
    kelas11: 410,
    kelas12: 450,
    kelas13: 460,
  },
  {
    date: "2024-06-03",
    kelas10: 103,
    kelas11: 160,
    kelas12: 120,
    kelas13: 130,
  },
  {
    date: "2024-06-04",
    kelas10: 439,
    kelas11: 380,
    kelas12: 410,
    kelas13: 420,
  },
  
  { date: "2024-06-05", kelas10: 88, kelas11: 140, kelas12: 130, kelas13: 140 },
  {
    date: "2024-06-06",
    kelas10: 294,
    kelas11: 250,
    kelas12: 260,
    kelas13: 270,
  },
  {
    date: "2024-06-07",
    kelas10: 323,
    kelas11: 370,
    kelas12: 340,
    kelas13: 350,
  },
  {
    date: "2024-06-08",
    kelas10: 385,
    kelas11: 320,
    kelas12: 310,
    kelas13: 320,
  },
  {
    date: "2024-06-09",
    kelas10: 438,
    kelas11: 480,
    kelas12: 450,
    kelas13: 460,
  },
  {
    date: "2024-06-10",
    kelas10: 155,
    kelas11: 200,
    kelas12: 170,
    kelas13: 180,
  },
];

const chartConfig = {
  views: {
    label: "Page Views",
  },
  kelas10: {
    label: "Kelas 10",
    color: "hsl(var(--chart-1))",
  },
  kelas11: {
    label: "Kelas 11",
    color: "hsl(var(--chart-2))",
  },
  kelas12: {
    label: "Kelas 12",
    color: "hsl(var(--chart-3))",
  },
  kelas13: {
    label: "Kelas 13",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export default function Charts1() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("kelas10");

  const total = React.useMemo(
    () => ({
      kelas10: chartData.reduce((acc, curr) => acc + curr.kelas10, 0),
      kelas11: chartData.reduce((acc, curr) => acc + curr.kelas11, 0),
      kelas12: chartData.reduce((acc, curr) => acc + curr.kelas12, 0),
      kelas13: chartData.reduce((acc, curr) => acc + curr.kelas12, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Grafik Pengumpulan Tugas</CardTitle>
          <CardDescription>
            Total pengumpulan dalam 3 bulan terkahir
          </CardDescription>
        </div>

        <div className="flex">
          {["kelas10", "kelas11", "kelas12", "kelas13"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>

      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
