import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import { Calendar, CheckCircle, Search } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboard
      tag="✨ Now Booking Spring Styles"
      title="Your [Dream] Braids Await"
      description="Discover gorgeous braiding styles, get AI-powered recommendations from our Braid Bestie, and book your next look — all in one place."
      primaryButton={{
        text: "Explore Styles",
        href: "#trending",
      }}
      secondaryButton={{
        text: "Chat with Bestie",
        href: "#contact",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/dreamy-young-woman-with-bright-makeup-posing-with-pleasure-close-up-photo-gorgeous-female-model-pink-periwig-looking-with-smile_197531-8034.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="how-it-works" data-section="how-it-works">
    <SectionErrorBoundary name="how-it-works">
          <AboutFeaturesSplit
      tag="Steps"
      title="How BraidBuddy Works"
      description="Everything you need to get the look you love in three easy steps."
      items={[
        {
          icon: Search,
          title: "Browse Styles",
          description: "Explore our curated collection of gorgeous braiding styles with preview cards.",
        },
        {
          icon: Calendar,
          title: "Ask Braid Bestie",
          description: "Chat with our AI advisor to find the perfect style for your hair type and lifestyle.",
        },
        {
          icon: CheckCircle,
          title: "Book & Slay",
          description: "Pick your date and time, and get ready to turn heads with your new look.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/refined-european-model-with-tanned-skin-looking-down-photoshoot-long-dress-blissful-pinkhaired-girl-trendy-sunglasses-standing-beside-white-wall_197531-26190.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="trending" data-section="trending">
    <SectionErrorBoundary name="trending">
          <FeaturesRevealCardsBento
      tag="Trending ✨"
      title="Most Requested Looks"
      description="Discover your next signature style."
      items={[
        {
          title: "Knotless Braids",
          description: "Pain-free, lightweight. Advanced.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-woman-with-pink-purple-braids-black-waist-bag-posing-outdoor_343596-2035.jpg",
        },
        {
          title: "Box Braids",
          description: "Classic look, versatile. Medium.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/lovely-african-american-woman-with-dreadlocks-leopard-outfit-cafe-beautiful-cool-fashionable-black-young-girl-indoor_627829-4832.jpg",
        },
        {
          title: "Cornrows",
          description: "Clean, defined patterns. Medium.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-beautiful-woman-with-braids_23-2151429512.jpg",
        },
        {
          title: "Goddess Braids",
          description: "Flowy, glam vibes. Advanced.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-with-african-braids_633478-1408.jpg",
        },
        {
          title: "Fulani Braids",
          description: "Intricate, cultural style. Advanced.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/individual-with-dreads-rastafari-movement_23-2151712145.jpg",
        },
        {
          title: "Twists",
          description: "Soft and bouncy. Easy.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-woman-portrait-street-outdoor-portrait-fashion-model_1296-881.jpg",
        },
        {
          title: "Bohemian Braids",
          description: "Textured, effortless. Medium.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-turquoise-hair-striped-dress-posing_24972-2937.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Help"
      title="Common Questions"
      description="We've got you covered."
      items={[
        {
          question: "How do I book an appointment?",
          answer: "Click 'Book This Style' on any card and follow the prompts.",
        },
        {
          question: "Can I request custom styles?",
          answer: "Yes, chat with our Braid Bestie to discuss your vision.",
        },
        {
          question: "What hair type works best?",
          answer: "Our AI helps find styles customized to any hair type.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="AI Assistant"
      text="Not Sure What Style to Get? Let our AI Braid Bestie help you discover the perfect braiding style based on your hair, lifestyle, and vibe."
      primaryButton={{
        text: "Talk to Braid Bestie",
        href: "#",
      }}
      secondaryButton={{
        text: "View All Styles",
        href: "#trending",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
