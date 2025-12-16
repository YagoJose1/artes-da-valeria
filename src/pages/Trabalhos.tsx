import Layout from "@/components/Layout";

const Trabalhos = () => {
  // Array de placeholders para a galeria
  // TODO: Substituir pelos caminhos reais das imagens quando disponíveis
  // Exemplo: { id: 1, src: "/images/trabalho-01.jpg", alt: "Descrição do trabalho" }
  const trabalhos = [
    { id: 1, placeholder: true },
    { id: 2, placeholder: true },
    { id: 3, placeholder: true },
    { id: 4, placeholder: true },
    { id: 5, placeholder: true },
    { id: 6, placeholder: true },
    { id: 7, placeholder: true },
    { id: 8, placeholder: true },
    { id: 9, placeholder: true },
  ];

  return (
    <Layout>
      {/* Header da página */}
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
            As imagens são apenas exemplos. Preços e disponibilidade sob consulta.
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
                className="aspect-square bg-card border border-border rounded-md overflow-hidden group"
              >
                {trabalho.placeholder ? (
                  // Placeholder - será substituído pelas imagens reais
                  // TODO: Substituir este placeholder pela tag <img> com a imagem real
                  // Exemplo: <img src="/images/trabalho-01.jpg" alt="Descrição" className="w-full h-full object-cover" />
                  <div className="w-full h-full flex items-center justify-center bg-muted/50">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-border rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-muted-foreground text-lg">📷</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Imagem {trabalho.id}
                      </p>
                    </div>
                  </div>
                ) : (
                  // Quando houver imagem real, usar este formato:
                  // <img 
                  //   src={trabalho.src} 
                  //   alt={trabalho.alt} 
                  //   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  // />
                  null
                )}
              </div>
            ))}
          </div>

          {/* Instrução para adicionar mais imagens */}
          {/* 
            INSTRUÇÕES PARA ADICIONAR IMAGENS:
            
            1. Coloque as imagens na pasta /public/images/
            2. Nomeie os arquivos de forma organizada (ex: trabalho-01.jpg, trabalho-02.jpg)
            3. No array 'trabalhos' acima, substitua os objetos placeholder por:
               { id: 1, src: "/images/trabalho-01.jpg", alt: "Descrição do trabalho" }
            4. Remova a propriedade 'placeholder: true'
            5. O componente já está preparado para exibir as imagens automaticamente
          */}
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
