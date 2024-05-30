import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to FitTrack
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your ultimate fitness tracking app. Track your workouts, monitor your progress, and stay motivated!
        </Text>
        <Box display="flex" justifyContent="space-around" width="100%" mt={8}>
          <Button leftIcon={<FaRunning />} colorScheme="teal" variant="solid" size="lg">
            Track Run
          </Button>
          <Link to="/log-workout">
            <Button leftIcon={<FaDumbbell />} colorScheme="teal" variant="solid" size="lg">
              Log Workout
            </Button>
          </Link>
          <Button leftIcon={<FaHeartbeat />} colorScheme="teal" variant="solid" size="lg">
            Monitor Health
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;