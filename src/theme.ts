import type { MantineThemeOverride } from "@mantine/core";
import { fetchNui } from "./utils/fetchNui";

async function createTheme(theme: MantineThemeOverride): Promise<MantineThemeOverride> {
  const config = await fetchNui<Pick<MantineThemeOverride, 'primaryColor' | 'primaryShade'>>('getConfig');
  return {...config, ...theme};
}

export default createTheme;
