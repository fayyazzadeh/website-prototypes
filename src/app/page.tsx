import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fayyazadeh | Network • Infrastructure • Support",
  description: "راهکارهای شبکه، زیرساخت، پشتیبانی و خدمات دیجیتال.",
};

const services = [
  ["01", "شبکه و زیرساخت", "طراحی، پیاده‌سازی و بهینه‌سازی زیرساخت شبکه برای کسب‌وکارها."],
  ["02", "پشتیبانی و نگهداری", "پایش، نگهداری و رفع مشکل برای کاهش توقف و افزایش پایداری."],
  ["03", "سرور و خدمات ابری", "راهکارهای سرور، هاست، بکاپ و سرویس‌های ابری متناسب با پروژه."],
];

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-slate-950 dark:bg-black dark:text-white">
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-black/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-black">fayyazadeh<span className="text-blue-600">.</span></a>
          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#services">خدمات</a><a href="#process">روند همکاری</a><a href="#about">درباره ما</a><a href="#contact">تماس</a>
          </div>
          <a href="#contact" className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white dark:bg-white dark:text-black">شروع همکاری</a>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,.16),transparent_32%),radial-gradient(circle_at_20%_70%,rgba(14,165,233,.10),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-32">
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">● زیرساخت مطمئن، پشتیبانی واقعی</span>
            <h1 className="mt-6 text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">فناوری را ساده‌تر، <span className="block text-blue-600">پایدارتر</span> و قابل اعتمادتر کنید.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">از طراحی شبکه و سرور تا پشتیبانی و نگهداری؛ راهکارهایی که برای کار واقعی کسب‌وکار شما ساخته می‌شوند.</p>
            <div className="mt-9 flex flex-wrap gap-4"><a href="#contact" className="rounded-full bg-blue-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20">درخواست مشاوره</a><a href="#services" className="rounded-full border border-slate-300 px-7 py-3.5 font-bold dark:border-white/20">مشاهده خدمات</a></div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-500"><span>✓ طراحی اختصاصی</span><span>✓ پشتیبانی مستمر</span><span>✓ راهکار مقیاس‌پذیر</span></div>
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-3 shadow-2xl shadow-blue-900/20">
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
              <div className="mb-10 flex justify-between"><span className="text-xs font-semibold tracking-[.25em] text-slate-400">SYSTEM STATUS</span><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-400">ONLINE</span></div>
              <div className="space-y-4">{["Network","Servers","Backup","Support"].map((x,i)=><div key={x} className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><div className="mb-3 flex justify-between"><span className="font-semibold text-white">{x}</span><span className="text-sm text-emerald-400">Healthy</span></div><div className="h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full bg-blue-500" style={{width: `${94-i*4}%`}} /></div></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-slate-200 bg-slate-50 py-24 dark:border-white/10 dark:bg-white/[.03]">
        <div className="mx-auto max-w-7xl px-6"><p className="font-bold text-blue-600">خدمات</p><h2 className="mt-3 text-4xl font-black sm:text-5xl">هر چیزی که زیرساخت شما نیاز دارد.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">{services.map(([n,t,d])=><article key={t} className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-white/10 dark:bg-black"><span className="font-black text-blue-600">{n}</span><h3 className="mt-12 text-2xl font-bold">{t}</h3><p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{d}</p><a href="#contact" className="mt-8 inline-block font-bold text-blue-600">بیشتر بدانید ←</a></article>)}</div>
        </div>
      </section>

      <section id="process" className="py-24"><div className="mx-auto max-w-7xl px-6"><p className="font-bold text-blue-600">روند همکاری</p><h2 className="mt-3 text-4xl font-black sm:text-5xl">شفاف، مرحله‌به‌مرحله، بدون پیچیدگی.</h2><div className="mt-12 grid gap-4 md:grid-cols-4">{["نیازسنجی","طراحی راهکار","اجرا و تست","پشتیبانی"].map((x,i)=><div key={x} className="rounded-2xl border border-slate-200 p-6 dark:border-white/10"><div className="text-3xl font-black text-blue-600">0{i+1}</div><div className="mt-8 font-bold">{x}</div></div>)}</div></div></section>

      <section id="about" className="bg-slate-950 py-24 text-white"><div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2"><div><p className="font-bold text-blue-400">چرا ما؟</p><h2 className="mt-3 text-4xl font-black sm:text-5xl">فقط یک پیمانکار نیستیم؛ شریک فنی شما هستیم.</h2></div><div className="text-lg leading-8 text-slate-300"><p>فناوری پشت کسب‌وکار شما باید ساده، پایدار و آماده رشد باشد. ما برای رسیدن به همین هدف، راهکار را متناسب با پروژه طراحی می‌کنیم.</p><div className="mt-8 grid grid-cols-2 gap-4 text-sm"><div className="rounded-2xl border border-white/10 p-5"><strong className="text-2xl text-white">24/7</strong><br/>نگاه به پایداری</div><div className="rounded-2xl border border-white/10 p-5"><strong className="text-2xl text-white">100%</strong><br/>راهکار متناسب با پروژه</div></div></div></div></section>

      <section id="contact" className="py-24"><div className="mx-auto max-w-4xl rounded-[2rem] bg-blue-600 px-6 py-16 text-center text-white shadow-2xl shadow-blue-600/20"><p className="font-bold text-blue-100">آماده شروع هستید؟</p><h2 className="mt-3 text-4xl font-black sm:text-5xl">بیایید زیرساخت درست را بسازیم.</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">برای بررسی پروژه، نیازمندی‌ها و مسیر اجرای مناسب با ما در ارتباط باشید.</p><a href="mailto:info@fayyazzadeh.ir" className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-bold text-blue-700">info@fayyazzadeh.ir</a></div></section>

      <footer className="border-t border-slate-200 py-8 dark:border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm text-slate-500 sm:flex-row sm:justify-between"><span>© 2026 Fayyazadeh. All rights reserved.</span><span>Network • Infrastructure • Support</span></div></footer>
    </main>
  );
}
