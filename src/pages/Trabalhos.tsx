import Layout from "@/components/Layout";

const Trabalhos = () => {
  const trabalhos = [
    { id: 1, src: "public/images/img_1.jpeg", alt: "Trabalho artesanal 1",  },
    { id: 2, src: "public/images/img_2.jpeg", alt: "Trabalho artesanal 2", },
    { id: 3, src: "public/images/img_3.jpeg", alt: "Trabalho artesanal 3", },
    { id: 4, src: "public/images/img_4.jpeg", alt: "Trabalho artesanal 4", },
    { id: 5, src: "public/images/img_5.jpeg", alt: "Trabalho artesanal 5", },
    { id: 6, src: "public/images/img_6.jpeg", alt: "Trabalho artesanal 6",  },
    { id: 7, src: "public/images/img_7.jpeg", alt: "Trabalho artesanal 7", },
    { id: 8, src: "public/images/img_8.jpeg", alt: "Trabalho artesanal 8", },
    { id: 9, src: "public/images/img_9.jpeg", alt: "Trabalho artesanal 9", },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-linen py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Meus Trabalhos
            </h1>
            <p className="text-muted-foreground">
              Confira alguns dos artesanatos que já produzi. Cada peça é única e feita com muito carinho.
            </p>
          </div>
        </div>
      </section>

      {/* Aviso */}
      <section className="py-4 bg-secondary/30 border-y border-border">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground">
            Imagens ilustrativas. Preços e disponibilidade sob consulta.
          </p>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {trabalhos.map((trabalho) => (
              <div
                key={trabalho.id}
                className="bg-card border border-border rounded-md overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={trabalho.src}
                    alt={trabalho.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-linen">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Gostou de algum trabalho?
            </h2>
            <p className="text-muted-foreground mb-6">
              Entre em contato para fazer sua encomenda personalizada.
            </p>
            <a
              href="/contato"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trabalhos;
