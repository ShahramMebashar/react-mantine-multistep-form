import { Box, Container, Paper, Stepper, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import useStyles from "./formStyle";
import FormActions from "./FromActions";

export default function Form() {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: { name: "", email: "", phone: "" },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) =>
        value.length < 10 ? "You must be at least 18 to register" : null,
    },
  });

  return (
    <>
      <Container
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: {
              borderRadius: theme.radius.md,
              background: theme.white,
              padding: theme.spacing.xl,
              transform: "translateY(-10%)",
              boxShadow: theme.shadows.lg,
            },
          })}
        >
          <Text
            component="h2"
            className={classes.title}
            mb="xs"
            color="pastelBlue.10"
          >
            Personal info
          </Text>
          <Text color="dimmed" weight={500}>
            Please provide your name, email address, and phone number.
          </Text>
          <Box mt={{ base: 32, md: 48 }}>
            <form onSubmit={form.onSubmit(console.log)}>
              <TextInput
                label="Name"
                placeholder="e.g Shahram Hassan"
                {...form.getInputProps("name")}
              />
              <TextInput
                mt="md"
                label="Email Address"
                placeholder="e.g shahram.webdev@gmail.com"
                {...form.getInputProps("email")}
              />
              <TextInput
                mt="md"
                label="Phone Nuber"
                placeholder="e.g +9647508853530"
                {...form.getInputProps("phone")}
              />
            </form>
          </Box>
        </Box>
      </Container>
      <Paper mt={{ base: "auto", md: "xl" }} p="lg">
        <FormActions />
      </Paper>
    </>
  );
}
