import Card from '@/components/ui/Card';
import { Calendar, Apple } from 'lucide-react';
import SectionErrorBoundary from '@/components/ui/SectionErrorBoundary';

export default function PricingSection() {
  return (
    <div id="pricing" data-webild-section="pricing" className="py-24 bg-background">
      <SectionErrorBoundary name="pricing">
        <div className="w-content-width mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Pricing/Hairstyles */}
          <div className="lg:col-span-2 space-y-8">
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Hairstyles & Pricing</h2>
              <p className="text-lg text-accent">Back to school prices included.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Fulani Braids */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Fulani Braids</h3>
                <ul className="space-y-2 text-accent">
                  <li className="flex justify-between"><span>Extra small</span> <span>$180 / $144</span></li>
                  <li className="flex justify-between"><span>Small</span> <span>$165 / $132</span></li>
                  <li className="flex justify-between"><span>Smedium</span> <span>$155 / $124</span></li>
                  <li className="flex justify-between"><span>Medium</span> <span>$150 / $120</span></li>
                  <li className="flex justify-between"><span>Large</span> <span>$140 / $112</span></li>
                  <li className="flex justify-between"><span>Jumbo</span> <span>$115 / $92</span></li>
                </ul>
                <p className="mt-4 text-sm text-accent italic">$20 Extra for extended length</p>
              </Card>
              
              {/* Boho Knotless */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Boho Knotless</h3>
                <ul className="space-y-2 text-accent">
                  <li className="flex justify-between"><span>Extra small</span> <span>$230 / $184</span></li>
                  <li className="flex justify-between"><span>Small</span> <span>$200 / $160</span></li>
                  <li className="flex justify-between"><span>Smedium</span> <span>$180 / $144</span></li>
                  <li className="flex justify-between"><span>Medium</span> <span>$160 / $128</span></li>
                  <li className="flex justify-between"><span>Large</span> <span>$140 / $112</span></li>
                  <li className="flex justify-between"><span>Jumbo</span> <span>$135 / $108</span></li>
                </ul>
              </Card>

              {/* Miracle Knots */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Miracle Knots</h3>
                <ul className="space-y-2 text-accent">
                  <li className="flex justify-between"><span>Extra small</span> <span>$200 / $160</span></li>
                  <li className="flex justify-between"><span>Small</span> <span>$180 / $144</span></li>
                  <li className="flex justify-between"><span>Smedium</span> <span>$165 / $132</span></li>
                  <li className="flex justify-between"><span>Medium</span> <span>$155 / $124</span></li>
                  <li className="flex justify-between"><span>Large</span> <span>$145 / $116</span></li>
                  <li className="flex justify-between"><span>Jumbo</span> <span>$125 / $100</span></li>
                </ul>
                <p className="mt-4 text-sm text-accent italic">$20 Extra for extended length</p>
              </Card>

              {/* Knotless Braids */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Knotless Braids</h3>
                <ul className="space-y-2 text-accent">
                  <li className="flex justify-between"><span>Extra small</span> <span>$225 / $180</span></li>
                  <li className="flex justify-between"><span>Small</span> <span>$200 / $160</span></li>
                  <li className="flex justify-between"><span>Smedium</span> <span>$180 / $144</span></li>
                  <li className="flex justify-between"><span>Medium</span> <span>$165 / $132</span></li>
                  <li className="flex justify-between"><span>Large</span> <span>$140 / $112</span></li>
                  <li className="flex justify-between"><span>Jumbo</span> <span>$125 / $100</span></li>
                </ul>
              </Card>
            </div>

            {/* Other Styles */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Other Styles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-accent">
                <div className="flex justify-between"><span>Half Braids/half quickweave</span> <span>$140 / $112</span></div>
                <div className="flex justify-between"><span>Half Braids/half sew in</span> <span>$160 / $120</span></div>
                <div className="flex justify-between"><span>Quick weave</span> <span>$160 / $128</span></div>
                <div className="flex justify-between"><span>Side part quick weave</span> <span>$165 / $132</span></div>
                <div className="flex justify-between"><span>Sew in</span> <span>$160 / $128</span></div>
                <div className="flex justify-between"><span>Side part sew in</span> <span>$165 / $132</span></div>
                <div className="flex justify-between"><span>Bob hairstyle</span> <span>$130 / $104</span></div>
                <div className="flex justify-between"><span>Sew in Bob</span> <span>$135 / $108</span></div>
              </div>
              <div className="mt-6 p-4 bg-primary-cta/10 rounded-lg border border-primary-cta/20">
                <p className="text-sm font-bold text-foreground text-center">$50 deposit is nonrefundable unless hairstylist cancels</p>
              </div>
            </Card>
          </div>

          {/* Sign In / Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <Card className="p-8 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-6 text-primary-cta" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Book Appointment</h3>
                <p className="text-accent mb-8">Sign in to sync with Google Calendar and schedule your session.</p>
                
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-border bg-card text-foreground hover:bg-accent/10 transition-colors font-medium">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Sign in with Google
                  </button>
                  
                  <button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-border bg-card text-foreground hover:bg-accent/10 transition-colors font-medium">
                    <Apple className="w-5 h-5" />
                    Sign in with Apple
                  </button>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </SectionErrorBoundary>
    </div>
  );
}