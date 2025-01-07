import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="w-full min-h-[40vh] flex items-center justify-center py-12 md:py-16 lg:py-24 bg-zinc-900">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[600px] space-y-6 md:space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Contact Us</h2>
            <p className="text-sm md:text-base text-zinc-200">Have questions? Reach out to us!</p>
          </div>
          <form className="space-y-4 md:space-y-6">
            <Input 
              className="w-full text-sm md:text-base rounded-xl bg-zinc-900/50" 
              placeholder="Your Name" 
            />
            <Input 
              className="w-full text-sm md:text-base rounded-xl bg-zinc-900/50" 
              type="email" 
              placeholder="Your Email" 
            />
            <Textarea 
              className="w-full text-sm md:text-base min-h-[120px] md:min-h-[150px] rounded-xl bg-zinc-900/50" 
              placeholder="Your Message" 
            />
            <Button className="w-full bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-3 px-4 rounded-xl text-sm md:text-base">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

