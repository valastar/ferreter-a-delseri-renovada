import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Truck, Users, Wallet, ShieldCheck, MapPin, Facebook, Instagram, Hammer, Zap, Droplets, PaintBucket, Lightbulb, Snowflake, Wrench, HardHat, ArrowRight, Gift } from "lucide-react";

const IMG = (id: string, w = 1920, ext = "jpg") => `https://irp.cdn-website.com/2b22756d/dms3rep/multi/opt/${id}-${w}w.${ext}`;
const LOGO = IMG("155", 770);
const HERO = IMG("170");
const WA = "https://wa.me/5216621719152?text=%C2%A1Hola!%2C%20%C2%BFme%20podr%C3%ADan%20mandar%20una%20cotizaci%C3%B3n%20sobre%20sus%20productos%3F";
const WA_ANZA = "https://wa.me/5216628475320?text=%C2%A1Hola!%2C%20%C2%BFme%20podr%C3%ADan%20mandar%20una%20cotizaci%C3%B3n%20sobre%20sus%20productos%3F";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Del Seri Ferretería | Ferretería y material de construcción en Hermosillo" },
      { name: "description", content: "Ferretería 100% sonorense desde 2002. Materiales de construcción, plomería, eléctrico, pintura y más. Entrega a domicilio sin costo en Hermosillo." },
      { property: "og:title", content: "Del Seri Ferretería · Hermosillo, Sonora" },
      { property: "og:description", content: "Todo para tu obra, de principio a fin. Entrega sin costo en todo Hermosillo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Index,
});

const categories = [
  { icon: HardHat, name: "Construcción" }, { icon: Droplets, name: "Plomería" },
  { icon: Zap, name: "Eléctrico" }, { icon: PaintBucket, name: "Pintura e impermeabilizantes" },
  { icon: Lightbulb, name: "Iluminación" }, { icon: Hammer, name: "Herramientas" },
  { icon: Snowflake, name: "Refrigeración y minisplit" }, { icon: Wrench, name: "Ferretería en general" },
];
const brands = "OSEL · GENERAL PAINT · CDC · SIEMENS · RILEZ · CEMEX · THERMOTEK · TRUPER · DEWALT · 3M · DEACERO · CEMENT BOND · ROTOPLAS · FAMA · COFLEX · CNX · MÜLLER · YESO MÁXIMO · CREST · ALMEC · SANTUL · FANDELI · VVP · PRODUCTOS MF";
const payments = ["Efectivo", "Visa", "Mastercard", "AMEX", "Transferencia / SPEI", "PayPal", "Mercado Pago", "Apple Pay", "CoDi", "Oxxo", "Vales", "Mejoravit", "Coppel"];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Top bar */}
      <div className="bg-ink text-ink-foreground text-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
          <span className="flex items-center gap-2"><Truck className="size-4 text-accent" /> Entrega a domicilio <b>sin costo</b> en todo Hermosillo</span>
          <div className="flex items-center gap-4">
            <a href="tel:6622528421" className="flex items-center gap-1 hover:text-accent"><Phone className="size-4" /> 662-252-8421</a>
            <a href="https://facebook.com/ferreteriadelserimx" aria-label="Facebook" className="hover:text-accent"><Facebook className="size-4" /></a>
            <a href="https://instagram.com/ferreteriadelserimx/" aria-label="Instagram" className="hover:text-accent"><Instagram className="size-4" /></a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <img src={LOGO} alt="Del Seri Ferretería" className="h-14 w-auto" />
          <nav className="hidden gap-8 font-display text-lg font-semibold uppercase tracking-wide md:flex">
            <a href="#productos" className="hover:text-primary">Productos</a>
            <a href="#nosotros" className="hover:text-primary">Nosotros</a>
            <a href="#beneficios" className="hover:text-primary">Beneficios</a>
            <a href="#sucursales" className="hover:text-primary">Sucursales</a>
          </nav>
          <a href={WA} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-display text-lg font-bold uppercase text-primary-foreground transition hover:bg-primary/90">
            Cotizar <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={HERO} alt="Sucursal Del Seri Ferretería" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-fade" />
        <div className="mx-auto max-w-7xl px-4 py-24 md:py-36">
          <p className="mb-4 inline-block rounded-sm bg-accent px-3 py-1 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground">Red Construrama · Desde 2002</p>
          <h1 className="max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] text-ink-foreground md:text-7xl">
            Todo para tu obra, <span className="text-primary">de principio a fin.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-foreground/85">
            Ferretería y material de construcción en Hermosillo, Sonora. Asesoría experta y entrega sin costo hasta tu obra.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WA} className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-3.5 font-display text-xl font-bold uppercase text-ink-foreground transition hover:brightness-110">
              <MessageCircle className="size-5" /> Cotiza por WhatsApp
            </a>
            <a href="tel:6622528421" className="inline-flex items-center gap-2 rounded-md border-2 border-ink-foreground/70 px-6 py-3.5 font-display text-xl font-bold uppercase text-ink-foreground transition hover:bg-ink-foreground hover:text-ink">
              <Phone className="size-5" /> Llamar ahora
            </a>
          </div>
        </div>
      </section>
      <div className="stripe-band h-2" />

      {/* Stats */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {[["+20", "años de experiencia"], ["2", "sucursales en Hermosillo"], ["$0", "costo de entrega"], ["100%", "empresa sonorense"]].map(([n, l]) => (
            <div key={l}><div className="font-display text-5xl font-extrabold">{n}</div><div className="text-sm uppercase tracking-wide opacity-80">{l}</div></div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="productos" className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle kicker="Amplio surtido" title="Lo que encuentras en Del Seri" />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map(({ icon: Icon, name }) => (
            <a key={name} href={WA} className="group rounded-lg border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-card">
              <Icon className="size-9 text-primary" />
              <div className="mt-4 font-display text-xl font-bold uppercase leading-tight">{name}</div>
              <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary">Cotizar <ArrowRight className="size-3" /></div>
            </a>
          ))}
        </div>
      </section>

      {/* About with real photos */}
      <section id="nosotros" className="bg-muted">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            <img src={IMG("194", 770)} alt="Personal Del Seri atendiendo" className="col-span-2 aspect-[16/9] w-full rounded-lg object-cover" />
            <img src={IMG("195", 770)} alt="Asesor en mostrador" className="aspect-square w-full rounded-lg object-cover" />
            <img src={IMG("193", 770)} alt="Interior de la ferretería" className="aspect-square w-full rounded-lg object-cover" />
          </div>
          <div>
            <SectionTitle kicker="Nosotros" title="Personal que sabe de ferretería" />
            <p className="mt-6 text-lg text-muted-foreground">
              Somos una empresa 100% sonorense fundada en Hermosillo en 2002 y parte de la red Construrama. Cubrimos tu proyecto residencial, comercial o industrial, y el mantenimiento de casas, oficinas y negocios.
            </p>
            <ul className="mt-8 space-y-4">
              {[[Users, "Orientación personalizada", "Te recomendamos lo correcto según tu necesidad."], [Wallet, "Para todo presupuesto", "Ama de casa, maestro de obra, contratista o arquitecto."], [Truck, "Entrega sin costo", "Cobertura en toda la ciudad de Hermosillo."]].map(([Icon, t, d]) => {
                const I = Icon as typeof Users;
                return (
                  <li key={t as string} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground"><I className="size-5" /></span>
                    <div><div className="font-display text-xl font-bold uppercase">{t as string}</div><div className="text-muted-foreground">{d as string}</div></div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 md:grid-cols-5">
        <div className="relative overflow-hidden rounded-lg md:col-span-3">
          <img src={IMG("173")} alt="Flotilla de camionetas Del Seri" className="h-full min-h-80 w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center rounded-lg bg-ink p-10 text-ink-foreground md:col-span-2">
          <Truck className="size-10 text-accent" />
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-none">Te lo llevamos a tu obra, sin costo</h2>
          <p className="mt-4 text-ink-foreground/80">Nuestra flotilla propia entrega en todo Hermosillo con atención rápida y oportuna.</p>
          <a href={WA} className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-lg font-bold uppercase text-primary-foreground hover:bg-primary/90">Pedir entrega <ArrowRight className="size-4" /></a>
        </div>
      </section>

      {/* Brands */}
      <section className="border-y bg-card py-10">
        <p className="mb-6 text-center font-display text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">Marcas que manejamos</p>
        <div className="overflow-hidden">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl font-bold uppercase text-secondary">
            <span>{brands}</span><span aria-hidden>{brands}</span>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle kicker="Beneficios" title="Compra fácil, compra con ventaja" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            [Gift, "Tarjeta Construganas", "Acumula dinero electrónico en cada compra y canjéalo por producto o premios."],
            [ShieldCheck, "Crédito Mejoravit", "Usa tu saldo de INFONAVIT para ampliar, reparar, pintar o impermeabilizar."],
            [Wallet, "Crédito Coppel", "Aceptamos tu tarjeta Coppel para tus materiales de construcción."],
            [ShieldCheck, "Sello de la Casa", "Certificados por Construrama y distribuidor autorizado CEMEX."],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Gift;
            return (
              <div key={t as string} className="rounded-lg border-t-4 border-primary bg-card p-6 shadow-card">
                <I className="size-8 text-secondary" />
                <h3 className="mt-4 font-display text-2xl font-bold uppercase">{t as string}</h3>
                <p className="mt-2 text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {payments.map((p) => <span key={p} className="rounded-full border bg-card px-4 py-1.5 text-sm font-medium">{p}</span>)}
        </div>
      </section>

      {/* Branches */}
      <section id="sucursales" className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="font-display text-5xl font-extrabold uppercase">Visítanos</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { name: "Matriz", phones: ["662-252-8421", "662-252-8422"], wa: WA },
              { name: "Sucursal Anza", phones: ["662-381-7890", "662-381-7891"], wa: WA_ANZA },
            ].map((b) => (
              <div key={b.name} className="rounded-lg bg-card p-8 text-card-foreground">
                <div className="flex items-center gap-2 font-display text-3xl font-extrabold uppercase"><MapPin className="size-6 text-primary" /> {b.name}</div>
                <div className="mt-4 space-y-1">
                  {b.phones.map((p) => <a key={p} href={`tel:${p.replace(/-/g, "")}`} className="flex items-center gap-2 text-lg hover:text-primary"><Phone className="size-4" /> {p}</a>)}
                </div>
                <a href={b.wa} className="mt-6 inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-3 font-display text-lg font-bold uppercase text-ink-foreground hover:brightness-110"><MessageCircle className="size-5" /> WhatsApp</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-ink py-10 text-ink-foreground/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 text-sm">
          <span>© 2026 Del Seri Ferretería · Hermosillo, Sonora</span>
          <span>Miembro de la red Construrama</span>
        </div>
      </footer>

      <a href={WA} aria-label="WhatsApp" className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-ink-foreground shadow-card transition hover:scale-105">
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-primary">{kicker}</p>
      <h2 className="mt-2 font-display text-4xl font-extrabold uppercase leading-none md:text-5xl">{title}</h2>
    </div>
  );
}
