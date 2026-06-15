import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Gauge,
  Trophy,
  AlertTriangle,
  BarChart3,
  Mail,
  CheckCircle2,
  Flame,
  Timer,
  Zap,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UHLogo = () => (
  <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-lime-300 via-emerald-300 to-cyan-300 shadow-[0_0_40px_rgba(74,222,128,0.35)]">
    <div className="absolute inset-[2px] rounded-[1.2rem] bg-neutral-950" />
    <div className="relative flex items-center text-white">
      <span className="-mr-1 text-2xl font-black tracking-tighter">U</span>
      <span className="text-2xl font-black tracking-tighter text-emerald-400">
        H
      </span>
    </div>
  </div>
);

const domains = [
  {
    title: "Speed",
    text: "React fast. Move sharply. Change direction under pressure.",
  },
  {
    title: "Stamina",
    text: "Keep going when your lungs and legs want a vote.",
  },
  {
    title: "Strength",
    text: "Carry, lift, crawl and move with real-world power.",
  },
  {
    title: "Coordination",
    text: "Stay composed when fatigue makes simple things hard.",
  },
  {
    title: "Balance",
    text: "Control your body when everyone else starts falling apart.",
  },
  {
    title: "Mobility",
    text: "Move well, not just hard.",
  },
];

const exercises = [
  "Reactive Shuttle Sprint",
  "Bear Crawl Grid",
  "Sandbag Carry Circuit",
  "Balance Traverse",
  "Burpee Broad Jump Ladder",
  "Med Ball Accuracy Throws",
  "Single-Leg Movement Flow",
  "Shuttle Carry Relay",
  "Ground-to-Overhead Complex",
  "The Ultimate Flow",
];

const categories = [
  "Individual",
  "Doubles",
  "Mixed Doubles",
  "Relay Team",
  "Corporate Team",
  "Age Group Rankings",
];

const whyEnter = [
  {
    title: "It is not just another fitness race",
    text: "This is built to test complete capability, not just how long you can suffer on a run.",
  },
  {
    title: "You get your Ultimate Human Score",
    text: "A personal performance score across speed, stamina, strength, coordination, balance and mobility.",
  },
  {
    title: "You can train for it anywhere",
    text: "Minimal equipment, simple movement patterns and clear progressions.",
  },
  {
    title: "It rewards the adaptable",
    text: "Runners, lifters and gym athletes all get exposed somewhere. The most complete athlete wins.",
  },
];

const foundingPricing = [
  {
    category: "Individual",
    price: "£79",
    detail: "Founding athlete launch price",
  },
  {
    category: "Doubles",
    price: "£129",
    detail: "Per team",
  },
  {
    category: "Relay Team",
    price: "£189",
    detail: "Team entry",
  },
  {
    category: "Corporate Team",
    price: "From £599",
    detail: "Includes rankings + team scoring",
  },
];

const aiFeatures = [
  {
    title: "Discover Your Ultimate Human Profile",
    text: "Answer a few questions about your age, training background, strengths and goals and our AI assessment engine will generate your likely Ultimate Human profile.",
    points: [
      "Identify your strongest capability areas",
      "Reveal your likely weak zones",
      "Understand your athletic archetype",
      "Receive personalised training insights",
    ],
  },
  {
    title: "AI Race Simulator",
    text: "Estimate your likely Ultimate Human Score before race day based on your training history, movement background and current fitness level.",
    points: [
      "Predicted completion score",
      "Likely ranking percentile",
      "Projected strongest events",
      "Performance improvement opportunities",
    ],
  },
];

const workToDo = [
  "First UK event dates and venues will be confirmed soon.",
  "Final scoring standards are being tested before launch.",
  "Founding athlete places will be limited for the first events.",
  "Training plans and gym partner locations are in development.",
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#EEF2F7] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#F5F7FB]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <UHLogo />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/70">
                The
              </p>
              <p className="text-xl font-black leading-none tracking-tight">
                Ultimate Human
              </p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a href="#challenge" className="hover:text-slate-900">
              The challenge
            </a>
            <a href="#format" className="hover:text-slate-900">
              Format
            </a>
            <a href="#score" className="hover:text-slate-900">
              Score
            </a>
            <a href="#categories" className="hover:text-slate-900">
              Categories
            </a>
            <a href="#signup" className="hover:text-slate-900">
              Sign up
            </a>
          </nav>

          <a
            href="#signup"
            className="rounded-2xl bg-gradient-to-r from-lime-300 to-emerald-300 px-5 py-3 font-bold text-neutral-950 no-underline hover:opacity-90"
          >
            Join the waitlist
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_45%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-5 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                theultimatehuman.fitness · Founding athlete waitlist now open
              </p>

              <h1 className="text-5xl font-black tracking-tight md:text-7xl">
                Become the ultimate version of yourself.
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-700">
                The Ultimate Human is a next-generation indoor fitness
                competition designed to measure complete human capability.
                Speed, stamina, strength, coordination, balance and mobility —
                combined into one adaptive performance score.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#signup"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-lime-300 to-emerald-300 px-6 py-4 font-bold text-neutral-950 no-underline hover:opacity-90"
                >
                  Join the founding athlete waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="#challenge"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-900 no-underline hover:bg-slate-100"
                >
                  See the challenge
                </a>
              </div>

              <div className="mt-8 grid max-w-xl gap-3 text-sm text-slate-700 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Indoor events
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> All abilities
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Personal score
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Card className="rounded-[2rem] border border-slate-200 bg-slate-900 shadow-[0_0_80px_rgba(34,211,238,0.12)] backdrop-blur-2xl">
                <CardContent className="p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                        Your score
                      </p>
                      <h2 className="mt-2 text-3xl font-black text-white">
                        Ultimate Human Score
                      </h2>
                    </div>
                    <Gauge className="h-12 w-12 text-slate-300" />
                  </div>

                  <p className="mb-6 text-slate-300">
                    Every participant receives a score across six capability
                    areas, showing where you are strongest and where you can
                    improve.
                  </p>

                  <div className="space-y-4">
                    {domains.map((d, i) => (
                      <div
                        key={d.title}
                        className="rounded-2xl border border-white/5 bg-slate-800 p-4"
                      >
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-white">{d.title}</p>
                          <p className="text-sm text-slate-400">
                            {88 - i * 6}
                          </p>
                        </div>

                        <div className="mt-3 h-2 rounded-full bg-gradient-to-r from-lime-300 to-emerald-300/10">
                          <div
                            className="h-2 rounded-full bg-white"
                            style={{ width: `${88 - i * 6}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 backdrop-blur-xl">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/60">
                      Your Ultimate Human Score
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      Your score is calculated using our proprietary algorithm,
                      which weights your performance across multiple capability
                      areas while also taking into account factors such as your
                      age category and previous athletic experience.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section
          id="challenge"
          className="border-y border-slate-200 bg-white/[0.03] px-6 py-16"
        >
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            <Card className="rounded-3xl border border-slate-200 bg-white backdrop-blur-xl">
              <CardContent className="p-7">
                <Flame className="mb-5 h-8 w-8 text-slate-700" />
                <h3 className="text-2xl font-bold text-slate-900">
                  Hard, but not stupid
                </h3>
                <p className="mt-4 text-slate-700">
                  You will work hard, but this is not designed to destroy you.
                  It is designed to reveal how well you move, adapt and recover.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-slate-200 bg-white">
              <CardContent className="p-7">
                <Timer className="mb-5 h-8 w-8 text-slate-700" />
                <h3 className="text-2xl font-bold text-slate-900">
                  45–70 minutes
                </h3>
                <p className="mt-4 text-slate-700">
                  Long enough to matter. Short enough to be repeatable.
                  Designed for high energy, fast transitions and visible
                  competition.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-slate-200 bg-white">
              <CardContent className="p-7">
                <Zap className="mb-5 h-8 w-8 text-slate-700" />
                <h3 className="text-2xl font-bold text-slate-900">
                  Adapt under fatigue
                </h3>
                <p className="mt-4 text-slate-700">
                  The signature test is not one movement. It is how quickly you
                  can switch between speed, control, strength and coordination.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="format" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                The event format
              </p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                10 challenge zones. One complete test.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Each zone is simple to understand, hard to master and designed
                to expose a different part of your athletic capability. Minimal
                equipment. Maximum variety.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {exercises.map((item, index) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm text-slate-400">Zone {index + 1}</p>
                  <p className="mt-2 font-bold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="score" className="bg-white px-6 py-24 text-neutral-950">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                Your personal benchmark
              </p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Leave with more than a medal.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                Every participant receives an Ultimate Human Score showing
                performance across six areas. You will know what you are good
                at, what is holding you back and how to train for your next
                attempt.
              </p>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                The aim is simple: come back better.
              </p>

              <div className="mt-10 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Your Ultimate Human Score
                </p>
                <h3 className="mt-3 text-3xl font-black">
                  How is it calculated?
                </h3>
                <p className="mt-4 text-lg leading-8 text-neutral-700">
                  Your Ultimate Human Score is calculated using our proprietary
                  algorithm, which weights your performance across multiple
                  capability areas including speed, stamina, strength,
                  coordination, balance and mobility.
                </p>
                <p className="mt-4 text-lg leading-8 text-neutral-700">
                  The scoring model also takes into account factors such as your
                  age category and previous athletic experience to create a more
                  meaningful and balanced assessment of your overall human
                  capability.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {domains.map((d) => (
                <Card
                  key={d.title}
                  className="rounded-3xl border-neutral-200 bg-white shadow-sm"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-black">{d.title}</h3>
                    <p className="mt-3 text-neutral-600">{d.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="categories" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Ways to compete
              </p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Go solo, pair up or bring a team.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                The Ultimate Human is designed for serious competitors,
                first-time challengers, gym communities and workplace teams.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((label) => (
                <Card
                  key={label}
                  className="rounded-3xl border-slate-200 bg-white"
                >
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="rounded-2xl bg-gradient-to-r from-lime-300 to-emerald-300 p-3">
                      <Trophy className="h-6 w-6 text-slate-900" />
                    </div>
                    <p className="font-bold text-slate-900">{label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/[0.03] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Why enter?
              </p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Because fitness should mean capability.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {whyEnter.map((item) => (
                <Card
                  key={item.title}
                  className="rounded-3xl border-slate-200 bg-white"
                >
                  <CardContent className="p-7">
                    <h3 className="text-2xl font-black text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-700">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-emerald-50 to-lime-50 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-400/70">
                AI-Powered Performance Intelligence
              </p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Discover the athlete you really are.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                The Ultimate Human combines competition with AI-powered
                capability analysis to help you understand how you move,
                perform and improve.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {aiFeatures.map((feature) => (
                <Card
                  key={feature.title}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-lime-300 to-emerald-300" />
                  <CardContent className="p-8">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-300 to-emerald-300 text-slate-900">
                      <BarChart3 className="h-7 w-7" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-lg leading-8 text-slate-700">
                      {feature.text}
                    </p>

                    <div className="mt-8 space-y-3">
                      {feature.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                        >
                          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                          <p className="text-slate-700">{point}</p>
                        </div>
                      ))}
                    </div>

                    <Button className="mt-8 rounded-2xl bg-gradient-to-r from-lime-300 to-emerald-300 px-5 py-3 font-bold text-slate-900 hover:opacity-90">
                      Try the AI assessment
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-cyan-400/10 to-lime-300/5 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/60">
                Founding athlete pricing
              </p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Get in early.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Early launch pricing for the first Ultimate Human events.
                Founding athlete places will be limited and pricing will
                increase after launch release.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {foundingPricing.map((item) => (
                <Card
                  key={item.category}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/[0.05] backdrop-blur-xl"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-lime-300 to-emerald-300" />
                  <CardContent className="p-7">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                      {item.category}
                    </p>
                    <h3 className="mt-4 text-5xl font-black text-slate-900">
                      {item.price}
                    </h3>
                    <p className="mt-3 text-slate-500">{item.detail}</p>
                    <Button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-lime-300 to-emerald-300 px-5 py-3 font-bold text-neutral-950 hover:opacity-90">
                      Join waitlist
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
              <p className="font-semibold text-slate-900">
                Founding athlete benefits include:
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Priority event access
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Early leaderboard rankings
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Founding athlete digital badge
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Exclusive launch training content
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-6 py-24 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/60">
                The people behind The Ultimate Human
              </p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Built by people obsessed with human performance.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                The Ultimate Human combines elite coaching, combat sport
                experience, movement science and a slightly unhealthy enthusiasm
                for fitness racing.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <FounderCard
                initials="AH"
                name="Andie Heath"
                role="Founder · Performance Coach · Programme Designer"
                quote="Most fitness events reward one dominant attribute. We wanted to build something that rewards adaptability, composure and complete human capability."
              />

              <FounderCard
                initials="LH"
                name="Laura Hathaway"
                role="Performance Coach · Qualified Osteopath"
                quote="Real performance is not just strength or endurance. It is how efficiently and intelligently your body moves under pressure and fatigue."
              />

              <FounderCard
                initials="JH"
                name="John ‘The Hitman’ Hathaway"
                role="Champion UFC Fighter · Coach"
                quote="The people who stay calm, adaptable and explosive when tired are usually the hardest people to beat. That is what this competition is designed to expose."
              />

              <FounderCard
                initials="KB"
                name="Ken Brotherston"
                role="Founder · Businessman · Fitness Race Enthusiast"
                quote="I am probably old enough to know better, but not quite sensible enough to stop chasing the idea that becoming fitter, stronger and more adaptable makes every part of life better."
              />
            </div>
          </div>
        </section>

        <section className="border-y border-amber-300/20 bg-amber-300/5 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              <AlertTriangle className="h-4 w-4" /> Pre-launch notice
            </div>
            <h2 className="text-3xl font-black md:text-4xl">
              What is still being finalised?
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {workToDo.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl bg-white p-5 text-slate-700 shadow-sm"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="signup" className="px-6 py-24">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
            <Mail className="mx-auto mb-6 h-10 w-10 text-slate-700" />
            <h2 className="text-4xl font-black">
              Become one of the first Ultimate Humans
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Get early access to launch events, training plans, founding
              athlete pricing, rankings and exclusive first-release places.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://theultimatehuman.fitness"
                className="rounded-2xl bg-gradient-to-r from-lime-300 to-emerald-300 px-6 py-4 font-bold text-slate-900 no-underline hover:opacity-90"
              >
                Join at theultimatehuman.fitness
              </a>
              <a
                href="mailto:hello@theultimatehuman.fitness"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-900 no-underline hover:bg-slate-100"
              >
                Invite your gym
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-6 py-10 text-center text-sm text-slate-500">
        © 2027 The Ultimate Human · theultimatehuman.fitness · Founding athlete
        waitlist.
      </footer>
    </div>
  );
}

function FounderCard({ initials, name, role, quote }) {
  return (
    <Card className="rounded-[2rem] border border-slate-200 bg-white/[0.05] backdrop-blur-xl">
      <CardContent className="p-7">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-300 to-emerald-300 text-xl font-black text-neutral-950">
          {initials}
        </div>
        <h3 className="text-2xl font-black text-white">{name}</h3>
        <p className="mt-1 text-sm uppercase tracking-[0.2em] text-emerald-400/80">
          {role}
        </p>
        <p className="mt-5 leading-7 text-slate-300">“{quote}”</p>
      </CardContent>
    </Card>
  );
}