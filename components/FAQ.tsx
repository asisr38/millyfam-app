import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Millyfam?",
    answer: "Millyfam is a monthly subscription-based Discord community dedicated to helping members achieve financial success. We provide valuable resources, including crypto plays, sports betting tips, stock insights, financial consulting, real estate advice, and more money-making strategies."
  },
  {
    question: "How does the subscription work?",
    answer: "Members pay a monthly fee to gain access to Millyfam's exclusive Discord platform. This includes real-time updates, expert insights, and a supportive community of like-minded individuals."
  },
  {
    question: "Who is Millyfam for?",
    answer: "Millyfam is designed for anyone looking to grow their financial knowledge and explore new opportunities, whether you're a beginner or an experienced investor."
  },
  {
    question: "What services does Millyfam offer?",
    answer: `Millyfam offers a range of services including:
      • Crypto Plays: In-depth strategies and insights into cryptocurrency trends.
      • Sports Betting: Expert picks and advice to help members make informed decisions.
      • Stock Market Insights: Curated stock tips and strategies for better investment outcomes.
      • Financial Consulting: Guidance on personal finance and wealth-building strategies.
      • Real Estate Advice: Tips on diversifying investments through real estate.
      • Money-Making Tips & Tricks: Creative ways to grow your income.`
  },
  {
    question: "Is Millyfam responsible for my financial outcomes?",
    answer: "No. Millyfam provides educational content and insights to empower members to make their own informed decisions. We do not guarantee specific results and are not liable for any financial losses. Always conduct your own research and consult a professional before making financial decisions."
  },
  {
    question: "How can I join Millyfam?",
    answer: "To join, simply subscribe through our official platform and you'll receive an invitation to our exclusive Discord community."
  },
  {
    question: "What can I expect as a member?",
    answer: `As a member, you'll have access to:
      • Expert advice from seasoned managers, cappers, and consultants.
      • A supportive and driven community that shares your goals.
      • Timely updates on crypto, stocks, sports betting, and more.
      • Tools and resources to help you stay ahead in your financial journey.`
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time. However, we're confident that the value we provide will make you want to stay."
  },
  {
    question: "Who runs Millyfam?",
    answer: "Millyfam is managed by a team of experienced professionals passionate about empowering others to achieve financial success. Our team includes managers, cappers, and consultants dedicated to providing top-tier value."
  },
  {
    question: "Still have questions?",
    answer: "Feel free to reach out to us through our contact page or directly within the Discord community. We're here to help!"
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[32px] leading-tight md:text-[40px] font-bold tracking-tighter text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] md:text-[18px] text-zinc-300 max-w-2xl mx-auto">
            Find answers to common questions about Millyfam and our services.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-zinc-900 rounded-xl border-zinc-800 px-4 md:px-6"
            >
              <AccordionTrigger className="text-left text-white hover:text-[#D4AF37] transition-colors text-[16px] md:text-[18px] py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-300 text-[14px] md:text-[16px] pb-6">
                {faq.answer.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-2 leading-relaxed">{paragraph}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

