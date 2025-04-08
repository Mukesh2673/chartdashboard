import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Custom plugin to display percentage on top of bars
const percentagePlugin = {
  id: "percentagePlugin",
  afterDatasetsDraw: (chart) => {
    const {
      ctx,
      data,
      chartArea: { top, bottom },
      scales: { x, y },
    } = chart;

    ctx.save();
    ctx.font = "bold 12px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";

    data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      meta.data.forEach((bar, index) => {
        const value = dataset.data[index];
        ctx.fillText(`${value}%`, bar.x, bar.y - 5);
      });
    });

    ctx.restore();
  },
};

const Dashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Traditional Collections",
        data: [40, 60, 80, 100, 50, 70],
        backgroundColor: [
          "rgba(0, 128, 0, 0.6)", // Green for Jan
          "rgba(0, 0, 255, 0.6)", // Blue for Feb
          "rgba(255, 165, 0, 0.6)", // Orange for Mar
          "rgba(255, 0, 0, 0.6)", // Red for Apr
          "rgba(128, 0, 128, 0.6)", // Purple for May
          "rgba(0, 255, 255, 0.6)", // Cyan for Jun
        ],
        borderColor: [
          "rgba(0, 128, 0, 1)",
          "rgba(0, 0, 255, 1)",
          "rgba(255, 165, 0, 1)",
          "rgba(255, 0, 0, 1)",
          "rgba(128, 0, 128, 1)",
          "rgba(0, 255, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      percentagePlugin,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: isSmallScreen ? 10 : 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 120,
        ticks: {
          stepSize: 20,
          callback: (value) => `${value}%`,
          font: {
            size: isSmallScreen ? 10 : 12,
          },
        },
        grid: {
          display: false,
        },
      },
    },
    barThickness: 40, // Increased from 20 to 40 to make bars wider
    categoryPercentage: 0.7, // Slightly increased to allow more space for wider bars
    barPercentage: 0.9, // Increased to make bars fill more of the category space
  };

  const metrics = [
    {
      label: "Total Collections",
      value: "$2.45M",
      change: "+15%",
      changeColor: "success.main",
    },
    {
      label: "Recovery Rate",
      value: "58%",
      change: "+8%",
      changeColor: "success.main",
    },
    {
      label: "Avg Resolution Time",
      value: "18 days",
      change: "-22%",
      changeColor: "error.main",
    },
    {
      label: "Customer Satisfaction",
      value: "4.2/5",
      change: "+0.6",
      changeColor: "success.main",
    },
  ];

  return (
    <Box sx={{ p: 3, backgroundColor: "#e5e7eb", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Executive Dashboard
        </Typography>

        <Typography variant="body2" color="text.secondary">
          High-level performance metrics and trend analysis for decision makers
        </Typography>
      </Box>

      {/* Metric Cards */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 4,
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {metrics.map((metric, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "100%", md: "22%" },
              backgroundColor: "#fff",
              borderRadius: 2,
              boxShadow: 1,
              p: 2,
            }}
          >
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {metric.label}
              </Typography>
              <Typography variant="h5" sx={{ mt: 1, fontWeight: 600 }}>
                {metric.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 0.5,
                  color: metric.changeColor,
                  backgroundColor:
                    metric.changeColor === "error.main"
                      ? "rgba(255, 0, 0, 0.1)"
                      : "rgba(0, 128, 0, 0.1)",
                  display: "inline-block",
                  px: 1,
                  py: 0.2,
                  borderRadius: 12,
                  fontSize: 12,
                }}
              >
                {metric.change}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Chart Section */}
      <Card
        sx={{
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 1,
          p: 2,
          height: { xs: "300px", md: "400px" },
        }}
      >
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            AI-Assisted Collections
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Traditional Collections
          </Typography>
          <Box sx={{ width: "100%", height: "100%" }}>
            <Bar data={data} options={options} plugins={[percentagePlugin]} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;
