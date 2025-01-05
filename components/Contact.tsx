import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-md space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center">Contact Us</h2>
          <p className="text-sm md:text-base text-zinc-200 text-center">Have questions? Reach out to us!</p>
          <form className="space-y-3 md:space-y-4">
            <Input className="w-full text-sm md:text-base rounded-xl" placeholder="Your Name" />
            <Input className="w-full text-sm md:text-base rounded-xl" type="email" placeholder="Your Email" />
            <Textarea className="w-full text-sm md:text-base min-h-[100px] md:min-h-[150px] rounded-xl" placeholder="Your Message" />
            <Button className="w-full bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded-xl text-sm md:text-base">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

