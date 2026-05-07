import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header with Logos */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-pEWh21RHL8su37pbn5DFCFMH0QTJtu.png"
            alt="Rootanian Sports"
            width={180}
            height={70}
            className="h-12 md:h-16 w-auto object-contain"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Indian_Golf_Premier_League-N9nBoE0QoZWwWAelzG7f86eoBGGMBo.png"
            alt="Indian Golf Premier League"
            width={140}
            height={50}
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#F97316]/5 via-background to-[#EC4899]/5">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-4">
            Strategic Content & Growth Partnership Proposal
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            by <span className="text-[#0099CC] font-semibold">Rootanian Sports</span>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-full"></div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F97316]/10 via-[#EC4899]/5 to-[#F97316]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#F97316]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#EC4899]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">The Opportunity</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-10 leading-relaxed">
            IGPL is not just creating a golf league.
          </p>
          <p className="text-lg text-foreground mb-8">It is creating:</p>
          <ul className="space-y-4 text-lg mb-12">
            <li className="flex items-center gap-4 group cursor-default">
              <span className="w-3 h-3 bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-full group-hover:scale-125 transition-transform duration-300"></span>
              <span className="text-foreground group-hover:text-[#F97316] transition-colors duration-300">A new-age sports property</span>
            </li>
            <li className="flex items-center gap-4 group cursor-default">
              <span className="w-3 h-3 bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-full group-hover:scale-125 transition-transform duration-300"></span>
              <span className="text-foreground group-hover:text-[#F97316] transition-colors duration-300">A youth-first entertainment ecosystem</span>
            </li>
            <li className="flex items-center gap-4 group cursor-default">
              <span className="w-3 h-3 bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-full group-hover:scale-125 transition-transform duration-300"></span>
              <span className="text-foreground group-hover:text-[#F97316] transition-colors duration-300">A modern identity for golf in India</span>
            </li>
          </ul>

          <div className="bg-background rounded-xl p-8 border border-[#F97316]/20 shadow-lg">
            <p className="text-lg text-foreground mb-6">
              That is what makes IGPL exciting. Because the future of sports is no longer only about matches.
            </p>
            <p className="text-lg text-foreground mb-4">It is about:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Fandom", "Personalities", "Digital Culture", "Creator Ecosystems", "Entertainment", "Social Relevance"].map((item, index) => (
                <div 
                  key={item} 
                  className="group bg-gradient-to-br from-[#F97316]/5 to-[#EC4899]/5 hover:from-[#F97316]/20 hover:to-[#EC4899]/20 rounded-lg px-4 py-4 text-center border border-transparent hover:border-[#F97316]/30 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-foreground font-semibold group-hover:bg-gradient-to-r group-hover:from-[#F97316] group-hover:to-[#EC4899] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="text-lg text-foreground mb-4">And IGPL already has the foundation for that:</p>
            <div className="flex flex-wrap gap-3">
              {["City-based rivalries", "Fast-paced formats", "Entertainment-led branding", "Younger visual identity", "Digital-first positioning"].map((item) => (
                <span key={item} className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-xl font-semibold text-[#0099CC] mt-8">
              This is exactly where Rootanian Sports sees massive long-term potential.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#EC4899]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">Rootanian&apos;s Vision for IGPL</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-8 leading-relaxed">
            Over the next 2–3 years, the opportunity is not just to grow the tournament.
          </p>
          <p className="text-xl text-foreground mb-8">
            The opportunity is to build: <span className="font-semibold">India&apos;s first mainstream golf entertainment property.</span>
          </p>

          <div className="bg-gradient-to-br from-[#F97316]/10 via-[#EC4899]/5 to-[#F97316]/10 rounded-xl p-8 mb-10 border border-[#F97316]/20 shadow-lg">
            <p className="text-lg text-foreground mb-6 font-medium">A league where:</p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-4 group cursor-default">
                <span className="w-8 h-8 bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform duration-300">1</span>
                <span className="text-foreground group-hover:text-[#F97316] transition-colors duration-300">Players become personalities</span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <span className="w-8 h-8 bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform duration-300">2</span>
                <span className="text-foreground group-hover:text-[#F97316] transition-colors duration-300">Cities become fandoms</span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <span className="w-8 h-8 bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform duration-300">3</span>
                <span className="text-foreground group-hover:text-[#F97316] transition-colors duration-300">Sponsors become part of entertainment</span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <span className="w-8 h-8 bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform duration-300">4</span>
                <span className="text-foreground group-hover:text-[#F97316] transition-colors duration-300">Content lives beyond match days</span>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-gradient-to-b from-[#F97316] to-[#EC4899] pl-6" style={{ borderImage: "linear-gradient(to bottom, #F97316, #EC4899) 1" }}>
            <p className="text-lg text-foreground mb-4">We believe IGPL can become:</p>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              The Formula 1 / LIV Golf style youth culture version of golf in India.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Stylised", "Fast", "Entertaining", "Digital-first", "Socially relevant"].map((item) => (
                <span key={item} className="text-muted-foreground text-sm">
                  {item} •
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Build Section */}
      <section className="py-20 px-6 bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-bl from-[#F97316]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-tr from-[#EC4899]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">What Rootanian Sports Can Help Build</span>
          </h2>

          {/* Building Player Personalities */}
          <div className="mb-16">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-5xl font-bold text-background/20">01</span>
              <h3 className="text-2xl md:text-3xl font-semibold">Building Player Personalities</h3>
            </div>
            <p className="text-lg text-background/80 mb-6">
              Modern sports audiences connect with people before statistics.
            </p>
            <p className="text-background/80 mb-4">Our focus would be to help shape:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {["Player identities", "Rivalries", "City narratives", "Fan-facing personalities", "Creator collaborations", "Entertainment-led storytelling"].map((item) => (
                <div key={item} className="bg-background/10 rounded-md px-4 py-3">
                  <span className="text-background/90 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-background/5 rounded-lg p-6 border border-background/10">
              <p className="text-background/60 text-sm mb-3">For example, players like:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Yuvraj Sandhu", "Gaurika Bishnoi", "Angad Cheema", "Kartik Sharma", "Arjun Prasad", "Ridhima Dilawari"].map((player) => (
                  <span key={player} className="bg-[#0099CC] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {player}
                  </span>
                ))}
              </div>
              <p className="text-background/80">
                have the potential to become recognisable sports personalities beyond golf audiences. Not just golfers. But <span className="font-semibold text-background">faces of youth sports culture.</span>
              </p>
            </div>
          </div>

          {/* Building Entertainment-First Content IPs */}
          <div className="mb-16">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-5xl font-bold text-background/20">02</span>
              <h3 className="text-2xl md:text-3xl font-semibold">Building Entertainment-First Content IPs</h3>
            </div>
            <p className="text-lg text-background/80 mb-6">
              IGPL should not behave like traditional golf content. It should feel:
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Louder", "Faster", "Entertaining", "Socially shareable", "Culturally active"].map((item) => (
                <span key={item} className="border border-background/30 text-background px-4 py-2 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-background/80 mb-4">Rootanian Sports would help create:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {["Rivalry-led content", "Player entertainment formats", "Creator collaborations", "City-based storytelling", "Fan engagement formats", "Behind-the-scenes ecosystems", "Sponsor-led entertainment IPs"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-full"></span>
                  <span className="text-background/80">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg font-semibold text-background mt-6">
              The objective: make golf feel socially exciting.
            </p>
          </div>

          {/* Building Sponsor Value */}
          <div className="mb-16">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-5xl font-bold text-background/20">03</span>
              <h3 className="text-2xl md:text-3xl font-semibold">Building Sponsor Value</h3>
            </div>
            <p className="text-lg text-background/80 mb-6">
              One of the biggest opportunities with IGPL is sponsor integration. Most leagues give sponsors visibility. But the future lies in: <span className="font-semibold text-background">participation.</span>
            </p>
            <p className="text-background/80 mb-4">Our role would be to create:</p>
            <ul className="space-y-2 text-background/80 mb-8">
              <li>• Sponsor-powered content formats</li>
              <li>• Entertainment integrations</li>
              <li>• Digital-first activations</li>
              <li>• Youth engagement concepts</li>
              <li>• Social-first sponsor moments</li>
            </ul>
            <div className="bg-background/5 rounded-lg p-6 border border-background/10">
              <p className="text-background/60 text-sm mb-4">For example:</p>
              <div className="space-y-3">
                {[
                  { brand: "Red Bull", desc: "powering pressure-based golf formats" },
                  { brand: "Swiggy/Zomato", desc: "integrating city rivalry content" },
                  { brand: "JBL", desc: "creating music-led golf entertainment" },
                  { brand: "Puma/Adidas", desc: "integrating fashion & player culture" },
                  { brand: "Samsung/OnePlus", desc: "enabling creator-led experiences" },
                ].map((item) => (
                  <div key={item.brand} className="flex items-center gap-2">
                    <span className="font-semibold text-[#0099CC]">{item.brand}</span>
                    <span className="text-background/70">{item.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-background/80 mt-4">
                The sponsor should feel: <span className="font-semibold text-background">organically part of the league culture.</span>
              </p>
            </div>
          </div>

          {/* Building Digital Culture */}
          <div>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-5xl font-bold text-background/20">04</span>
              <h3 className="text-2xl md:text-3xl font-semibold">Building Digital Culture Around IGPL</h3>
            </div>
            <p className="text-lg text-background/80 mb-6">
              The biggest leagues today do not only win on television. They win on:
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Instagram", "YouTube", "Creator ecosystems", "Meme culture", "Fandom conversations"].map((item) => (
                <span key={item} className="bg-background/10 text-background px-4 py-2 rounded-md text-sm">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-background/80 mb-4">
              Rootanian Sports would help IGPL evolve into: <span className="font-semibold text-background">a content-first sports property.</span>
            </p>
            <p className="text-background/60 mb-3">Meaning:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Always-on storytelling", "Trend-led content", "Creator ecosystems", "City fandoms", "Player-driven narratives", "Digital moments that live beyond tournaments"].map((item) => (
                <div key={item} className="text-background/80 text-sm">
                  → {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Approach Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#F97316] to-transparent opacity-30"></div>
        <div className="max-w-5xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">The Long-Term Approach</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Year 1 */}
            <div className="border-2 border-[#F97316]/30 rounded-lg p-8 hover:border-[#F97316] transition-colors duration-300 bg-gradient-to-b from-[#F97316]/5 to-transparent">
              <div className="text-sm text-[#F97316] font-bold mb-2 uppercase tracking-wider">Year 1</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Build the Identity</h3>
              <p className="text-sm text-muted-foreground mb-4">Focus:</p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] mt-1 text-sm">•</span>
                  <span className="text-sm">Defining IGPL&apos;s entertainment tone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] mt-1 text-sm">•</span>
                  <span className="text-sm">Creating flagship content IPs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] mt-1 text-sm">•</span>
                  <span className="text-sm">Increasing player visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] mt-1 text-sm">•</span>
                  <span className="text-sm">Building sponsor integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] mt-1 text-sm">•</span>
                  <span className="text-sm">Creating digital recall</span>
                </li>
              </ul>
            </div>

            {/* Year 2 */}
            <div className="border-2 border-[#F97316]/50 rounded-lg p-8 bg-gradient-to-b from-[#F97316]/10 to-[#EC4899]/5 hover:border-[#EC4899]/70 transition-colors duration-300">
              <div className="text-sm font-bold mb-2 uppercase tracking-wider bg-gradient-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">Year 2</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Build the Fandom</h3>
              <p className="text-sm text-muted-foreground mb-4">Focus:</p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[#EC4899] mt-1 text-sm">•</span>
                  <span className="text-sm">City-based rivalries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EC4899] mt-1 text-sm">•</span>
                  <span className="text-sm">Creator ecosystems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EC4899] mt-1 text-sm">•</span>
                  <span className="text-sm">Fan participation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EC4899] mt-1 text-sm">•</span>
                  <span className="text-sm">Youth communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EC4899] mt-1 text-sm">•</span>
                  <span className="text-sm">Recurring audience engagement</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                <span className="font-medium text-foreground">Goal:</span> Make audiences emotionally support teams & players.
              </p>
            </div>

            {/* Year 3 */}
            <div className="border-2 border-[#EC4899]/30 rounded-lg p-8 hover:border-[#EC4899] transition-colors duration-300 bg-gradient-to-b from-[#EC4899]/5 to-transparent">
              <div className="text-sm text-[#EC4899] font-bold mb-2 uppercase tracking-wider">Year 3</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Build the Movement</h3>
              <p className="text-sm text-muted-foreground mb-4">Focus:</p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[#EC4899] mt-1 text-sm">•</span>
                  <span className="text-sm">Large-scale entertainment collaborations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EC4899] mt-1 text-sm">•</span>
                  <span className="text-sm">OTT-style storytelling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EC4899] mt-1 text-sm">•</span>
                  <span className="text-sm">Experiential properties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EC4899] mt-1 text-sm">•</span>
                  <span className="text-sm">International creator integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EC4899] mt-1 text-sm">•</span>
                  <span className="text-sm">Larger sponsor ecosystems</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                <span className="font-medium text-foreground">Goal:</span> Establish IGPL as India&apos;s defining modern golf property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rootanian Sports Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F97316]/10 via-[#EC4899]/5 to-[#F97316]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#F97316]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#EC4899]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">Why Rootanian Sports</span>
          </h2>
          <p className="text-xl text-foreground mb-8">
            Rootanian Sports is the dedicated sports vertical of Rootanian, focused on:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {["Sports storytelling", "Athlete-led content", "Fan engagement", "Sports entertainment formats", "Digital-first sports IPs", "Sponsor-led creative ecosystems"].map((item, index) => (
              <div 
                key={item} 
                className="group bg-background rounded-lg px-4 py-4 border border-[#F97316]/20 hover:border-[#F97316]/50 hover:shadow-lg hover:shadow-[#F97316]/10 transition-all duration-300 cursor-default"
              >
                <span className="text-foreground text-sm font-medium group-hover:bg-gradient-to-r group-hover:from-[#F97316] group-hover:to-[#EC4899] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-xl p-8 border border-[#F97316]/20 shadow-lg mb-10">
            <p className="text-foreground font-medium mb-4">Our team has worked across:</p>
            <div className="flex flex-wrap gap-2">
              {["Mumbai Indians", "Gujarat Titans", "Royal Challengers Bengaluru", "Punjab Kings", "Sony LIV", "DHL", "Hyundai", "Abu Dhabi T10", "Kapil Dev Grant Thornton Golf"].map((brand) => (
                <span key={brand} className="bg-gradient-to-r from-[#F97316]/10 to-[#EC4899]/10 text-foreground px-4 py-2 rounded-full text-sm font-medium border border-[#F97316]/20 hover:border-[#F97316]/40 transition-colors duration-300 cursor-default">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <p className="text-lg text-foreground mb-6 font-medium">We understand:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {["Sports audiences", "Athlete ecosystems", "Sponsor expectations", "Tournament storytelling", "Entertainment-led sports content"].map((item) => (
              <li key={item} className="flex items-center gap-4 group cursor-default">
                <span className="w-3 h-3 bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                <span className="text-foreground group-hover:text-[#F97316] transition-colors duration-300">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-gradient-to-r from-[#F97316] to-[#EC4899] p-[2px] rounded-lg">
            <div className="bg-background rounded-lg p-6">
              <p className="text-xl font-semibold text-foreground">
                Most importantly, we understand that: <span className="bg-gradient-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">modern sports properties grow through culture, not just competition.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Want to Work Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F97316]/5 via-background to-[#EC4899]/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#F97316]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#EC4899]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            <span className="bg-gradient-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">How We Want to Work With IGPL</span>
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 rounded-full bg-muted border-2 border-muted-foreground/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <span className="text-muted-foreground text-2xl">&#x2717;</span>
              </div>
              <div>
                <p className="text-lg text-muted-foreground">
                  Rootanian Sports does not want to function as: <span className="line-through text-red-400">an external agency.</span>
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#F97316] to-[#EC4899] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#F97316]/20">
                <span className="text-white text-2xl">&#x2713;</span>
              </div>
              <div>
                <p className="text-lg text-foreground mb-4">
                  We want to work as: <span className="font-semibold bg-gradient-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">a long-term strategic content & growth partner.</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-background rounded-xl p-8 border border-[#F97316]/20 shadow-lg">
            <p className="text-foreground font-medium mb-6">Meaning:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Continuous innovation", "Strategic ideation", "Season-based planning", "Sponsor integration thinking", "Player personality building", "Digital ecosystem development"].map((item) => (
                <div key={item} className="flex items-center gap-4 group cursor-default">
                  <span className="w-3 h-3 bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-foreground group-hover:text-[#F97316] transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg font-semibold text-foreground mt-6">
              We become: an extension of the IGPL vision.
            </p>
          </div>
        </div>
      </section>

      {/* The Belief Section */}
      <section className="py-20 px-6 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/10 via-transparent to-[#EC4899]/10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">The Belief</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold mb-8 leading-relaxed">
            We genuinely believe that IGPL is entering the market at the right time.
          </p>
          <p className="text-lg text-background/80 mb-6">India is ready for:</p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Newer sports formats", "Creator-led entertainment", "Youth-driven fandoms", "Sports culture beyond cricket"].map((item) => (
              <span key={item} className="bg-background/10 text-background px-4 py-2 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
          <p className="text-xl text-background/80 mb-8">
            Golf globally is evolving. And IGPL has the opportunity to lead that evolution in India.
          </p>
          <p className="text-2xl font-bold text-background">
            Rootanian Sports would love to help build that future together.
          </p>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#F97316]/10 via-background to-[#EC4899]/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#F97316]/5 to-[#EC4899]/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Strategic Partnership
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">Rootanian Sports</span>
            <span className="mx-3 text-muted-foreground">×</span>
            <span className="bg-gradient-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">IGPL</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Building the future culture of golf in India.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-pEWh21RHL8su37pbn5DFCFMH0QTJtu.png"
            alt="Rootanian Sports"
            width={160}
            height={60}
            className="h-14 w-auto object-contain"
          />
          <p className="text-sm text-muted-foreground font-medium">
            All rights reserved by <span className="text-foreground">ROOTANIAN</span>
          </p>
        </div>
      </footer>
    </main>
  )
}
