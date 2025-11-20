# KatchanVT Website — README (FR)

## 1. Description du projet

Ce site est conçu pour le streamer Twitch KatchanVT. Il a été créé pour présenter et soutenir l'activité du streamer. Il centralise les contenus et fonctionnalités suivants :
- Liens vers les réseaux sociaux et identité visuelle sur la page d'accueil (`/`),
- Affichage du stream en direct (`/live`),
- Liste des clips (`/clips`),
- VODs et rediffusions (`/vod`),
- Planning et bannière de planning (`/planning`),
- Pages d'information (`/about`),
- Routes API côté serveur pour récupérer des données externes (sous `src/app/api/*`).

Technologies principales : Next.js (app router), React, TypeScript et Tailwind CSS. Les composants réutilisables se trouvent dans `src/components`, les helpers API dans `src/utils`, et les fichiers statiques dans `public/`.

Objectif : fournir un site moderne, responsive et utile pour la communauté, facile à déployer et à maintenir.

## 2. Méthode CAR 

Voici des entrées CAR concises axées sur les compétences concrètes développées pendant la réalisation du projet.

- Node.js pour le développement
  - Contexte : besoin d'un runtime serveur léger pour les API et les scripts de build/dev.
  - Action : utilisation de Node.js pour exécuter Next.js, gérer les scripts npm (`dev`/`build`/`start`) et traiter les routes API côté serveur.
  - Résultat : bonne compréhension de l'écosystème Node.js (npm, scripts, gestion des dépendances) et des patterns d'exécution côté serveur.

- Apprentissage de React
  - Contexte : construire une interface interactive et basée sur des composants pour les pages Live/Clips/VOD.
  - Action : implémentation de composants React modulaires dans `src/components` et organisation des pages avec le routeur app de Next.js.
  - Résultat : amélioration de la conception de composants, des patterns de gestion d'état et de l'utilisation de TypeScript avec React.

- Apprentissage de Tailwind CSS
  - Contexte : besoin d'un style rapide, cohérent et responsive.
  - Action : intégration de Tailwind CSS dans tout le projet et usage de classes utilitaires pour un stylage rapide.
  - Résultat : développement UI plus rapide, langage visuel cohérent et styles faciles à maintenir.

- Site responsive
  - Contexte : les utilisateurs consultent le site depuis desktop, tablette et mobile.
  - Action : utilisation des utilitaires responsives de Tailwind et tests des mises en page sur différentes tailles d'écran.
  - Résultat : expérience utilisateur responsive avec priorisation du contenu sur petits écrans.

Compétences renforcées : Node.js, React (avec TypeScript), Tailwind CSS, conception responsive et déploiement avec Next.js.

## 3. Comment lancer et utiliser

Prérequis
- Node.js (recommandé : 18+)
- npm (ou pnpm/yarn)

Installation

1. Depuis la racine du projet, installez les dépendances :

```powershell
npm install
```

Variables d'environnement (optionnel)
- Créez un fichier `.env.local` avec vos clés si vous utilisez des intégrations externes :

```
TWITCH_CLIENT_ID=...
TWITCH_ACCESS_TOKEN=...
YOUTUBE_API_KEY=...
```

Développement

```powershell
npm run dev
```

Ouvrez `http://localhost:3000`. Routes principales : `/`, `/live`, `/clips`, `/vod`, `/planning`, `/about`.

Build & production

```powershell
npm run build
npm start
```

Lint

```powershell
npm run lint
```

Dépannage
- Vérifiez les variables d'environnement pour les erreurs liées aux API.
- Pour les erreurs TypeScript/Next.js : supprimez `node_modules` et `package-lock.json`, puis réinstallez.

Déploiement
- Vercel détecte automatiquement les projets Next.js. Poussez sur Git et connectez le dépôt à Vercel, ou utilisez le tableau de bord Vercel pour déployer.
