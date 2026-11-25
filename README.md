# Portfólio pessoal

Portfólio pessoal responsivo, desenvolvido com HTML semântico, CSS e JavaScript puro. Não há etapa de build nem dependências de execução; abra `index.html` no navegador ou sirva a pasta com qualquer servidor estático.

## Estrutura do projeto

```text
.
├── assets/
│   ├── css/styles.css
│   ├── images/profile.jpg
│   └── js/main.js
├── index.html
└── README.md
```

## Personalize a página

- Atualize o conteúdo dos projetos e quaisquer informações pessoais em `index.html`.
- Substitua `assets/images/profile.jpg` pelo retrato desejado e ajuste o texto alternativo.
- Para alterar o endereço que receberá as mensagens, atualize `CONTACT_EMAIL` em `assets/js/main.js`.
- Substitua `Sergipe, Brasil` na URL do Google Maps, no título do mapa e no link em `index.html` pela localização desejada.

O formulário de contato usa um link `mailto:` para abrir o aplicativo de e-mail padrão da pessoa visitante. O envio direto de mensagens por uma página exige um serviço de e-mail no servidor, que não está incluído neste site estático.

## Publicação no GitHub Pages

O workflow em `.github/workflows/deploy.yml` publica os arquivos estáticos automaticamente a cada push para `master`. Para ativar a publicação, abra **Settings → Pages** no repositório e selecione **GitHub Actions** como fonte de build e deploy. Também é possível iniciar o workflow manualmente pela aba **Actions**.
