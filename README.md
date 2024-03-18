# React Table Component

## Introduction

Ce composant `Tableau` est un composant React réutilisable simple qui permet d'afficher un tableau personnalisé dans votre application.

## Installation

Pour installer le package :

```
npm install my-custom-react-table
```

Pour importer le composant ainsi que son style :

```
import { Tableau } from 'my-custom-react-table';
import '../node_modules/my-custom-react-table/dist/style.css'
```

Vous pouvez ensuite utiliser le composant Tableau comme n'importe quel autre composant React en JSX.

## Params

Le composant `Tableau` accepte différents paramètres :
- `content` (Array:(object)) : Permet d'afficher les données fournis sous forme de tableau.
```
Example Array to add at table :
[
    {
       'Title column 1': 'Content 1',
       'Title column 2': 'Content 2',
       ...
    },
    {
        'Same title 1': '...',
        'Same title 2': '...',
        ...
    },
    ...
]
```
- `entries` (Array) : Permet la gestion personnalisé d'affichage des entrées du tableau.
- `showing` (boolean) : Permet d'afficher ou non le nombre total d'élément du tableau et par page.
- `backColor` (string) : La couleur de fond du tableau.
- `lineColor` (string) : La couleur des lignes du tableau.
- `buttonColor` (string) : La couleur des bouttons du tableau.
- `sizeW` (string) : La largeur du tableau.
- `sizeH` (string) : La hauteur du tableau.

## Conclusion

N'hésitez pas à utiliser se composant simple et personnalisable dans vos futurs projet React !