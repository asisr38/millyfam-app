export default function FAQ() {
  const faqs = [
    {
      question: "What is Millyfam?",
      answer: "Millyfam is an exclusive community focused on wealth building and financial education."
    },
    {
      question: "How do I join?",
      answer: "You can join by selecting one of our membership plans and completing the registration process."
    },
    {
      question: "What's included in the membership?",
      answer: "Members get access to our community, educational resources, investment strategies, and exclusive events."
    }
  ]

  return (
    <section className="w-full py-8 md:py-12 lg:py-24 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-6 md:mb-8 lg:mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6 lg:space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2 md:space-y-3 p-4 md:p-6 bg-zinc-800 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-[#D4AF37]">{faq.question}</h3>
              <p className="text-sm md:text-base text-zinc-200">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

