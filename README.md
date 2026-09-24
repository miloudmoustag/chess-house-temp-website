# ♟ Chess House — Site Web Officiel

Site web officiel du **Club Chess House** — FST Béni Mellal, Université Sultan Moulay Slimane.

---

## 📁 Structure du projet

```
chess-house-website/
├── index.html
├── about.html
├── activities.html
├── events.html
├── contact.html
├── css/style.css
├── js/main.js
├── netlify/
│   └── functions/
│       └── contact.js     ← Backend API (Netlify Function)
├── package.json           ← Dépendance Supabase
├── netlify.toml
├── _redirects
└── README.md
```

---

## 🗄️ Créer la base de données (Supabase)

### Étape 1 — Créer un projet Supabase
1. Aller sur **[supabase.com](https://supabase.com)** → **Start for free**
2. Créer un compte (gratuit, pas de carte bancaire)
3. Cliquer **New Project** → Choisir un nom (ex: `chess-house`) → **Create**
4. Attendre ~2 minutes que le projet soit prêt

### Étape 2 — Créer la table `messages`
1. Dans le dashboard Supabase → cliquer **SQL Editor** (icône dans la barre gauche)
2. Coller ce SQL et cliquer **Run** :

```sql
CREATE TABLE messages (
  id         BIGSERIAL PRIMARY KEY,
  name       TEXT        NOT NULL,
  email      TEXT        NOT NULL,
  subject    TEXT,
  message    TEXT        NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

3. La table est créée ✅ — vous pouvez voir les messages dans **Table Editor → messages**

### Étape 3 — Récupérer vos clés API
1. Dans Supabase → **Project Settings** (icône engrenage) → **API**
2. Copier ces deux valeurs :
   - **Project URL** → ressemble à `https://xxxxxxxxxxxx.supabase.co`
   - **service_role key** → commence par `eyJhbGci...` (section "Project API keys")

---

## 🔑 Ajouter les clés dans Netlify

1. Aller dans votre dashboard Netlify → votre site
2. **Site configuration** → **Environment variables** → **Add a variable**
3. Ajouter ces deux variables :

| Variable Name           | Value                                      |
|-------------------------|--------------------------------------------|
| `SUPABASE_URL`          | `https://xxxxxxxxxxxx.supabase.co`         |
| `SUPABASE_SERVICE_KEY`  | `eyJhbGci...` (votre service_role key)     |

4. Cliquer **Save** → puis **Deploys** → **Trigger deploy** pour redéployer ✅

---

## 🚀 Déploiement sur Netlify

### Méthode 1 — Via GitHub (recommandée)
```bash
git init
git add .
git commit -m "Initial commit — Chess House website"
git remote add origin https://github.com/TON_USERNAME/chess-house-website.git
git push -u origin main
```
Puis sur Netlify : **New site → Import from Git → GitHub → Deploy**

### Méthode 2 — Glisser-déposer
Faire glisser le dossier sur **[app.netlify.com](https://app.netlify.com)**

---

## 📬 Voir les messages reçus

Dans **Supabase → Table Editor → messages** — tous les messages du formulaire apparaissent ici en temps réel.

---

## 📞 Contact du club

- **E-mail :** Chesshouse58@gmail.com
- **Tél :** 0634 262 883
- **Instagram :** [@chess_house_fstbm](https://instagram.com/chess_house_fstbm)

*FST Béni Mellal — Université Sultan Moulay Slimane — 2025/2026*
