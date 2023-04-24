import { MantineThemeOverride, rem } from "@mantine/core";

const theme: MantineThemeOverride = {
  fontFamily: "Ubuntu, Verdana, sans-serif",
  fontSizes: {
    xxl: "2.25rem",
  },
  components: {
    InputWrapper: {
      styles: (theme) => ({
        label: {
          color: theme.colors.coolGray,
          marginBottom: rem(6),
        },
      }),
    },
    Input: {
      styles: (theme) => ({
        input: {
          borderColor: theme.colors.gray[3],
          color: theme.colors.purplishBlue,
          fontWeight: "bold",
          borderRadius: theme.radius.md,
          minHeight: rem(40),
          ":focus": {
            borderColor: theme.colors.violet,
          },
        },
      }),
    },
  },
  colors: {
    marinBlue: [
      "#1F3A5B",
      "#16345A",
      "#0C2E59",
      "#02295A",
      "#0A2649",
      "#0E233C",
      "#112032",
      "#121D2A",
      "#131A24",
      "#12181F",
    ],
    purplishBlue: [
      "#BEBBE9",
      "#9B96E8",
      "#746DEF",
      "#473DFF",
      "#3D34E8",
      "#372FD1",
      "#3E38AE",
      "#423D92",
      "#423F7C",
      "#403E6A",
    ],
    pastelBlue: [
      "#DCE2FB",
      "#ADBEFF",
      "#8FA3F3",
      "#798FE2",
      "#697ECF",
      "#5D71BB",
      "#5566A8",
      "#546090",
      "#546090",
      "#546090",
    ],
    strawberyRed: [
      "#DCA6AC",
      "#DA858E",
      "#DF606D",
      "#ED3548",
      "#D62F40",
      "#B43744",
      "#973C46",
      "#803F45",
      "#6D3E43",
      "#5E3C40",
    ],
    coolGray: [
      "#D3D4D8",
      "#BEBFC7",
      "#AAACB8",
      "#9699AB",
      "#87899A",
      "#797C8B",
      "#6E707C",
      "#65666E",
      "#5B5C62",
      "#535458",
    ],
  },
  primaryColor: "purplishBlue",
  primaryShade: 9,
};

export default theme;
