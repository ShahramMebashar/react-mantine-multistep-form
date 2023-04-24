import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    title: {
        marginBottom: theme.spacing.sm,
        marginTop: 0,
        fontSize: rem(28),
        [theme.fn.largerThan('md')]: {
            fontSize: theme.fontSizes.xxl,
        }
    }
}));

export default useStyles;