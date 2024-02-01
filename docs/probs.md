# PROBS

## Account
### account
Slouží jako pole pro uživatelská data
```bash
skeleton: {
    type: Array,
    required: true
}
```

## Skeleton
### skeleton
Slouží jako určení jestli se má vykreslit skeleton šablona
```bash
skeleton: {
    type: Boolean,
    required: false
}
```

### skeletonThema
Určuje barevnou variantu skeletonu
```bash
skeletonThema: {
    type: String,
    required: false
}
```

### skeletonNumber
Určuje počet prvků skeletonu
```bash
skeletonNumber: {
    type: Number,
    required: false
}
```


## Style
### styleThema
Určuje barevné schéma komponenty
```bash
styleThema: {
    type: String,
    required: false
}
```

### styleThemaLoading
Určuje barevné schéma lazyloadu obrázku
```bash
styleThemaLoading: {
    type: String,
    required: false
}
```

### styleGap
Určuje krajní mezery komponenty
```bash
styleGap: {
    type: String,
    required: false
}
```

### styleAlign
Určuje zarovnání komponenty nebo obsahu v ní
```bash
styleAlign: {
    type: String,
    required: false
}
```

### styleCol
Určuje počet sloupců
```bash
styleCol: {
    type: String,
    required: true
}
```

### modifierCSS (je potřeba nahradit)
Přiřazuje mofifikační třídy 
```bash
modifierCSS: {
    type: String,
    required: false,
    default: ' '
}
```

### classCSS (je potřeba nahradit)
Přiřaduje další třídy
```bash
classCSS: {
    type: String,
    required: false,
    default: ' '
}
```

## Data
// TODO