import { Chip, MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Chip defaultChecked>Awesome chip</Chip>
    </MantineProvider>
  );
}

export default App;
