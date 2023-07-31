import { createTheme } from "@spark-ui/theme-utils";

import { privateTheme } from "./light.js";

export const proTheme = createTheme({
  colors: {
    ...privateTheme.colors,
    primary: "#0F6CBD",
    primaryContainer: "#E7F3FD",
    primaryVariant: "#0B518E",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#0B518E",
    onPrimaryVariant: "#FFFFFF",
    // states
    primaryHovered: "#429FF0",
    primaryPressed: "#429FF0",
    primaryVariantHovered: "#1388EC",
    primaryVariantPressed: "#1388EC",
    primaryContainerHovered: "#E7F3FD",
    primaryContainerPressed: "#E7F3FD",
    primaryDisabled: "#E7F3FD",
    primaryVariantDisabled: "#E7F3FD",
    primaryContainerDisabled: "#E7F3FD",
    primaryFocused: "#0F6CBD",
    primaryVariantFocused: "#0B518E",
    primaryContainerFocused: "#E7F3FD",
  },
});
