import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate, pageHead } from "@/components/site/PageTemplate";
import { carDealershipSeo } from "@/content/pages/seo";

export const Route = createFileRoute("/seo-services/car-dealership-seo")({
  head: () => pageHead(carDealershipSeo),
  component: () => <PageTemplate page={carDealershipSeo} />,
});
