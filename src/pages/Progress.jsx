import { useState, useEffect } from "react";
import { Container, Heading, VStack, Box } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Progress = () => {
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    // Fetch workout data from local storage or server
    const data = JSON.parse(localStorage.getItem("workoutData")) || [];
    setWorkoutData(data);
  }, []);

  const chartData = {
    labels: workoutData.map((workout) => workout.date),
    datasets: [
      {
        label: "Workout Duration (minutes)",
        data: workoutData.map((workout) => workout.duration),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl" textAlign="center">
          Your Progress
        </Heading>
        <Box width="100%">
          <Line data={chartData} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Progress;