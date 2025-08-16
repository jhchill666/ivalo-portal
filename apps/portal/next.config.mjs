//@ts-check

import { composePlugins, withNx } from "@nx/next";

// See: https://nx.dev/recipes/next/next-config-setup
const nextConfig = {
  nx: {},
};

const plugins = [withNx];

export default composePlugins(...plugins)(nextConfig);
