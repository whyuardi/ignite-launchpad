import Link from "next/link";

const navLinks = [
  { href: "/launchpad", label: "Launchpad" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/docs", label: "Docs" },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--color-bg)" }}>
      {/* Top Nav */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ borderColor: "var(--color-border)", background: "rgba(10, 10, 15, 0.8)", backdropFilter: "blur(16px)" }}
      >
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="IGNITE Home">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg font-bold" style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))", color: "#0a0a0f" }}>
              I
            </div>
            <span className="text-xl font-bold tracking-tight">IGNITE</span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Back to Home */}
          <Link href="/" className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-lg" style={{ background: "var(--color-accent)", color: "#0a0a0f" }}>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        {children}
      </main>
    </div>
  );
}
