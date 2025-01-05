export default function Testimonials() {
    const testimonials = [
      {
        quote: "Joining Millyfam was the best financial decision I've ever made. The community and knowledge shared here are invaluable.",
        author: "John D."
      },
      {
        quote: "I've 10x'd my network and my net worth since becoming a member. The ROI is unreal!",
        author: "Sarah M."
      },
      {
        quote: "The strategies I've learned here have completely changed my approach to wealth building. Highly recommended!",
        author: "Mike R."
      }
    ]
  
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">What Our Members Say</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-lg mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="text-[#D4AF37] font-bold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  