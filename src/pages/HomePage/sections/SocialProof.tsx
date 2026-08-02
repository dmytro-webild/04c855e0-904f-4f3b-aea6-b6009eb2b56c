import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import SectionErrorBoundary from '@/components/ui/SectionErrorBoundary';

export default function SocialProofSection() {
  return (
    <div data-webild-section="social-proof" id="social-proof">
      <SectionErrorBoundary name="social-proof">
        <TestimonialMarqueeCards
          tag="Real Results"
          title="Loved by our clients"
          description="See what others are saying about their BraidBuddy experience."
          testimonials={[
            {
              name: "Sarah J.",
              role: "Knotless Braids",
              quote: "Absolutely love my knotless braids! The process was so smooth and the stylist was amazing.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3H6bWYFe0S1ZtUhWnfj8Arfxk1E/uploaded-1785629985194-f7hs6q0f.jpg"
            },
            {
              name: "Jessica M.",
              role: "Feed-in Braids",
              quote: "The best braiding experience I've had. My hair feels lightweight and looks stunning.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3H6bWYFe0S1ZtUhWnfj8Arfxk1E/uploaded-1785629985195-vxwybf4g.jpg"
            },
            {
              name: "Amanda T.",
              role: "Stitch Braids",
              quote: "So neat and exactly what I asked for! The AI consultation really helped me decide.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3H6bWYFe0S1ZtUhWnfj8Arfxk1E/uploaded-1785629985196-khhn183q.jpg"
            },
            {
              name: "Chloe R.",
              role: "Boho Braids",
              quote: "I'm obsessed with these boho braids. They are so soft and bouncy, perfect for my vacation.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3H6bWYFe0S1ZtUhWnfj8Arfxk1E/uploaded-1785629985196-4wi2gkxk.jpg"
            },
            {
              name: "Nia K.",
              role: "Senegalese Twists",
              quote: "Beautiful twists with such clean parts. Will definitely be booking again!",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3H6bWYFe0S1ZtUhWnfj8Arfxk1E/uploaded-1785629985197-i9d4bswt.jpg"
            }
          ]}
          textAnimation="slide-up"
        />
      </SectionErrorBoundary>
    </div>
  );
}