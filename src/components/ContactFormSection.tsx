import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MessageSquare, Mail } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(1, "Nome è richiesto"),
  cognome: z.string().optional(),
  telefono: z.string().min(1, "Numero di telefono è richiesto"),
  email: z.string().email("Email non valida").min(1, "Email è richiesta"),
  contatto: z.enum(["sms", "email"], {
    required_error: "Seleziona come vuoi essere ricontattato",
  }),
  richiesta: z.string().min(1, "Descrizione richiesta è richiesta"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Devi accettare il trattamento dei dati",
  }),
});

type FormData = z.infer<typeof formSchema>;

const ContactFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      cognome: "",
      telefono: "",
      email: "",
      richiesta: "",
      privacy: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Handle form submission here
    console.log("Form data:", data);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <section id="contact-form" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Richiesta informazioni
            </h2>
            <div className="section-divider mb-8"></div>
          </div>

          <div className="bg-card rounded-lg shadow-sm border border-border p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">
                          Nome <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cognome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Cognome</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">
                          Numero di telefono <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} type="tel" className="bg-background" />
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
                        <FormLabel className="text-foreground">
                          Email <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} type="email" className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="contatto"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        Come posso ricontattarti? <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row space-x-6"
                        >
                          <div className="flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-md">
                            <RadioGroupItem value="sms" id="sms" />
                            <Label htmlFor="sms" className="flex items-center cursor-pointer">
                              <MessageSquare className="w-4 h-4 mr-2" />
                              SMS
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-md">
                            <RadioGroupItem value="email" id="email" />
                            <Label htmlFor="email" className="flex items-center cursor-pointer">
                              <Mail className="w-4 h-4 mr-2" />
                              Email
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="richiesta"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        Descrivi brevemente la tua richiesta <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          className="bg-background resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-foreground cursor-pointer">
                          Acconsento al trattamento dei miei dati <span className="text-destructive">*</span>
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          <a href="#" className="text-primary hover:underline">
                            Privacy Policy
                          </a>
                        </p>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3"
                  >
                    {isSubmitting ? "Invio in corso..." : "Invia"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;