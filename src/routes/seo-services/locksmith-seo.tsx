import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { locksmithSeo } from "@/content/pages/seo";

export const Route = createFileRoute("/seo-services/locksmith-seo")({
  head: () => pageHead(locksmithSeo),
  component: () => <PageTemplate page={locksmithSeo} />,
});
