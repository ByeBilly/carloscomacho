import { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';

const checklistData = [
  {
    category: "1. Testimonials & Reviews (Strictly Prohibited)",
    items: [
      "Are all pages completely free of patient reviews, ratings, and clinical testimonials?",
      "Are embedded Google Reviews, Facebook Reviews, or Yelp widgets removed from the site?",
      "Are 'success stories' or case studies stripped of any qualitative praise about clinical outcomes?",
      "Is there an absence of subjective statements like 'Carlos changed my life' or 'Highly recommended'?"
    ]
  },
  {
    category: "2. Claims & Expectations",
    items: [
      "Are all descriptions of services factual, objective, and purely informational?",
      "Are superlative claims avoided? (e.g., NO 'best psychologist', 'fastest recovery', 'most effective').",
      "Is there an absence of language that guarantees a specific outcome or 'cure'?",
      "Do descriptions use supportive, realistic language? (e.g., 'can help manage', 'supports recovery', 'evidence-based approaches').",
      "Does the site avoid creating an unreasonable expectation of beneficial treatment?"
    ]
  },
  {
    category: "3. Professional Titles & Qualifications",
    items: [
      "Is the title 'Registered Psychologist' used accurately without implying a specialist endorsement (unless officially endorsed by AHPRA)?",
      "Are all accreditations (SIRA, MAA) stated factually without implying superiority over other practitioners?",
      "Is the AHPRA registration explicitly stated or easily verifiable?"
    ]
  },
  {
    category: "4. Financial & Inducement Compliance",
    items: [
      "Are fees, Medicare rebates, and billing practices stated clearly and accurately?",
      "Is the site free from 'time-limited offers' or discounts that could pressure a patient into making a rushed clinical decision?",
      "Are bulk-billing or telehealth eligibility requirements clearly outlined without misleading terms?"
    ]
  }
];

export default function AHPRACompliance() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleCheck = (item: string) => {
    const newSet = new Set(checkedItems);
    if (newSet.has(item)) {
      newSet.delete(item);
    } else {
      newSet.add(item);
    }
    setCheckedItems(newSet);
  };

  const totalItems = checklistData.reduce((acc, cat) => acc + cat.items.length, 0);
  const progress = Math.round((checkedItems.size / totalItems) * 100);

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <a 
          href="#" 
          className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Website
        </a>

        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
          <div className="p-8 md:p-12 border-b border-neutral-100 bg-neutral-900 text-white">
            <div className="flex items-center justify-between mb-6">
              <Shield className="w-12 h-12 text-neutral-300" />
              <div className="text-right">
                <div className="text-3xl font-medium tracking-tight">{progress}%</div>
                <div className="text-sm text-neutral-400 mt-1">Audit Complete</div>
              </div>
            </div>
            <h1 className="text-3xl font-medium tracking-tight mb-4">AHPRA Compliance Audit</h1>
            <p className="text-neutral-300 text-lg max-w-2xl leading-relaxed">
              Use this interactive checklist to audit Carlos Camacho's website content. Under the Health Practitioner Regulation National Law, advertising must be factual, objective, and completely free of clinical testimonials.
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            {checklistData.map((section, sIdx) => (
              <motion.div 
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sIdx * 0.1 }}
              >
                <h2 className="text-xl font-medium text-neutral-900 mb-6 flex items-center">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.items.map((item, iIdx) => {
                    const isChecked = checkedItems.has(item);
                    return (
                      <div 
                        key={iIdx}
                        onClick={() => toggleCheck(item)}
                        className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-4
                          ${isChecked 
                            ? 'border-neutral-900 bg-neutral-50' 
                            : 'border-neutral-100 hover:border-neutral-200'}`}
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          {isChecked ? (
                            <CheckCircle2 className="w-6 h-6 text-neutral-900" />
                          ) : (
                            <div className="w-6 h-6 rounded-full border-2 border-neutral-300" />
                          )}
                        </div>
                        <p className={`text-base leading-relaxed ${isChecked ? 'text-neutral-900' : 'text-neutral-600'}`}>
                          {item}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}

            <div className="mt-12 bg-neutral-50 rounded-xl p-6 border border-neutral-200 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-neutral-900 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">Legal Disclaimer</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  This checklist is designed as a practical auditing tool based on the AHPRA Guidelines for Advertising a Regulated Health Service. It does not constitute formal legal advice. For complete certainty, always refer directly to the official <a href="https://www.ahpra.gov.au/Publications/Advertising-hub.aspx" target="_blank" rel="noreferrer" className="underline hover:text-neutral-900">AHPRA Advertising Hub</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
