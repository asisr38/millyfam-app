import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-md space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Contact Us</h2>
          <p className="text-zinc-200 text-center">Have questions? Reach out to us!</p>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button className="w-full bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

