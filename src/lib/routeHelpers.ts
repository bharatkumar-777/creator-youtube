import { TabConfig, tabs } from './tabsConfig';

/**
 * Converts a label like "Compress Video" to a URL slug like "compress-video"
 */
export function labelToSlug(label: string): string {
  return label
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Gets the base path for a tab config (e.g., "/video")
 */
export function getBasePath(tab: TabConfig): string {
  return tab.href;
}

/**
 * Generates the full route for an option within a tab
 * e.g., "/video/compress-video"
 */
export function getOptionRoute(tab: TabConfig, optionLabel: string): string {
  const basePath = getBasePath(tab);
  const slug = labelToSlug(optionLabel);
  return `${basePath}/${slug}`;
}

/**
 * Finds a tab config by its href
 */
export function findTabByHref(href: string): TabConfig | undefined {
  return tabs.find((tab: TabConfig) => tab.href === href);
}

/**
 * Finds an option within a tab by its label
 */
export function findOptionByLabel(tab: TabConfig, label: string) {
  return tab.options.find((opt) => opt.label === label);
}

