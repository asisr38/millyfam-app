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
      <section id="testimonials" className="w-full py-8 md:py-12 lg:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-8">
            What Our Members Say
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-xl">
                <p className="text-lg mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="text-[#D4AF37] font-bold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  