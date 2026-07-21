// src/components/admin/dashboard/ConversionRateChart.tsx
"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

interface ConversionRateChartProps {
  data: Array<{ date: string; rate: number }>;
}

export default function ConversionRateChart({ data }: ConversionRateChartProps) {
  const chartData = {
    labels: data?.map((d) => d.date),
    datasets: [
      {
        label: "Conversion Rate %",
        data: data?.map((d) => d.rate),
        borderColor: "rgb(168, 85, 247)", // purple-500
        backgroundColor: "rgba(168, 85, 247, 0.15)",
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "rgb(168, 85, 247)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" as const },
      title: { display: false },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.parsed.y.toFixed(2)}%`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "rgb(156 163 175)" }, // gray-400
      },
      y: {
        min: 0,
        max: 100,
        grid: { color: "rgba(0,0,0,0.05)" },
        ticks: {
          callback: (value: any) => `${value}%`,
          stepSize: 20,
        },
      },
    },
  };

  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="w-5 h-5 text-purple-600" />
          Test Drive → Purchase Conversion (7 Days)
        </CardTitle>
      </CardHeader>
      <CardContent className="h-64 md:h-80">
        <Line data={chartData} options={options} />
      </CardContent>
    </Card>
  );
}