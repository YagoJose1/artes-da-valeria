import Layout from "@/components/Layout";
import { MessageCircle, Instagram, MapPin, Clock, AlertCircle } from "lucide-react";

const Contato = () => {
  return (
    <Layout>
      {/* Header da página */}
      <section className="bg-linen py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Contato
            </h1>
            <p className="text-muted-foreground">
              Entre em contato para fazer sua encomenda ou tirar dúvidas sobre os trabalhos.
            </p>
          </div>
        </div>
      </section>

      {/* Aviso importante */}
      <section className="py-4 bg-primary/10 border-y border-primary/20">
        <div className="container">
          <div className="flex items-center justify-center gap-2 text-foreground">
            <AlertCircle size={18} className="text-primary" />
            <p className="text-sm font-medium">
              Ocupada, não perturbe — respondo assim que possível
            </p>
          </div>
        </div>
      </section>

      {/* Formas de contato */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
              Como fazer um pedido
            </h2>

            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="bg-card border border-border rounded-md p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Envie uma mensagem descrevendo o que você precisa. Respondo assim que possível.
                    </p>
                    {/* TODO: Inserir número de WhatsApp aqui */}
                    <p className="text-foreground font-medium">
                      (XX) XXXXX-XXXX
                    </p>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="bg-card border border-border rounded-md p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      Instagram
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Acompanhe os trabalhos e envie mensagem pelo Direct.
                    </p>
                    {/* TODO: Inserir @ do Instagram aqui */}
                    <p className="text-foreground font-medium">
                      @seuinstagram
                    </p>
                  </div>
                </div>
              </div>

              {/* Presencial */}
              <div className="bg-card border border-border rounded-md p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      Presencialmente
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Atendimento presencial mediante agendamento prévio por WhatsApp ou Instagram.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações importantes */}
      <section className="py-12 md:py-16 bg-linen">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
              Informações importantes
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background border border-border rounded-md p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="text-primary" size={20} />
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Prazos de entrega
                  </h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Biscuit:</strong> mínimo 15 dias de antecedência</li>
                  <li>• <strong>Demais produtos:</strong> cerca de 7 dias</li>
                  <li>• Prazos podem variar conforme demanda</li>
                </ul>
              </div>

              <div className="bg-background border border-border rounded-md p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-primary" size={20} />
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Área de atendimento
                  </h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Atendimento somente local (cidade)</li>
                  <li>• Entrega presencial ou combinada</li>
                  <li>• <strong>Não enviamos pelos Correios</strong></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-secondary/50 border border-border rounded-md">
              <p className="text-center text-sm text-muted-foreground">
                <strong>Sobre preços:</strong> Cada trabalho é único e o valor varia conforme o tipo, tamanho e personalização. 
                Entre em contato para solicitar um orçamento sem compromisso.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
