# ♟ Chess House — Site Web Officiel

Site web officiel du **Club Chess House** — Faculté des Sciences et Techniques de Béni Mellal, Université Sultan Moulay Slimane.

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_BADGE_ID/deploy-status)](https://app.netlify.com)

---

## 📁 Structure du projet

```
chess-house-website/
├── index.html          → Page d'accueil
├── about.html          → À propos du club
├── activities.html     → Activités & programme
├── events.html         → Événements & calendrier
├── contact.html        → Formulaire de contact
├── css/
│   └── style.css       → Feuille de style principale
├── js/
│   └── main.js         → Scripts (menu, animations)
├── assets/             → Images et ressources
├── netlify.toml        → Configuration Netlify
├── _redirects          → Règles de redirection
└── README.md
```

---

## 🚀 Déploiement sur Netlify

### Méthode 1 — Glisser-déposer (la plus simple)
1. Aller sur [netlify.com](https://netlify.com) et se connecter
2. Faire glisser le dossier `chess-house-website/` sur le dashboard Netlify
3. Le site est en ligne en moins de 30 secondes ✅

### Méthode 2 — Via GitHub (recommandée)
1. Créer un nouveau dépôt sur GitHub
2. Pousser ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Chess House website"
   git remote add origin https://github.com/TON_USERNAME/chess-house-website.git
   git push -u origin main
   ```
3. Sur Netlify : **New site > Import from Git > GitHub**
4. Sélectionner le dépôt → **Deploy site** ✅
5. Chaque `git push` redéploie automatiquement le site

### Domaine personnalisé (optionnel)
Dans Netlify : **Domain settings > Add custom domain**
Exemple : `chess-house-fstbm.netlify.app` (gratuit) ou votre propre domaine

---

## 📬 Formulaire de contact

Le formulaire dans `contact.html` utilise **Netlify Forms** (inclus gratuitement).
- Les soumissions apparaissent dans : Netlify Dashboard → **Forms**
- Activer les notifications e-mail dans : **Forms > Settings > Notifications**

---

## ✏️ Modifier le contenu

| Ce que vous voulez changer | Fichier à éditer |
|---|---|
| Texte de la page d'accueil | `index.html` |
| Info sur les membres / bureau | `about.html` |
| Liste des activités | `activities.html` |
| Calendrier des événements | `events.html` |
| Coordonnées / formulaire | `contact.html` |
| Couleurs et typographie | `css/style.css` |
| Menu mobile / animations | `js/main.js` |

---

## 📱 Instagram

Lier les posts Instagram : remplacer `@chess_house_fstbm` dans les fichiers HTML par le lien complet vers votre profil.

---

## 📞 Contact du club

- **E-mail :** Chesshouse58@gmail.com  
- **Tél :** 0634 262 883 (Miloud Moustage)  
- **Instagram :** [@chess_house_fstbm](https://instagram.com/chess_house_fstbm)

---

*FST Béni Mellal — Université Sultan Moulay Slimane — Année universitaire 2025/2026*
