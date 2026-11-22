# E-commerce MERN – Backend (API REST)

API REST pour une application e-commerce, développée avec **Node.js**, **Express** et **MongoDB Atlas** (Mongoose). Elle gère les catégories, les sous-catégories et les articles, et elle est déployée sur **Vercel**.

> Le frontend React se trouve dans le dépôt [e-commerce-frontend](https://github.com/HayfaBouali/e-commerce-frontend).

## Fonctionnalités

- CRUD des **catégories**, **sous-catégories** et **articles**
- Base de données cloud MongoDB Atlas via Mongoose
- CORS activé pour le frontend React
- Configuration par variables d’environnement (`dotenv`)
- Déploiement serverless sur Vercel (`vercel.json`)

## Technologies

Node.js · Express · Mongoose · MongoDB Atlas · dotenv · cors · Vercel

## Structure du projet

```
backend/
├── models/
│   ├── article.js
│   ├── categorie.js
│   └── scategorie.js
├── routes/
│   ├── article.route.js
│   ├── categorie.route.js
│   └── scategorie.route.js
├── app.js
├── vercel.json
└── package.json
```

## Routes principales

| Ressource | Route |
|---|---|
| Catégories | `/api/categories` |
| Sous-catégories | `/api/scategories` |
| Articles | `/api/articles` |

Chaque ressource expose les opérations de lecture, création, modification et suppression.

## Installation

```bash
git clone https://github.com/HayfaBouali/ecommerce.git
cd ecommerce
npm install
```

Crée un fichier `.env` à la racine (il n’est pas versionné) :

```
databasecloud=mongodb+srv://<utilisateur>:<motdepasse>@<cluster>.mongodb.net/<base>
```

Puis lance le serveur :

```bash
node app.js
```

## Déploiement

Le projet est déployé sur Vercel. La variable `databasecloud` doit être ajoutée dans les paramètres d’environnement du projet Vercel.

## Auteure

**Hayfa Bouali**, étudiante ingénieure en génie logiciel (ESSAT Gabès).
[GitHub](https://github.com/HayfaBouali) · [LinkedIn](https://linkedin.com/in/hayfa-bouali)