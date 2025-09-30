# Tourist Spot Front

Blog de pontos turísticos desenvolvido com Next.js que consome uma API externa para exibir destinos turísticos organizados por regiões do Brasil.

## 🛠️ Tecnologias Utilizadas

- **Next.js 15.5.2** - Framework React
- **React 19.1.0** - Biblioteca principal
- **Framer Motion 12.23.21** - Animações
- **Ant Design 5.27.4** - Componentes UI
- **React Icons 5.5.0** - Ícones
- **Date-fns 4.1.0** - Manipulação de datas
- **ESLint** - Linting de código
- **CSS Modules** - Estilização

## 📁 Estrutura do Projeto

```
tourist-spot-front/
├── public/
│   ├── icons/              # Ícones
│   └── images/             # Imagens por região
│       ├── centro-oeste/
│       ├── nordeste/
│       ├── norte/
│       ├── sudeste/
│       └── sul/
├── src/
│   ├── app/
│   │   ├── (rotas)/        # Rotas agrupadas
│   │   │   ├── contato/
│   │   │   ├── pontosTuristicos/
│   │   │   └── sobre/
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── HomeHero/
│   │   ├── TouristList/
│   │   ├── TouristCard/
│   │   └── ...
│   └── data/
│       └── regionData.jsx  # Dados das regiões
├── package.json
└── next.config.mjs
```

## 🛠️ Instalação e Configuração

### 1. Clonar e configurar o Backend (API)
```bash
git clone https://github.com/Nathsanfer/tourist-spot-back-relationship.git
cd tourist-spot-back-relationship
code .
```

### 2. Instalar dependências do Backend
```bash
npm install
```

### 3. Configurar arquivo .env do Backend
Crie um arquivo `.env` na raiz do projeto backend:
```env
PORT=5000
DATABASE_URL="file:./touristSpots.db"
JWT_SECRET=algumasecret
```

### 4. Rodar migração do Prisma
```bash
npx prisma migrate dev
```

### 5. Rodar a API
```bash
npm run dev
```
A API estará disponível em http://localhost:5000

### 6. Clonar e configurar o Frontend
```bash
git clone https://github.com/Nathsanfer/tourist-spot-front.git
cd tourist-spot-front
```

### 7. Instalar dependências do Frontend
```bash
npm install
```

### 8. Rodar o Frontend
```bash
npm run dev
```
O projeto estará disponível em http://localhost:3000

## 🌐 Exemplos de Uso da API

### Listar todos os pontos turísticos
```javascript
const response = await fetch('http://localhost:5000/pontos-turisticos');
const spots = await response.json();
```

### Obter detalhes de um ponto turístico
```javascript
const response = await fetch(`http://localhost:5000/pontos-turisticos/${id}`);
const spot = await response.json();
```

### Estrutura de resposta da API
```json
{
  "id": 1,
  "nome": "Cristo Redentor",
  "descricao": "Uma das Sete Maravilhas do Mundo Moderno...",
  "localizacao": "Rio de Janeiro, RJ",
  "regiao": "Sudeste",
  "categoria": "Monumento",
  "avaliacaoMedia": 4.8,
  "imagemUrl": "/images/cristo-redentor.jpg",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```
