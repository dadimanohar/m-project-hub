import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { realEstateSeo } from "@/content/pages/seo";

export const Route = createFileRoute("/seo-services/real-estate-seo-services")({
  head: () => pageHead(realEstateSeo),
  component: () => <PageTemplate page={realEstateSeo} />,
});
