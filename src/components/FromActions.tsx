import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Paper,
  Text,
  UnstyledButton,
} from "@mantine/core";
export interface FormActionsProps {
  showBackButton?: boolean;
  onNext?: () => void;
  onBack?: () => void;
}
export default function FormActions({
  onNext,
  onBack,
  showBackButton = false,
}: FormActionsProps) {
  return (
    <Flex align='center' justify={showBackButton ? 'space-between' : 'flex-end'}>
      {showBackButton && (
        <Button
          onClick={onBack}
          unstyled
          sx={(theme) => ({
            color: theme.colors.gray[5],
            cursor: "pointer",
            border: "none",
            outline: "none",
            background: "none",
            fontWeight: "bold",
            "&:not([data-disabled])": theme.fn.hover({
              color: theme.colors.gray[8],
            }),
          })}
        >
          Go Back
        </Button>
      )}
      <Button type="submit" onClick={onNext} size='md'>
        Next Step
      </Button>
    </Flex>
  );
}
