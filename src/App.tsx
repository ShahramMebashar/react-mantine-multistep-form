import { Box, createStyles, Flex, Paper, rem } from "@mantine/core";
import Form from "./components/Form";
import FormActions from "./components/FromActions";
import Steps from "./Steps";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "start",
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[1],
    ...theme.fn.cover(),
    [theme.fn.largerThan("md")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  inner: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    [theme.fn.largerThan("md")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      maxWidth: rem(920),
      margin: "auto auto",
      height: "auto",
      minHeight: rem(500),
      borderRadius: theme.radius.md,
      background:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      boxShadow: theme.shadows.lg,
      overflow: "hidden",
      padding: theme.spacing.sm,
    },
  },
  box: {
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    // margin: 'auto auto',
    maxWidth: rem(920),
    width: "100%",
  },
}));

function App() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <Steps />
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
            [theme.fn.largerThan("md")]: {
              height: "auto",
              padding: `1rem ${rem(64)}`,
            },
          })}
        >
          <Form />
        </Box>
      </div>
    </div>
  );
}

export default App;
