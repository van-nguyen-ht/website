// Typography Scale
export const typography = {
  // Headlines
  "headline-1": {
    size: "text-[20vw] md:text-[15vw]", // Hero text
    weight: "font-light",
    lineHeight: "leading-[0.9]",
    tracking: "tracking-normal",
    color: "text-[#FFB199]", // Salmon pink
  },
  "headline-2": {
    size: "text-[40px]", // Changed from text-[2rem] to text-[40px]
    weight: "font-normal", // Changed from font-light to font-normal
    lineHeight: "leading-tight",
    tracking: "tracking-normal",
    color: "text-white dark:text-[#1a2634]",
  },
  "headline-3": {
    size: "text-2xl", // Changed from text-xl to text-2xl (24px)
    weight: "font-normal", // Changed from font-medium to font-normal
    lineHeight: "leading-normal",
    tracking: "tracking-normal",
    color: "text-white dark:text-[#1a2634]",
  },

  // New title style
  title: {
    size: "text-[14px]",
    weight: "font-semibold",
    lineHeight: "leading-normal",
    tracking: "tracking-normal",
    color: "text-white dark:text-[#1a2634]",
  },

  // Body Text
  bodyLarge: {
    size: "text-lg", // 18px
    weight: "font-normal",
    lineHeight: "leading-relaxed",
    tracking: "tracking-normal",
    color: "text-[#cbd5e0] dark:text-[#2d403b]",
  },
  bodyDefault: {
    size: "text-sm", // 14px
    weight: "font-normal",
    lineHeight: "leading-[150%]",
    tracking: "tracking-[0.04em]",
    color: "text-[#cbd5e0] dark:text-[#2d403b]",
  },
  bodySmall: {
    size: "text-sm", // 14px
    weight: "font-normal",
    lineHeight: "leading-normal",
    tracking: "tracking-normal",
    color: "text-[#cbd5e0] dark:text-[#2d403b]",
  },

  // Special Text
  nav: {
    size: "text-[15px]",
    weight: "font-medium",
    lineHeight: "leading-none",
    tracking: "tracking-normal",
    color: "text-white",
  },
  badge: {
    size: "text-sm",
    weight: "font-normal",
    lineHeight: "leading-none",
    tracking: "tracking-normal",
    color: "text-white",
  },
}

// Spacing Scale (in pixels, converted to rem)
export const spacing = {
  section: {
    marginTop: "mt-32", // 128px
    marginBottom: "mb-16", // 64px
  },
  contentBlock: {
    marginTop: "mt-24", // 96px
    marginBottom: "mb-12", // 48px
  },
  paragraph: {
    marginTop: "mt-6", // 24px
    marginBottom: "mb-6", // 24px
  },
  listItem: {
    marginTop: "mt-2", // 8px
    marginBottom: "mb-2", // 8px
  },
  headerSpacing: {
    padding: "px-8 py-4", // 32px horizontal, 16px vertical
  },
}
