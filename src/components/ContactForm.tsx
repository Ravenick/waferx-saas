import { useState, type FormEvent } from 'react';
import { Send, Mail, User, Building2, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase, type NewContactSubmission } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState<NewContactSubmission>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setStatus('error');
      setErrorMsg('Contact submissions are temporarily unavailable. Please email us directly.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name,
      email: form.email,
      company: form.company || null,
      message: form.message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const fields = [
    { key: 'name' as const, label: 'Full Name', icon: User, type: 'text', placeholder: 'Jane Doe', required: true },
    { key: 'email' as const, label: 'Email Address', icon: Mail, type: 'email', placeholder: 'jane@company.com', required: true },
    { key: 'company' as const, label: 'Company', icon: Building2, type: 'text', placeholder: 'Acme Inc. (optional)', required: false },
  ];

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-medium text-gray-300 tracking-wide">Get in Touch</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Let's build the <span className="text-gradient">future</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Tell us about your workload and our solutions team will architect a
            custom WaferX deployment for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-700/20 border border-purple-500/20 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">Dedicated Support</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Every inquiry gets a response from our silicon engineering team
                within 24 hours.
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-gray-400">Currently available</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-gray-600 mb-1">Email</div>
                  <div className="text-sm text-white">hello@waferx.tech</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">Response Time</div>
                  <div className="text-sm text-white">Under 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 lg:p-10 space-y-5">
              {fields.map((f) => (
                <div key={f.key}>
                  <label className="block text-xs font-medium text-gray-400 mb-2">
                    {f.label}
                    {f.required && <span className="text-purple-400 ml-1">*</span>}
                  </label>
                  <div className="relative">
                    <f.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                    <input
                      type={f.type}
                      required={f.required}
                      value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.placeholder}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/40 focus:bg-white/[0.05] transition-all duration-300"
                    />
                  </div>
                </div>
              ))}

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">
                  Message <span className="text-purple-400 ml-1">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-600" />
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your compute needs..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/40 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 transition-all duration-300 glow-purple hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 animate-fade-up">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-300">
                    Message sent! Our team will get back to you within 24 hours.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 animate-fade-up">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-300">{errorMsg}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
