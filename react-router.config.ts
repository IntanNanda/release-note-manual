import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: false,
  basename: process.env.NODE_ENV === 'production' ? '/release-note-manual/' : undefined,
} satisfies Config;
