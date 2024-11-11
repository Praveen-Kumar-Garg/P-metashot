// FAQSection.tsx
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "How does Shot benefit both job seekers and hiring companies?",
    answer: "Shot serves dual purposes.For job seekers Shot provides a platform to practice interviews, receive instant feedback, and improve their skills. For hiring companies: Shot streamlines the candidate screening process, reduces bias, and helps identify top talent more efficiently."
  },
  {
    question: "Can Shot be customized for specific industries or job roles?",
    answer: "Yes, absolutely. Shot offers: Preset job descriptions for common roles across various industries.The ability to upload custom job descriptions for highly specific positions.Customizable assessment criteria to match particular company or industry requirements."
  },
  {
    question: "How does Shot evaluate candidates' responses?",
    answer: "Shot uses advanced natural language processing to assess responses based on: Cognitive skills: Problem-solving, analytical thinking, creativity, etc.Non-cognitive skills: Communication, adaptability, teamwork, etc.Relevance to the job description or industry requirements.Shot provides scores and detailed feedback for each area, helping both candidates improve and companies make informed decisions."
  },
  {
    question: "Is Shot meant to replace human recruiters?",
    answer: "Shot is designed to complement, not replace, human recruiters. It efficiently handles initial screenings, freeing up recruiters to focus on high-value tasks like final interviews and cultural fit assessments. By providing objective data, Shot supports recruiters in making informed decisions, streamlining the hiring process, especially for high-volume recruitment. Ultimately, human recruiters remain crucial for complex decision-making and ensuring the best possible fit for the company."
  }
];

const FAQSection: React.FC<FAQSectionProps> = ({ faqs = defaultFAQs }) => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">FAQ</h1>
      
      <Accordion.Root
        type="single"
        collapsible
        className="space-y-4"
      >
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="border-b border-gray-200"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex items-center justify-between w-full py-4 text-left">
                <span className="text-lg font-medium text-purple-600 flex items-center">
                  <span className="mr-2">+</span>
                  {faq.question}
                </span>
                <ChevronDownIcon 
                  className="w-4 h-4 transition-transform duration-200 transform accordion-chevron" 
                />
              </Accordion.Trigger>
            </Accordion.Header>
            
            <Accordion.Content className="overflow-hidden transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              <div className="py-4 text-gray-700">
                {faq.answer}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default FAQSection;