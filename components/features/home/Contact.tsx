"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactForm } from "@/app/api/contact/route";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const { trigger, isMutating } = useSWRMutation(
    "/api/contact",
    sendContactForm
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await trigger(data);
      form.reset();
      toast({
        title: "Message sent!",
        description: "We will get back to you soon.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-[50vh] flex items-center justify-center py-10 bg-zinc-900"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[600px] space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
              Contact <span className="text-primary">Us</span>
            </h2>
            <p className="text-sm md:text-base text-zinc-200">
              Have questions? Reach out to us!
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full text-sm md:text-base rounded-xl bg-zinc-800/50 border-zinc-700 focus:border-primary"
                        placeholder="Your Name"
                        disabled={isMutating}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="w-full text-sm md:text-base rounded-xl bg-zinc-800/50 border-zinc-700 focus:border-primary"
                        placeholder="Your Email"
                        disabled={isMutating}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="w-full text-sm md:text-base min-h-[120px] rounded-xl bg-zinc-800/50 border-zinc-700 focus:border-primary"
                        placeholder="Your Message"
                        disabled={isMutating}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full gradient-primary text-black font-bold py-3 px-4 rounded-xl text-sm md:text-base"
                disabled={isMutating}
              >
                {isMutating ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
