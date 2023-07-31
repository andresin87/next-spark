import { createTheme } from "@spark-ui/theme-utils";
import {
  Clementine,
  Blueberry,
  White,
  Plum,
  Nightshade,
  Avocado,
  Banana,
  Cherry,
  Extra,
} from "./brandPalette.js";

const partialPrivateTheme = {
  colors: {
    // Main
    main: `${Clementine[500]}`,
    onMain: `${White}`,
    mainFocused: `${Clementine[500]}`,
    mainHovered: `${Clementine[400]}`,
    mainPressed: `${Clementine[400]}`,

    // MainContainer
    mainContainer: `${Clementine[100]}`,
    onMainContainer: `${Clementine[700]}`,
    mainContainerFocused: `${Clementine[50]}`,
    mainContainerHovered: `${Clementine[500]}`,
    mainContainerPressed: `${Clementine[100]}`,

    // MainVariant
    mainVariant: `${Clementine[600]}`,
    onMainVariant: `${White}`,
    mainVariantFocused: `${Clementine[500]}`,
    mainVariantHovered: `${Clementine[500]}`,
    mainVariantPressed: `${Clementine[600]}`,

    // Support
    support: `${Blueberry[900]}`,
    onSupport: `${White}`,
    supportFocused: `${Blueberry[800]}`,
    supportHovered: `${Blueberry[800]}`,
    supportPressed: `${Blueberry[900]}`,

    // SupportContainer
    supportContainer: `${Blueberry[100]}`,
    onSupportContainer: `${Blueberry[900]}`,
    supportContainerFocused: `${Blueberry[50]}`,
    supportContainerHovered: `${Blueberry[50]}`,
    supportContainerPressed: `${Blueberry[100]}`,

    // SupportVariant
    supportVariant: `${Nightshade[600]}`,
    onSupportVariant: `${White}`,
    supportVariantFocused: `${Nightshade[500]}`,
    supportVariantHovered: `${Nightshade[500]}`,
    supportVariantPressed: `${Nightshade[600]}`,

    // Accent
    accent: `${Plum[500]}`,
    onAccent: `${White}`,
    accentFocused: `${Plum[400]}`,
    accentHovered: `${Plum[400]}`,
    accentPressed: `${Plum[500]}`,

    // AccentContainer
    accentContainer: `${Plum[100]}`,
    onAccentContainer: `${Plum[800]}`,
    accentContainerFocused: `${Plum[50]}`,
    accentContainerHovered: `${Plum[50]}`,
    accentContainerPressed: `${Plum[100]}`,

    // Basic
    basic: `${Blueberry[900]}`,
    onBasic: `${White}`,
    basicFocused: `${Blueberry[800]}`,
    basicHovered: `${Blueberry[800]}`,
    basicPressed: `${Blueberry[900]}`,

    // BasicContainer
    basicContainer: `${Blueberry[100]}`,
    onBasicContainer: `${Blueberry[900]}`,
    basicContainerFocused: `${Blueberry[50]}`,
    basicContainerHovered: `${Blueberry[50]}`,
    basicContainerPressed: `${Blueberry[100]}`,

    // Success
    success: `${Avocado[500]}`,
    onSuccess: `${White}`,
    successFocused: `${Avocado[400]}`,
    successHovered: `${Avocado[400]}`,
    successPressed: `${Avocado[500]}`,

    // SuccessContainer
    successContainer: `${Avocado[100]}`,
    onSuccessContainer: `${Avocado[700]}`,
    successContainerFocused: `${Avocado[50]}`,
    successContainerHovered: `${Avocado[50]}`,
    successContainerPressed: `${Avocado[100]}`,

    // Alert
    alert: `${Banana[500]}`,
    onAlert: `${Nightshade[900]}`,
    alertFocused: `${Banana[400]}`,
    alertHovered: `${Banana[400]}`,
    alertPressed: `${Banana[500]}`,

    // AlertContainer
    alertContainer: `${Banana[100]}`,
    onAlertContainer: `${Banana[700]}`,
    alertContainerFocused: `${Banana[50]}`,
    alertContainerHovered: `${Banana[50]}`,
    alertContainerPressed: `${Banana[100]}`,

    // Error
    error: `${Cherry[500]}`,
    onError: `${White}`,
    errorFocused: `${Cherry[400]}`,
    errorHovered: `${Cherry[400]}`,
    errorPressed: `${Cherry[500]}`,

    // ErrorContainer
    errorContainer: `${Cherry[100]}`,
    onErrorContainer: `${Cherry[700]}`,
    errorContainerFocused: `${Cherry[50]}`,
    errorContainerHovered: `${Cherry[50]}`,
    errorContainerPressed: `${Cherry[100]}`,

    // Info
    info: `${Blueberry[500]}`,
    onInfo: `${White}`,
    infoFocused: `${Blueberry[400]}`,
    infoHovered: `${Blueberry[500]}`,
    infoPressed: `${Blueberry[500]}`,

    // InfoContainer
    infoContainer: `${Blueberry[100]}`,
    onInfoContainer: `${Blueberry[700]}`,
    infoContainerFocused: `${Blueberry[50]}`,
    infoContainerHovered: `${Blueberry[50]}`,
    infoContainerPressed: `${Blueberry[100]}`,

    // Neutral
    neutral: `${Nightshade[500]}`,
    onNeutral: `${White}`,
    neutralFocused: `${Nightshade[400]}`,
    neutralHovered: `${Nightshade[400]}`,
    neutralPressed: `${Nightshade[500]}`,

    // NeutralContainer
    neutralContainer: `${Nightshade[100]}`,
    onNeutralContainer: `${Nightshade[700]}`,
    neutralContainerFocused: `${Nightshade[50]}`,
    neutralContainerHovered: `${Nightshade[50]}`,
    neutralContainerPressed: `${Nightshade[100]}`,

    // Background
    background: `${White}`,
    onBackground: `${Blueberry[900]}`,

    // BackgroundVariant
    backgroundVariant: `${Extra["nightshade-25"]}`,
    onBackgroundVariant: `${Blueberry[900]}`,

    // Surface
    surface: `${White}`,
    onSurface: `${Blueberry[900]}`,
    surfaceFocused: `${Blueberry[50]}`,
    surfaceHovered: `${Blueberry[50]}`,
    surfacePressed: `${White}`,

    // Surface Inverse
    surfaceInverse: `${Blueberry[900]}`,
    onSurfaceInverse: `${White}`,
    surfaceInverseFocused: `${Blueberry[800]}`,
    surfaceInverseHovered: `${Blueberry[800]}`,
    surfaceInversePressed: `${Blueberry[900]}`,

    // Outline
    outline: `${Nightshade[300]}`,
    outlineHigh: `${Blueberry[900]}`,
    outlineFocused: `${Nightshade[200]}`,
    outlineHovered: `${Nightshade[200]}`,
    outlinePressed: `${Nightshade[300]}`,

    // Overlay
    overlay: `${Nightshade[900]}`,
    onOverlay: `${White}`,
  },
};

export const privateTheme = createTheme(partialPrivateTheme);
