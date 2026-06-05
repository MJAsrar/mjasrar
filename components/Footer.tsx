import { GithubIcon, LinkedInIcon, XIcon, MailIcon } from "@/lib/icons";

const SOCIAL = [
  { href: "https://github.com/MJAsrar/mjasrar",                  icon: "gh",   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/junaid-asrar-88671b226/", icon: "li",   label: "LinkedIn" },
  { href: "https://x.com/_mjasrar_",                             icon: "x",    label: "X"        },
  { href: "mailto:junaidasrar04@gmail.com",                      icon: "mail", label: "Email"    },
];

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "gh")   return <GithubIcon />;
  if (icon === "li")   return <LinkedInIcon />;
  if (icon === "x")    return <XIcon />;
  return <MailIcon />;
}

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        padding: "48px 0 36px",
        background: "var(--bg-deep)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em" }}>Junaid Asrar</span>
          <span style={{ fontSize: 13, color: "var(--mute)" }}>AI Engineer · Builder · Founder</span>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          {SOCIAL.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="link-icon"
              style={{
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 9,
                border: "1px solid var(--line-2)",
                background: "rgba(255,255,255,0.02)",
                color: "var(--mute)",
                transition: "color 140ms ease, border-color 140ms ease, background 140ms ease",
              }}
            >
              <SocialIcon icon={icon} />
            </a>
          ))}
        </div>

        <div
          style={{
            width: "100%",
            paddingTop: 24,
            borderTop: "1px solid var(--line)",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 11.5,
            color: "var(--mute-2)",
          }}
        >
          © 2026 Junaid Asrar · Islamabad, Pakistan
        </div>
      </div>
    </footer>
  );
}
