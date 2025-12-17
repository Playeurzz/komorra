# 📖 JOURNAL D'OPÉRATION - ABYSS

Dossier RP style **Journal de Guerre Vintage** pour attaque laboratoire SARAF sur FiveM

## 🎨 STYLE UNIQUE

### Thème Vintage Années 40-50
- **Papier vieilli** avec texture et taches de café
- **Encre marron** sur fond beige
- **Photos scotchées** avec ruban adhésif
- **Tampons manuscrits** "CONFIDENTIEL", "TOP SECRET", "VALIDÉ"
- **Écriture manuscrite** (polices Special Elite, Permanent Marker)
- **Effets de vieillissement** automatiques

## ✨ CARACTÉRISTIQUES

### Design
- ✅ Page de couverture style cahier militaire
- ✅ 9 pages de journal avec numérotation vintage
- ✅ Effet papier déchiré en haut et bas
- ✅ Taches de café et d'encre aléatoires
- ✅ Photos avec ruban adhésif vintage
- ✅ Tampons ronds et rectangulaires
- ✅ Style machine à écrire pour le texte

### Fonctionnalités
- 📖 Animation d'ouverture du journal
- 🔊 Sons de pages qui tournent
- ✓ Checkboxes interactives pour le plan
- 📊 Compteurs animés
- 🎭 Tampons qui apparaissent progressivement
- ⌨️ Navigation clavier (Espace/Entrée)
- 📱 100% Responsive

### Contenu
1. **Résumé opération** - Stats et cible confirmée
2. **Photo reconnaissance** - Image du labo Cayo Perico
3. **Infos cible** - Identification et menaces
4. **Objectifs** - Mission principale et secondaires
5. **Timeline** - 28 jours d'observation
6. **Preuves** - REC, photos, documents
7. **Plan attaque** - 5 phases avec checklist
8. **Équipes** - 12 agents répartis en 6 groupes
9. **Validation** - Signatures et approbation finale

## 🚀 UTILISATION

### Ouvrir le journal
1. Ouvrir `index.html` dans un navigateur
2. Cliquer sur "📖 OUVRIR LE JOURNAL" (ou appuyer sur Entrée)
3. Le journal s'ouvre avec animation

### Navigation
- **Boutons "TOURNER LA PAGE"** - Avancer dans le journal
- **Espace** - Tourner la page (clavier)
- **Scroll** - Effet parallaxe sur les taches
- **Checkboxes** - Cocher les tâches accomplies

### Easter Egg
Taper **"komorra"** pour révéler les champs à compléter ! 🔓

## ✏️ PERSONNALISATION

### Remplacer l'image du labo
L'image `laboratoire-cayo-perico.png` est déjà incluse. Pour la changer :
1. Remplacer le fichier par votre image
2. Garder le même nom de fichier

### Compléter les infos
Modifier dans `index.html` tous les champs `[À COMPLÉTER]` et `[NOM]` :
- Dates d'observation
- Noms des agents
- Durées des REC
- Coordonnées GPS

### Ajouter vos photos de preuves
Dans la section "PREUVES COLLECTÉES" (Page 6), remplacer les placeholders :
```html
<div class="photo-placeholder">VOTRE TEXTE</div>
```
Par vos vraies images :
```html
<img src="votre-image.png" style="width: 100%; height: 100%; object-fit: cover;">
```

## 🎨 PERSONNALISATION COULEURS

Dans `styles.css`, modifier les variables :
```css
:root {
    --paper-color: #f4e8d0;      /* Couleur papier */
    --ink-brown: #3d2817;        /* Encre marron */
    --marker-red: #8b2e1f;       /* Marqueur rouge */
    --tape-color: #d4c5a9;       /* Ruban adhésif */
}
```

## 📱 RESPONSIVE

- **Desktop** - Pleine page avec tous les effets
- **Tablette** - Adapté avec grilles réduites
- **Mobile** - Colonnes uniques, optimisé

## 🖨️ IMPRESSION

Le journal est optimisé pour l'impression :
- Ctrl+P pour imprimer
- Les boutons sont masqués automatiquement
- Imprimer en PDF pour archivage

## ⌨️ RACCOURCIS CLAVIER

- **Entrée** - Ouvrir le journal
- **Espace** - Tourner la page
- **k-o-m-o-r-r-a** - Easter egg

## 🔧 STRUCTURE

```
journal-guerre/
│
├── index.html                    # Structure du journal
├── styles.css                    # Style vintage complet
├── script.js                     # Animations et interactions
├── laboratoire-cayo-perico.png   # Photo du labo
└── README.md                     # Ce fichier
```

## 🎯 DIFFÉRENCES AVEC LE DOSSIER FIB

| Aspect | Dossier FIB | Journal de Guerre |
|--------|-------------|-------------------|
| Style | Moderne/Digital | Vintage/Papier |
| Couleurs | Marron/Bleu néon | Marron encre/Beige |
| Typographie | Orbitron/Rajdhani | Special Elite/Courier |
| Navigation | Menu latéral | Pages numérotées |
| Animations | Glitch/Tech | Tampons/Encre |
| Textures | Lisses/Métalliques | Papier vieilli/Taches |

## 💡 CONSEILS D'UTILISATION RP

1. **Présentation immersive** - Partager l'écran en tournant les pages une par une
2. **Photos réelles** - Remplacer tous les placeholders par vos vraies captures
3. **Cocher en direct** - Utiliser les checkboxes pendant l'opération
4. **Archivage** - Imprimer en PDF pour garder une trace

## 🚨 AVANT PRÉSENTATION

✅ Remplacer l'image du labo si nécessaire
✅ Compléter tous les champs `[À COMPLÉTER]`
✅ Ajouter les noms des agents
✅ Insérer les dates réelles
✅ Ajouter vos photos de preuves
✅ Tester sur mobile et desktop

## 🎬 DÉMONSTRATION

1. Ouvrir dans un navigateur moderne (Chrome, Firefox, Edge)
2. Cliquer sur "OUVRIR LE JOURNAL"
3. Faire défiler et tourner les pages
4. Admirer les effets vintage !

---

**CLASSIFICATION: TOP SECRET**
**JOURNAL: OPÉRATION ABYSS**
**© 2024 KOMORRA - Style Journal de Guerre**
