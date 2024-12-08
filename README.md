# Feedsnap SDK

🚀 **Feedsnap SDK** est une solution simple et rapide pour intégrer un widget de collecte de feedbacks utilisateur à votre application React. Conçu pour une flexibilité maximale, il vous permet de recueillir des retours utilisateur et de les transmettre à un backend via une API.

---

## Fonctionnalités

- 📋 **Collecte de feedbacks** : Intégrez un widget pour recueillir des retours utilisateurs, avec prise en charge du texte et des images.
- 🎨 **Personnalisation** : Ajustez l’apparence et le comportement pour s’adapter à votre application.
- 🔗 **Connexion au backend** : Prise en charge des appels API pour sauvegarder et gérer les feedbacks.
- 🌍 **Facile à utiliser** : Quelques lignes de code suffisent pour commencer.

---

## Installation

Ajoutez le SDK à votre projet avec npm :

```bash
npm install feedsnap-sdk
```

Ou avec Yarn :

```bash
yarn add feedsnap-sdk
```

---

## Utilisation

### Exemple simple

Ajoutez le widget de feedback dans votre application :

```tsx
import React from "react";
import { FeedbackWidget, submitFeedback } from "feedsnap-sdk";

const App = () => {
  const handleFeedbackSubmit = async (message) => {
    await submitFeedback(message);
    alert("Feedback envoyé ! Merci.");
  };

  return (
    <div>
      <h1>Bienvenue sur mon application</h1>
      <FeedbackWidget onSubmit={handleFeedbackSubmit} />
    </div>
  );
};

export default App;
```

### Personnalisation

Vous pouvez personnaliser le widget via des propriétés :

```tsx
<FeedbackWidget onSubmit={handleFeedbackSubmit} placeholder="Dites-nous ce que vous pensez..." buttonLabel="Envoyer votre avis" />
```

---

## API

### Composants

#### `FeedbackWidget`

- **Description** : Widget principal pour collecter des feedbacks.
- **Props** :
  - `onSubmit`: `(message: string) => void` (obligatoire)  
    Callback pour envoyer le feedback.
  - `placeholder`: `string` (optionnel)  
    Texte par défaut dans le champ de saisie.
  - `buttonLabel`: `string` (optionnel)  
    Texte du bouton d’envoi.

### Utilitaires

#### `submitFeedback`

- **Description** : Fonction utilitaire pour envoyer les feedbacks au backend.
- **Signature** :
  ```ts
  async submitFeedback(message: string): Promise<void>
  ```

---

## Développement

### Cloner le dépôt

```bash
git clone https://github.com/feedsnap/feedsnap-sdk.git
cd feedsnap-sdk
```

### Installation des dépendances

```bash
npm install
```

### Scripts

- **Démarrer en mode développement** :
  ```bash
  npm run dev
  ```
- **Tester** :
  ```bash
  npm run test
  ```
- **Construire pour la production** :
  ```bash
  npm run build
  ```

---

## Contributions

Nous accueillons avec enthousiasme vos contributions pour améliorer Feedsnap SDK ! 🛠️

1. Forkez ce dépôt.
2. Créez une branche pour vos modifications : `git checkout -b feature/amélioration`.
3. Soumettez une pull request avec vos modifications.

---

## Licence

Ce projet est sous licence [MIT](./LICENSE). Vous êtes libre d'utiliser, de modifier et de distribuer ce projet avec attribution.

---

## Contact

- **Email** : support@feedsnap.com
- **GitHub** : [Feedsnap Repository](https://github.com/feedsnap)
- **Site Web** : [feedsnap.com](https://feedsnap.com)

---

Ce README est clair, professionnel et bien structuré pour guider les utilisateurs et les contributeurs potentiels. 🎉
