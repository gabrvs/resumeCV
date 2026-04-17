import Link from "next/link";
import { FileText, Palette, Globe, Download } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse-soft" />
            Darmowy generator CV online
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-slide-up">
            <span className="gradient-text">Stwórz swoje</span>
            <br />
            <span className="text-foreground">idealne CV</span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "100ms" }}>
            Wypełnij formularz, wybierz szablon, przetłumacz na język obcy
            i pobierz gotowy dokument PDF w kilka minut.
          </p>

          <Link
            href="/builder"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-purple rounded-xl text-white font-bold text-lg shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105 active:scale-95 transition-all animate-slide-up"
            style={{ animationDelay: "200ms" }}
            id="start-creating-btn"
          >
            <FileText className="w-5 h-5" />
            Zacznij tworzyć CV
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Palette,
              title: "3 szablony",
              desc: "Klasyczny, Nowoczesny i Kreatywny — dopasuj wygląd do siebie.",
              color: "text-accent-light",
              bgColor: "bg-accent/10",
            },
            {
              icon: Globe,
              title: "Automatyczne tłumaczenie",
              desc: "Przetłumacz CV na angielski, niemiecki, francuski i inne.",
              color: "text-purple-light",
              bgColor: "bg-purple/10",
            },
            {
              icon: Download,
              title: "Eksport do PDF",
              desc: "Pobierz gotowy dokument PDF gotowy do wysłania pracodawcy.",
              color: "text-success",
              bgColor: "bg-success/10",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 hover:scale-105 transition-transform animate-slide-up"
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-muted-dark border-t border-border/50">
        <p>Interaktywny Generator CV &copy; {new Date().getFullYear()} — Kamil Jarmuż & Gabriel Jarosz</p>
      </footer>
    </main>
  );
}
