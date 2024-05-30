import { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const LogWorkout = () => {
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { date, type, duration, notes };
    const existingData = JSON.parse(localStorage.getItem("workoutData")) || [];
    existingData.push(newWorkout);
    localStorage.setItem("workoutData", JSON.stringify(existingData));
    toast({
      title: "Workout logged.",
      description: "Your workout has been successfully logged.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setDate("");
    setType("");
    setDuration("");
    setNotes("");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl" textAlign="center">
          Log Your Workout
        </Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="date" isRequired>
              <FormLabel>Date</FormLabel>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </FormControl>
            <FormControl id="type" isRequired>
              <FormLabel>Type of Exercise</FormLabel>
              <Input type="text" value={type} onChange={(e) => setType(e.target.value)} />
            </FormControl>
            <FormControl id="duration" isRequired>
              <FormLabel>Duration (minutes)</FormLabel>
              <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </FormControl>
            <FormControl id="notes">
              <FormLabel>Additional Notes</FormLabel>
              <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
            </FormControl>
            <Button colorScheme="teal" type="submit" size="lg" width="100%">
              Log Workout
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default LogWorkout;