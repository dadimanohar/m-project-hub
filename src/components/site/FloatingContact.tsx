import { Phone } from "lucide-react";
import { business } from "@/content/site";

export function FloatingContact() {
  const whatsappUrl = `${business.whatsapp}?text=${encodeURIComponent(
    "Hello AVR Web Consulting, I would like to discuss your services."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 md:bottom-8 md:right-8">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-[50px] w-[50px] md:h-[56px] md:w-[56px] items-center justify-center rounded-full bg-transparent transition-transform duration-300 hover:scale-[1.08] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.25))" }}
      >
        <picture>
          <source srcSet="/whatsapp-logo.webp" type="image/webp" />
          <img 
            src="/whatsapp-logo.png" 
            alt="Chat on WhatsApp" 
            width={56}
            height={56}
            className="h-full w-full object-contain border-none p-0 bg-transparent" 
          />
        </picture>
      </a>
      <a
        href={business.phoneHref}
        aria-label="Call us"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
    </div>
  );
}
