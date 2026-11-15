import {
  contact,
  footer,
  navigation,
  pandit,
} from "@/config/panditData";
import MandalaMark from "./MandalaMark";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const links = navigation.filter((item) => item.enabled);

  return (
    <footer className="border-t border-ink/10">
      <div className="container-page py-20 md:py-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">{footer.eyebrow}</p>
            <p className="mt-6 max-w-xl font-serif text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.22] tracking-[-0.015em] text-ink">
              {footer.invitation}
            </p>
            <a
              href="#book"
              className="mt-8 inline-flex items-center gap-2.5 border-b border-ink/20 pb-1 text-[10.5px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-terracotta hover:text-terracotta"
            >
              {footer.cta}
              <svg
                width="13"
                height="13"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                aria-hidden="true"
              >
                <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" />
              </svg>
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
            <nav aria-label="Footer">
              <p className="text-[9px] uppercase tracking-[0.22em] text-ink/70">
                Explore
              </p>
              <ul className="mt-5 space-y-3">
                {links.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[13px] text-ink/70 transition-colors duration-300 hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#book"
                    className="text-[13px] text-ink/70 transition-colors duration-300 hover:text-ink"
                  >
                    Book a sitting
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-ink/70">
                Connect
              </p>
              <ul className="mt-5 space-y-3 text-[13px] leading-relaxed text-ink/70">
                <li>{pandit.location}</li>
                <li>{contact.hours}</li>
                {contact.phone ? (
                  <li>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="transition-colors duration-300 hover:text-ink"
                    >
                      {contact.phone}
                    </a>
                  </li>
                ) : null}
                {contact.email ? (
                  <li>
                    <a
                      href={`mailto:${contact.email}`}
                      className="transition-colors duration-300 hover:text-ink"
                    >
                      {contact.email}
                    </a>
                  </li>
                ) : null}
                {contact.whatsappNumber ? (
                  <li>
                    <a
                      href={`https://wa.me/${contact.whatsappNumber.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-ink"
                    >
                      WhatsApp
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-ink/10 pt-8 md:mt-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <a
              href="#top"
              className="flex items-center gap-3 text-ink transition-colors duration-300 hover:text-terracotta"
              aria-label={`${pandit.name} — back to top`}
            >
              <MandalaMark size={27} />
              <span className="font-serif text-[1.4rem] leading-none tracking-[-0.01em]">
                {pandit.name}
              </span>
            </a>
            <p className="max-w-md text-[10.5px] leading-[1.8] text-ink/70">
              {footer.disclaimer}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-[9px] uppercase tracking-[0.18em] text-ink/70 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {pandit.fullName}
            </p>
            <p>
              {footer.credit} · {footer.sentence}
            </p>
            <a
              href="#top"
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-ink sm:self-auto"
            >
              Back to top
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                aria-hidden="true"
              >
                <path d="M5 11V1M1 5l4-4 4 4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
