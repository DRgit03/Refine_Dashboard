import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@mui/material";

//import interfaces for typescript
import { PieChartProps } from "interfaces/home";

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
    return (
        //if you want to style the cards you can do that inside the box
        <Box
            id="chart"
            flex={1}
            display="flex"
            bgcolor="#fcfcfc"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            //padding left
            pl={3.5}
            //padding vertical axis of 2
            py={2}
            //gap 2
            gap={2}
            borderRadius="15px"
            //minimum height
            minHeight="110px"
            width="fit-content"
        >
            <Stack direction="column">
                <Typography fontSize={14} color="#808191">
                    {title}
                </Typography>
                <Typography
                    fontSize={24}
                    color="#11142d"
                    fontWeight={700}
                    mt={1}
                >
                    {value}
                </Typography>
            </Stack>

            <ReactApexChart
                options={{
                    chart: { type: "donut" },
                    colors,
                    legend: { show: false },
                    dataLabels: { enabled: false },
                }}
                series={series}
                type="donut"
                width="120px"
            />
        </Box>
    );
};

export default PieChart;
