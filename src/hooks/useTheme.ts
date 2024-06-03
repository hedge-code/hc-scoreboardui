import { useEffect, useState } from "react";
import { MantineThemeOverride } from "@mantine/core";
import createTheme from "../theme";

export default function useTheme(themeOverride: MantineThemeOverride) {
  const [theme, setTheme] = useState<MantineThemeOverride>({
    primaryColor: 'blue',
    primaryShade: 6,
  });

  useEffect(() => {
    createTheme(themeOverride).then((data) => setTheme(data));
  }, []);

  return theme
}
