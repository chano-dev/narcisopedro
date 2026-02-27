import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Narciso Pedro, o meu nome é ${name}. Gostaria de falar sobre ${subject}. ${message}`;
    const url = `https://wa.me/244932464413?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="section-padding section-alt">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Vamos Trabalhar <span className="gold-accent">Juntos?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Entre em contacto para agendar uma consulta ou saber mais sobre os meus serviços.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required className="bg-card" />
            <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-card" />
            <Select value={subject} onValueChange={setSubject} required>
              <SelectTrigger className="bg-card">
                <SelectValue placeholder="Assunto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Consultoria">Consultoria</SelectItem>
                <SelectItem value="Assessoria">Assessoria</SelectItem>
                <SelectItem value="Formação">Formação</SelectItem>
                <SelectItem value="Outro">Outro</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Mensagem" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required className="bg-card" />
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-gold-light font-semibold py-6 text-base gap-2">
              <Send className="h-4 w-4" /> Enviar Mensagem
            </Button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <a href="mailto:narcisopedrotinarcy@gmail.com" className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">E-mail</p>
                <p className="font-medium text-foreground">narcisopedrotinarcy@gmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/244932464413" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefone / WhatsApp</p>
                <p className="font-medium text-foreground">+244 932 464 413</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/narciso-pedro-809920153" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium text-foreground">Narciso Pedro</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
