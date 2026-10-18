import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { dentalSeo } from "@/content/pages/seo";

export const Route = createFileRoute("/seo-services/dental-seo-services")({
  head: () => pageHead(dentalSeo),
  component: () => <PageTemplate page={dentalSeo} />,
});
