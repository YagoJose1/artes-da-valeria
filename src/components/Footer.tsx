const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-8 mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
      
          <div className="font-display text-lg font-medium text-foreground">
           Artes Valéria
          </div>
        </div>  
        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {/* TODO: Atualizar ano e nome conforme necessário */}
            © {new Date().getFullYear()} Artes Valéria. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Artesanato feito com carinho • Atendimento local
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
