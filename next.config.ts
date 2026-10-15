import type { NextConfig } from "next";
import createMdx from "@next/mdx";

const nextConfig: NextConfig = {
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	output: "export",
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
	experimental: {
		optimizePackageImports: ["lucide-react", "@radix-ui/react-slot"],
	},
};

const withMdx = createMdx({
	// Add markdown plugins here, as desired
});

export default withMdx(nextConfig);
