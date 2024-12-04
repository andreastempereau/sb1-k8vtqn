import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg">
          <button
            className="w-full px-4 py-3 flex justify-between items-center focus:outline-none"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-medium text-gray-900">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-4 pb-3 text-gray-700">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}