import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'AI Policy',
  description:
    'Our AI Policy outlines how Wacky Wizards uses artificial intelligence within our organization.',
};

type SectionProps = {
  color: string;
  title: string;
  children: React.ReactNode;
};

function Section({ color, title, children }: SectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        <div
          className={`w-8 h-8 ${color} rounded-lg mr-3 flex items-center justify-center shrink-0`}
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        {title}
      </h2>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
        {children}
      </div>
    </section>
  );
}

export default function AIPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-900 py-16">
      <div className="relative mx-auto max-w-4xl px-6 md:px-10 pt-6 md:pt-10">

        <header className="mb-12 text-center border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            AI Policy
          </h1>

          <p className="text-base sm:text-lg text-gray-400">
            Last Updated: July 3rd, 2026
          </p>
        </header>

        <div className="max-w-none text-gray-300">

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
            <p className="text-xl leading-relaxed text-gray-200">
              This policy outlines how Wacky Wizards uses artificial
              intelligence within our organization. We believe AI is a useful
              tool for improving productivity, but it should never replace human
              creativity, judgment, or responsibility.
            </p>
          </div>

          <Section color="bg-blue-500" title="Our Philosophy">
            <p>
              Artificial intelligence is a tool and not a replacement for our team.
            </p>

            <p>
              We use AI where it can improve efficiency or assist with repetitive
              tasks while ensuring that all important decisions, creative work,
              and final deliverables remain under human control and authorship.
            </p>

            <p>
              Technology should enhance human work, not replace it.
            </p>
          </Section>

          <Section color="bg-emerald-500" title="Software Development">
            <p>AI may be used to assist with:</p>

            <div className="grid gap-3">
              {[
                'Reviewing code for bugs or potential issues.',
                'Suggesting improvements to code structure, readability, and performance.',
                'Explaining programming concepts, APIs, or documentation.',
                'Helping developers research technical problems.',
              ].map((item) => (
                <div key={item} className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
              <p className="text-emerald-200 font-medium mb-2">
                Our Commitment
              </p>

              <div className="grid gap-2">
                {[
                  'The majority of our production code is written by hand.',
                  'Every AI-generated suggestion is reviewed, understood, and approved by a developer before being used.',
                  'AI never has authority to make production changes without human oversight.',
                ].map((item) => (
                  <div key={item} className="flex items-start">
                    <span className="text-emerald-300 mr-3">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section color="bg-purple-500" title="Artwork & Creative Content">
            <p>
              We <strong>do not</strong> use AI-generated artwork, textures,
              models, music, or other creative assets in our released products.
            </p>

            <p>AI may be used internally for:</p>

            <div className="grid gap-3">
              {[
                'Brainstorming ideas',
                'Mood boards',
                'Concept exploration',
                'Early visual inspiration',
              ].map((item) => (
                <div key={item} className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p>
              All assets included in our released software and services are created or
              appropriately licensed by humans.
            </p>
          </Section>

          <Section color="bg-amber-500" title="Writing & Communication">
            <p>AI may assist with:</p>

            <div className="grid gap-3">
              {[
                'Grammar and spelling',
                'Translation between languages',
                'Improving clarity and readability',
              ].map((item) => (
                <div key={item} className="flex items-start">
                  <span className="text-amber-400 mr-3">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p>
              Our documentation, policies, announcements, and creative writing
              are authored and approved by members of our team.
            </p>
          </Section>

          <Section color="bg-red-500" title="Privacy & Confidentiality">
            <p>
              We aim to protect the privacy of our users and contributors.
            </p>

            <p>
              When using AI tools, we avoid submitting confidential or sensitive
              information to public AI services unless doing so is necessary,
              lawful, and consistent with our Privacy Policy.
            </p>
          </Section>

          <Section color="bg-green-500" title="Human Accountability">
            <p>
              AI does not make decisions on behalf of Wacky Wizards.
            </p>

            <p>
              Final responsibility for our software, moderation, policies,
              creative direction, and public communications always belongs to
              our team.
            </p>
          </Section>

          <Section color="bg-indigo-500" title="Transparency">
            <p>
              We believe transparency builds trust.
            </p>

            <p>
              If our use of AI changes in a meaningful way, we will update this
              policy accordingly.
            </p>
          </Section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Contact Information
            </h2>

            <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <p className="mb-6 text-lg">
                If you have any questions about this AI Policy or our use of
                artificial intelligence, please contact us:
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg mr-4 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Email:</span>
                    <a
                      href="mailto:contact@wackywizards.org"
                      className="text-blue-400 hover:text-blue-300 ml-2 underline transition-colors"
                    >
                      contact@wackywizards.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg mr-4 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Discord:</span>
                    <a
                      href="https://www.wackywizards.org/discord"
                      className="text-blue-400 hover:text-blue-300 ml-2 underline transition-colors"
                    >
                      Support Server
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}