import initThemeSettings from "./ThemeSettings";
import initLinksSettings from "./LinksSettings";
import initKeybindsSettings from "./KeybindsSettings";
import initImageSettings from "./ImageSettings";
import initJsonSettings from "./JsonSettings";
import initMiscSettings from "./MiscSettings";
import { LinkGroupDetails } from "../Links";
import { Theme } from "../Theme";
import { StringKeyObj } from "../../types/interfaces";
import { ImageState } from "../Image";
import { SearchEngine } from "../Search";

export type InitSettingsProps = {
  links: LinkGroupDetails[];
  theme: Theme;
  keybinds: StringKeyObj;
  imageState: ImageState;
  search: SearchEngine;
};

export default function init({
  links,
  theme,
  keybinds,
  imageState,
  search,
}: InitSettingsProps) {
  const themeSection = initThemeSettings(theme);
  const linkSection = initLinksSettings(links);
  const keybindSection = initKeybindsSettings(keybinds);
  const imageSection = initImageSettings(imageState);
  const miscSection = initMiscSettings(search);
  const jsonSection = initJsonSettings();

  const sections = [
    themeSection,
    linkSection,
    keybindSection,
    imageSection,
    miscSection,
    jsonSection,
  ];
  sections.forEach((section) => section.render());
}
