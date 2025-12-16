import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Clock, MapPin, Heart } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-linen py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Artesanato feito com amor e dedicação
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Há mais de 5 anos criando peças únicas e personalizadas para momentos especiais. 
              Cada trabalho é feito à mão, com atenção aos detalhes e muito carinho.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/trabalhos"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Ver trabalhos
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 text-foreground border border-border px-6 py-3 rounded-md font-medium hover:bg-secondary transition-colors"
              >
                Fazer encomenda
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Aviso de Encomenda */}
      <section className="py-8 bg-secondary/30 border-y border-border">
        <div className="container">
          <p className="text-center text-muted-foreground font-medium">
            📋 Trabalho somente sob encomenda • Preços e prazos sob consulta
          </p>
        </div>
      </section>

      {/* Produtos Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              O que eu faço
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Trabalhos artesanais para festas, lembrancinhas, uso pessoal e ocasiões especiais.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            {[
              "Biscuit (porcelana fria)",
              "Terços personalizados",
              "Chaveiros",
              "Laços",
              "Tiaras",
              "Trabalhos em EVA",
            ].map((item) => (
              <div
                key={item}
                className="bg-card border border-border rounded-md p-4 md:p-6 text-center hover:border-primary/30 transition-colors"
              >
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-20 bg-linen">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Prazos
              </h3>
              <p className="text-sm text-muted-foreground">
                Biscuit: mínimo 15 dias<br />
                Demais produtos: cerca de 7 dias
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Entrega local
              </h3>
              <p className="text-sm text-muted-foreground">
                Atendimento e entrega somente na cidade.<br />
                Não enviamos pelos Correios.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Feito à mão
              </h3>
              <p className="text-sm text-muted-foreground">
                Cada peça é única e feita com dedicação.<br />
                Mais de 5 anos de experiência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Tem interesse em algum trabalho?
            </h2>
            <p className="text-muted-foreground mb-6">
              Entre em contato para saber mais sobre disponibilidade, prazos e valores.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Ver formas de contato
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
