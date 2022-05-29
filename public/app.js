import Swup from "swup";
import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupSlideTheme from "@swup/slide-theme";
import SwupScriptsPlugin from '@swup/scripts-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';

const swup = new Swup({
  plugins: [
    new SwupA11yPlugin(), 
    new SwupHeadPlugin(), 
    new SwupScriptsPlugin(),
    new SwupPreloadPlugin(),
    new SwupSlideTheme()
  ],
});