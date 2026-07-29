import ScrollReveal from '@/components/ScrollReveal';

export default function Contact() {
  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--background)', minHeight: '100vh' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--secondary)', padding: 'clamp(3rem, 6vw, 6rem) 1rem', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)' }}>Get in Touch</span>
            </div>
            <h1 className="h1" style={{ marginBottom: '1.5rem', color: 'var(--foreground)' }}>
              Contact <span style={{ color: 'var(--primary)' }}>Us</span>
            </h1>
            <p className="p-large" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Reach out through your preferred channel — we typically respond within a few hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '4rem' }}>
          
          {/* Left Column: Contact Methods */}
          <div>
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* WhatsApp */}
                <div className="glass-panel hover-lift" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', backgroundColor: 'var(--secondary)' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'white' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.25rem' }}>Chat on WhatsApp</h3>
                    <p style={{ color: 'rgba(0,0,0,0.6)' }}>+971 4 288 2777</p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="glass-panel hover-lift" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', backgroundColor: 'var(--secondary)' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'white' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.25rem' }}>Call Us</h3>
                    <p style={{ color: 'rgba(0,0,0,0.6)' }}>+971 4 288 2777</p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="glass-panel hover-lift" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', backgroundColor: 'var(--secondary)' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--background)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.25rem' }}>Email Us</h3>
                    <p style={{ color: 'rgba(0,0,0,0.6)' }}>admin@mariotkitchen.com</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Quotation Form */}
          <div style={{ gridColumn: 'span 2' }}>
            <ScrollReveal delay={200}>
              <div className="glass-panel" style={{ padding: 'clamp(2rem, 5vw, 4rem)', backgroundColor: 'var(--secondary)' }}>
                <h2 className="h2" style={{ marginBottom: '1rem', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Request a Free Quotation</h2>
                <p style={{ color: 'rgba(0,0,0,0.6)', marginBottom: '3rem', fontSize: '1.125rem' }}>
                  Tell us about your project. Attach a BOQ or kitchen layout for an accurate quote.
                </p>

                <form className="contact-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  
                  {/* Row 1 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>Full Name *</label>
                    <input type="text" placeholder="John Doe" className="form-input" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>Phone / WhatsApp *</label>
                    <input type="text" placeholder="+971 4 288 2777" className="form-input" />
                  </div>

                  {/* Row 2 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>Company Name</label>
                    <input type="text" placeholder="Mariot Group" className="form-input" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>Email Address</label>
                    <input type="email" placeholder="john@example.com" className="form-input" />
                  </div>

                  {/* Row 3 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>Project Type *</label>
                    <select className="form-input" defaultValue="Restaurants">
                      <option value="Restaurants">Restaurants</option>
                      <option value="Cafés">Cafés</option>
                      <option value="Hotels">Hotels</option>
                      <option value="Catering">Catering</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>Emirate *</label>
                    <select className="form-input" defaultValue="Dubai">
                      <option value="Dubai">Dubai</option>
                      <option value="Abu Dhabi">Abu Dhabi</option>
                      <option value="Sharjah">Sharjah</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Row 4 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>Approximate Budget (AED)</label>
                    <select className="form-input" defaultValue="50,000+">
                      <option value="Under 50,000">Under 50,000</option>
                      <option value="50,000+">50,000 - 100,000</option>
                      <option value="100,000+">100,000+</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>Expected Start Date</label>
                    <select className="form-input" defaultValue="Not sure yet">
                      <option value="Immediately">Immediately</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="Within 3 months">Within 3 months</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  {/* Row 5: Full Width */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>Project Description * <span style={{ opacity: 0.5, fontWeight: 400 }}>(optional)</span></label>
                    <textarea rows={4} placeholder="Describe your kitchen requirements..." className="form-input" style={{ resize: 'vertical' }}></textarea>
                  </div>

                  {/* Row 6: Full Width */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>Company Website</label>
                    <input type="text" placeholder="https://" className="form-input" />
                  </div>

                  {/* Preferred Contact Method */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', gridColumn: '1 / -1', margin: '1rem 0' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>Preferred Contact Method</label>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input type="radio" name="contact_method" value="WhatsApp" defaultChecked style={{ accentColor: 'var(--primary)' }} />
                        WhatsApp
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input type="radio" name="contact_method" value="Phone Call" style={{ accentColor: 'var(--primary)' }} />
                        Phone Call
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input type="radio" name="contact_method" value="Email" style={{ accentColor: 'var(--primary)' }} />
                        Email
                      </label>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>Upload BOQ or Kitchen Layout</label>
                    <div style={{ border: '2px dashed var(--glass-border)', borderRadius: '12px', padding: '2rem', textAlign: 'center', backgroundColor: 'var(--background)' }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5, marginBottom: '1rem', margin: '0 auto' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                      <p style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--foreground)' }}>Click to upload or drag and drop</p>
                      <p style={{ fontSize: '0.75rem', color: 'rgba(0,0,0,0.5)' }}>PDF, JPG or PNG — max 10MB</p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
                    <button className="btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.125rem' }} type="button">
                      Submit Request
                    </button>
                  </div>
                </form>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Adding a small global style block for the form inputs to match the premium theme */}
      <style dangerouslySetInnerHTML={{__html: `
        .form-input {
          width: 100%;
          padding: 1rem 1.25rem;
          background-color: var(--background);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          font-family: inherit;
          font-size: 1rem;
          color: var(--foreground);
          transition: all 0.2s ease;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(42, 170, 222, 0.1);
        }
      `}} />
    </main>
  );
}
