import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-8 mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Nome / Logo */}
          <div className="font-display text-lg font-medium text-foreground">
            {/* TODO: Inserir nome da artesã aqui */}
            Arte em Mãos
          </div>

          {/* Redes Sociais */}
          <div className="flex items-center gap-4">
            {/* TODO: Inserir link do Instagram aqui */}
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {/* TODO: Atualizar ano e nome conforme necessário */}
            © {new Date().getFullYear()} Arte em Mãos. Todos os direitos reservados.
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
