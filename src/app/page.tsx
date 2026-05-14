"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { CSSProperties } from "react";

const productCards = [
  {
    title: "UHT Milk",
    copy: "Shelf-stable purity for families, retail shelves, and food service.",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Dairy Creams",
    copy: "Rich texture and dependable performance for kitchens at every scale.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Flavored Milk",
    copy: "Refreshing everyday indulgence made for modern consumers.",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Coffee Creamers",
    copy: "Smooth, consistent dairy notes for cafes, offices, and beverage brands.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Ice Cream Mixes",
    copy: "Balanced mixes built for creamy finishes and reliable batch results.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Dessert Solutions",
    copy: "Sweet foundations for memorable menus, counters, and packaged treats.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Institutional Dairy Ingredients",
    copy: "Quality ingredients that support hotels, caterers, and food makers.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Customized Food Solutions",
    copy: "Flexible development for brands that need taste, scale, and speed.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80",
  },
];

const valuePillars = [
  {
    title: "Families",
    copy: "Safe, nutritious, and reliable dairy products for everyday confidence.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Food Businesses",
    copy: "Consistency, efficiency, and quality at the scale modern brands need.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cafes & Restaurants",
    copy: "Dependable ingredients behind experiences customers remember.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Supply Networks",
    copy: "A wider ecosystem built on growth, reliability, and shared progress.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
];

const capabilities = [
  "Product consistency",
  "Food safety systems",
  "Operational efficiency",
  "Reliable supply chains",
  "Innovation-driven production",
];

const trustReasons = [
  {
    title: "Decades of Industry Experience",
    image:
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Trusted Manufacturing Capabilities",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Strong Institutional Partnerships",
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Consistent Product Quality",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Scalable Food Solutions",
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Innovation-Driven Approach",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Commitment to Safety & Reliability",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Customer-Centric Thinking",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=700&q=80",
  },
];

const statements = [
  "Serving Trust for Generations",
  "Crafted for Consistency",
  "Rooted in Purity",
  "Made for Modern India",
  "Powering Food Experiences",
  "Trusted Every Day",
  "Built on Quality",
  "Nourishment You Can Count On",
];

const galleryMoments = [
  {
    alt: "Milk being poured into a glass",
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    alt: "Fresh dairy served with breakfast",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    alt: "Strawberries and cream dessert preparation",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    alt: "Professional kitchen preparing fresh food",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    alt: "Premium dessert with cream",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80",
  },
  {
    alt: "Cafe coffee with creamy foam",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
];

const storyVisuals = [
  {
    alt: "Fresh milk and dairy on a kitchen counter",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=80",
  },
  {
    alt: "Chef plating creamy food in a professional kitchen",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80",
  },
  {
    alt: "Family breakfast table with dairy and fresh food",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=80",
  },
];

const beliefImages = [
  {
    alt: "People sharing fresh food at a table",
    image:
      "https://images.unsplash.com/photo-1529517986296-847580a14c87?auto=format&fit=crop&w=900&q=80",
  },
  {
    alt: "Creamy dessert served beautifully",
    image:
      "https://images.unsplash.com/photo-1488477304112-4944851de03d?auto=format&fit=crop&w=900&q=80",
  },
  {
    alt: "Cafe counter preparing coffee and milk drinks",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".scroll-reveal")
    );

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf7ef] text-[#221712]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-[#fffaf0]/82 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center" aria-label="Amrit Food home">
            <Image
              src="/image.png"
              alt="Amrit Food"
              width={230}
              height={59}
              priority
              className="h-auto w-36 sm:w-44"
            />
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-[#5b4136] lg:flex">
            <a href="#story" className="transition hover:text-[#a72f24]">
              Story
            </a>
            <a href="#products" className="transition hover:text-[#a72f24]">
              Products
            </a>
            <a href="#quality" className="transition hover:text-[#a72f24]">
              Quality
            </a>
            <a href="#future" className="transition hover:text-[#a72f24]">
              Future
            </a>
          </div>
          <a
            href="#partner"
            className="rounded-full bg-[#9f2e24] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(159,46,36,0.26)] transition hover:-translate-y-0.5 hover:bg-[#7e211a]"
          >
            Partner With Us
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative min-h-screen px-5 pt-20 sm:px-8 lg:pt-24"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="grain" />
          <div className="hero-wash" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 py-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl animate-rise">
            <p className="mb-5 inline-flex rounded-full border border-[#d7bd8b] bg-white/62 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#8b2b23]">
              Nourishing India with trust, purity, and innovation
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[0.98] text-[#241611] sm:text-6xl lg:text-7xl">
              Crafted with Purity. Trusted for Generations.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#684b3f] sm:text-xl">
              For decades, Amrit Food has delivered high-quality dairy and food
              solutions that power homes, cafes, restaurants, and global food
              businesses across India.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="rounded-full bg-[#1d5f43] px-7 py-4 text-center text-sm font-bold text-white shadow-[0_20px_45px_rgba(29,95,67,0.24)] transition hover:-translate-y-1 hover:bg-[#154a34]"
              >
                Explore Our Products
              </a>
              <a
                href="#story"
                className="rounded-full border border-[#c9aa72] bg-white/72 px-7 py-4 text-center text-sm font-bold text-[#3b271f] transition hover:-translate-y-1 hover:border-[#9f2e24] hover:text-[#9f2e24]"
              >
                Discover Our Story
              </a>
            </div>
          </div>

          <div className="relative animate-drift">
            <div className="hero-visual hero-media">
              <div className="hero-media__bg" aria-hidden="true">
                <div className="hero-media__overlay" />
                <video
                  className="hero-media__video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80"
                  aria-hidden="true"
                >
                  <source
                    src="https://cdn.coverr.co/videos/coverr-milk-pouring-into-a-glass-1840/1080p.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              <div className="hero-visual__top hero-media__content">
                <span>Legacy</span>
                <strong>India&apos;s growing food ecosystem</strong>
              </div>

              <div className="hero-stat hero-media__content">
                <strong>Millions</strong>
                <span>of everyday food moments quietly supported.</span>
              </div>

              <div className="hero-media__shine" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="section-shell">
        <div className="section-kicker">Our Story</div>
        <div className="story-grid">
          <div className="scroll-reveal">
            <h2>A Legacy Built on Trust</h2>
            <p>
              Every great food brand begins with a simple promise: to serve
              people with honesty, quality, and care.
            </p>
          </div>
          <div className="story-media-stack scroll-reveal">
            <div className="story-copy space-y-6 text-lg leading-8 text-[#5f473c]">
              <p>
                Amrit Food began its journey with the vision of delivering
                reliable dairy products that Indian families and businesses could
                trust every single day.
              </p>
              <p>
                Over the years, that vision evolved into a large-scale food
                ecosystem serving consumers, cafes, restaurants, quick-service
                chains, institutions, and food brands across the country.
              </p>
              <p>
                Today, our products reach millions, often becoming part of moments
                people cherish without even realizing the journey behind them.
              </p>
            </div>
            <div className="story-image-grid">
              {storyVisuals.map((visual, index) => (
                <figure
                  className="story-image scroll-reveal"
                  key={visual.alt}
                  style={{ "--delay": `${index * 90}ms` } as CSSProperties}
                >
                  <Image
                    src={visual.image}
                    alt={visual.alt}
                    fill
                    sizes="(max-width: 900px) 33vw, 18vw"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="relative bg-[#1f1612] px-5 py-24 text-white sm:px-8">
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(120deg,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(0deg,rgba(225,185,111,.12)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker text-[#f0c77b]">What We Do</p>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Delivering Dairy & Food Solutions at Scale
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#ead9c3]">
              We combine advanced manufacturing capabilities with strict quality
              standards to ensure every product delivers consistency, safety,
              and taste.
            </p>
          </div>

          <div className="product-grid mt-12">
            {productCards.map((product, index) => (
              <div
                key={product.title}
                className="product-card product-media scroll-reveal"
                style={{ "--delay": `${index * 70}ms` } as CSSProperties}
              >
                <div className="product-media__image">
                  <Image
                    alt={`${product.title} product image`}
                    src={product.image}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>

                <div className="product-media__content">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{product.title}</strong>
                  <p>{product.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="split-band">
          <div className="scroll-reveal">
            <p className="section-kicker">How We Add Value</p>
            <h2>Creating Value Beyond Products</h2>
            <p>
              At Amrit Food, value is measured by impact. Every product is
              designed to solve real needs, from taste and convenience to trust
              and operational reliability.
            </p>
          </div>
          <div className="value-grid">
            {valuePillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="value-card scroll-reveal"
                style={{ "--delay": `${index * 80}ms` } as CSSProperties}
              >
                <div className="value-card__image">
                  <Image
                    src={pillar.image}
                    alt={`${pillar.title} food service`}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="purpose-band">
        <div className="purpose-band__image" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <div className="mx-auto max-w-5xl text-center">
          <p className="section-kicker text-[#f2c477]">Our Purpose</p>
          <h2>More Than Food. A Commitment to Better Living.</h2>
          <p>
            Food has the power to bring comfort, connection, and confidence.
            Our purpose is to make dependable food solutions accessible while
            continuously innovating for changing lifestyles and future food
            needs.
          </p>
        </div>
      </section>

      <section id="quality" className="section-shell">
        <div className="capability-grid">
          <div className="precision-panel media-panel scroll-reveal">
            <div className="panel-image">
              <Image
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80"
                alt="Food manufacturing equipment"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                loading="lazy"
              />
            </div>
            <p className="section-kicker">Infrastructure & Capabilities</p>
            <h2>Built for Scale. Driven by Precision.</h2>
            <p>
              Modern manufacturing infrastructure and stringent quality systems
              allow us to serve retail consumers and large institutional
              partners with confidence.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {capabilities.map((item) => (
                <span key={item} className="check-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="quality-panel media-panel scroll-reveal">
            <div className="panel-image">
              <Image
                src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1000&q=80"
                alt="Food quality testing and inspection"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                loading="lazy"
              />
            </div>
            <p className="section-kicker">Trust & Quality</p>
            <h2>Quality You Can Rely On</h2>
            <p>
              At every stage, from sourcing to production to delivery, quality
              remains central to everything we do. When it comes to food, trust
              is earned every single day.
            </p>
          </div>
        </div>
      </section>

      <section id="future" className="future-section">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="future-mark" aria-hidden="true">
            <Image
              className="future-mark__image"
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              loading="lazy"
            />
            <div className="future-mark__shade" />
            <span />
            <span />
            <span />
          </div>
          <div>
            <p className="section-kicker text-[#f0c77b]">Future Vision</p>
            <h2>Building the Future of Food</h2>
            <p>
              Consumer expectations are evolving. Food experiences are changing.
              Amrit Food is continuously investing in modern manufacturing,
              product innovation, and scalable food solutions to meet the needs
              of tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="belief-panel scroll-reveal">
          <p className="section-kicker">Brand Philosophy</p>
          <h2>What We Believe</h2>
          <div className="belief-image-row" aria-label="Food and hospitality moments">
            {beliefImages.map((visual, index) => (
              <figure
                key={visual.alt}
                className="belief-image scroll-reveal"
                style={{ "--delay": `${index * 80}ms` } as CSSProperties}
              >
                <Image
                  src={visual.image}
                  alt={visual.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 30vw"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
          <div className="belief-words">
            {["Emotion", "Connection", "Comfort", "Culture"].map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
          <p>
            Behind every trusted product should be a company that values people
            as much as production. That belief continues to shape everything we
            do.
          </p>
        </div>
      </section>

      <section id="gallery" className="relative bg-[#fbf7ef] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="section-kicker">Moments</p>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Real food. Real experiences.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#60483c]">
              A premium glimpse into the textures, pours, and daily rituals our
              ingredients support.
            </p>
          </div>

          <div className="gallery-grid mt-12">
            {galleryMoments.map((moment, i) => (
              <article
                key={moment.alt}
                className="media-tile scroll-reveal"
                style={{ "--delay": `${i * 60}ms` } as CSSProperties}
              >
                <div className="media-tile__frame">
                  <Image
                    src={moment.image}
                    alt={moment.alt}
                    fill
                    sizes="(max-width: 900px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="split-band">
          <div className="scroll-reveal">
            <p className="section-kicker">Production</p>
            <h2>Quality built in every step.</h2>
            <p>
              From sourcing to filling, we focus on consistency and safety.
              Premium results, day after day.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {capabilities.slice(0, 4).map((item) => (
                <span key={item} className="check-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="scroll-reveal">
            <div className="video-card image-card">
              <Image
                className="video-card__video"
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80"
                alt="Modern food production and quality control"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="video-card__overlay" aria-hidden="true" />
              <div className="video-card__label">
                <span className="video-card__dot" />
                <p>Quality in motion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partner" className="section-shell pt-0">
        <div className="why-grid">
          <div className="scroll-reveal">
            <p className="section-kicker">Why Amrit Food</p>
            <h2>Why Businesses & Consumers Trust Amrit Food</h2>
          </div>
          <div className="trust-list">
            {trustReasons.map((reason, index) => (
              <article
                key={reason.title}
                className="trust-card scroll-reveal"
                style={{ "--delay": `${index * 55}ms` } as CSSProperties}
              >
                <div className="trust-card__image">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 18vw"
                    loading="lazy"
                  />
                </div>
                <span>{reason.title}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="statement-marquee" aria-label="Brand statements">
          <div>
            {[...statements, ...statements].map((statement, index) => (
              <span key={`${statement}-${index}`}>{statement}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer bg-[#123e4d] text-white">
        <div className="site-footer__grid mx-auto grid max-w-[1320px] grid-cols-1 px-6 py-12 text-center md:grid-cols-3 lg:py-16">
          <section className="site-footer__column flex flex-col items-center border-white/20 px-6 py-8 md:min-h-[345px] md:border-r lg:px-12">
            <h2 className="mb-8 text-3xl font-medium underline underline-offset-4">
              Contact Us
            </h2>
            <address className="grid gap-5 text-xl not-italic leading-snug lg:text-2xl">
              <span>Amrit Nagar, Ghaziabad, India</span>
              <a href="mailto:Info@amritfood.com">Info@amritfood.com</a>
              <a href="tel:+9101202866891">+91 0120 2866891</a>
            </address>
            <div
              className="site-footer__socials mt-10 flex items-center justify-center gap-7"
              aria-label="Social links"
            >
              <a
                href="#"
                aria-label="Facebook"
                className="flex size-8 items-center justify-center rounded-full bg-white text-sm font-black uppercase text-[#123e4d] transition hover:bg-[#f0c77b]"
              >
                f
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex size-8 items-center justify-center rounded-full bg-white text-sm font-black uppercase text-[#123e4d] transition hover:bg-[#f0c77b]"
              >
                x
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex size-8 items-center justify-center rounded-full bg-white text-xs font-black uppercase text-[#123e4d] transition hover:bg-[#f0c77b]"
              >
                ig
              </a>
            </div>
          </section>

          <section className="site-footer__column flex flex-col items-center border-t border-white/20 px-6 py-8 md:min-h-[345px] md:border-r md:border-t-0 lg:px-12">
            <h2 className="mb-8 text-3xl font-medium underline underline-offset-4">
              About Us
            </h2>
            <nav
              aria-label="Footer about links"
              className="grid gap-5 text-xl leading-snug lg:text-2xl"
            >
              <a href="#story">About Us</a>
              <a href="#partner">Just</a>
              <a href="#quality">Process</a>
              <a href="#gallery">Recipes</a>
              <a href="#partner">Contact Us</a>
            </nav>
          </section>

          <section className="site-footer__column flex flex-col items-center border-t border-white/20 px-6 py-8 md:min-h-[345px] md:border-t-0 lg:px-12">
            <h2 className="mb-8 text-3xl font-medium underline underline-offset-4">
              Legal
            </h2>
            <nav
  aria-label="Footer legal links"
  className="relative grid gap-5 text-xl leading-snug lg:text-2xl"
>
  <a href="#">Terms and Conditions</a>

  <div className="absolute bottom-[-255px] right-[-50] flex items-center gap-3">
    
    <a
      href="https://fabulousmedia.in/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAq1BMVEVHcEwAAADxmjLdVS8AAAAAAACgoKDi3t3tjzTymjHub0bdPC+uKyKfJx+Li4v////q6urXmWXsVi/qNi7MNSu5LyafKCBjY2P4///x8fLqPjK8MSeeJh1ISEj5+vofHx/Rzs7qVEy9urrujIfrLBt6enrWq6m9Kh73x8XcGgC9IRO2dXOnU0+dDwQ4ODitY2CyQDqogYC4EAC4lpScAAC4GAQ0OjsAAAD///8RPPMVAAAAOXRSTlMAYGBgQf//////////UP//////////////////////////////////////////////////UP9QUGHElwbPAAABN0lEQVR4AWyRVRLDMAwFy9zKYU6Zme9/s9Z5ozTqZH93TXKlUpXUBPVKpdEUtNqdbk6vPxj+BSMiZcB2TMt23L/AIyI/ML62F1r9KHJiGSQpaXzDtMLQdqJoIHcYB5QRWCF85MqgDZ9+dT/S3pHBhMDU0ss1AxHMCPSsMIKP4mLQIjBf9LXGBoVgSWC1sNmv40LgEdhsI/a7/eGYB6cUvr1lHa3Pfno+IsgHoHY/fwmI/OsRQZsvcGPvOIo094cOJsTMng6CJw/tpYOEciaDdeZ5TfLmOzDty7e4rQh4TQS4BVCH3fNOYNREwIMG6XnPN2oiAK1fkVLGpMkBD1uimjLgcTNpUwb5wNmPRcAoYlR5UBhqkJQF4rleaYDnglFZIJ7bKgvE383KAvF3k9dnoOyPCSzggAEAuL07sDHFZu4AAAAASUVORK5CYII="
        alt="Fabulous Media"
        className="w-5 h-5 object-contain hover:scale-110 transition"
      />
    </a>

    <a
      href="https://gocommercially.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAABJ0lEQVR4AZ3TEazDYBiF4ddlNJnNYTIv1DO8WpuUqks9KY2Gk2KhXKpXStVKrZ5C5b3QLLkX/i3ZsS955CTnww/5EqzvwDroOIWBCdHkGgY+gcIw0Aw4zmGgJ4AmDJwBKMLAEq6dhoGVGgbL1Lf1I0/OZBuoov1Pp1pGh3R2HsdhiACgUsyJiwOdZsQ32Pr1bJlkIdaVsyOJjlz/VIWztFSqq09a9ciryJaOmsaurGoLBvXC2jd1Vd2TNLvd8ryjoTbfsfNOr8b4PwzkKkcbSpW9qsbRo9+AB9p1ZKfQLxmlqhMAl/sizju2xiNA9hoFbBfq0PZu7dtZp7bMUwBIwqNdxq5+FIbA81Trpz2kSxhEAK1BUADnxSAoP636AoPvwNp9+7yB/AKHCUYfTsNJ9QAAAABJRU5ErkJggg=="
        alt="Go Commercially"
        className="w-5 h-5 object-contain hover:scale-110 transition"
      />
    </a>

  </div>
</nav>
          </section>
        </div>

        <div className="site-footer__bottom bg-[#155166] px-5 py-3 text-center text-lg leading-normal text-white">
          Copyright © 2026 <strong>Amrit Corp. Ltd.</strong> Designed by{" "}
          <strong>The Felicite Design Studio</strong>
        </div>
      </footer>
    </main>
  );
}
