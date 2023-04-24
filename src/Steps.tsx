import { createStyles, rem, Stepper } from "@mantine/core";
import { PropsWithChildren, useState } from "react";
import desktopBgSidebar from "./assets/images/bg-sidebar-desktop.svg";
import mobileBgSidebar from "./assets/images/bg-sidebar-mobile.svg";

const useStyles = createStyles((theme) => ({
  mobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: rem(174),
    background: `url(${mobileBgSidebar}) no-repeat center center`,
    backgroundSize: "cover",
    color: theme.white,
    [theme.fn.largerThan("md")]: {
      flex: "1 1 40%",
      height: "auto",
      background: `url(${desktopBgSidebar}) no-repeat center center`,
      borderRadius: theme.radius.md,
    },
  },
  steps: {
    [theme.fn.smallerThan('md')]: {
        flexDirection: 'row',
    }
  },
  verticalSeparator: {
    display: 'none'
  },
  separator: {
    display: 'none'
  },
  stepLabel: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    color: theme.colors.gray[5],
    [theme.fn.smallerThan('md')]: {
        display: 'none',
    }
  },
  stepDescription: {
    textTransform: 'uppercase',
    fontWeight: 700,
    color: theme.white,
    [theme.fn.smallerThan('md')]: {
        display: 'none',
    }
  },

  separatorActive: {
    borderColor: theme.white,
  },

  stepIcon: {
    borderColor: theme.colors.gray[4],
    backgroundColor: 'transparent',
    color: theme.colors.gray[4],
    "&[data-completed]": {
      color: theme.black,
      borderWidth: 0,
      borderColor: 'tranparent',
      backgroundColor: theme.colors.blue[5],
    },
    "&[data-progress]": {
      color: theme.white,
      borderColor: theme.white,
    },
  },
  step: {
    transition: "transform 150ms ease",

    "&[data-progress]": {
      transform: "scale(1.06)",
    },
    [theme.fn.smallerThan('md')]: {
        marginTop: 0
    }
  },
}));
export default function Steps({ children }: PropsWithChildren) {
  const { classes } = useStyles();
  const [active, setActive] = useState<number>(1);
  return (
    <aside className={classes.mobile}>
      <Stepper
        size={'sm'}
        active={active}
        classNames={classes}
        onStepClick={(step) => {setActive(step)}}
        orientation="vertical"
        breakpoint="sm"
      >
        <Stepper.Step label="Step 1" description="Your info" />
        <Stepper.Step label="Step 2" description="Select a plan" />
        <Stepper.Step label="Step 3" description="Add-ons" />
        <Stepper.Step label="Step 4" description="Summary" />
      </Stepper>
    </aside>
  );
}
