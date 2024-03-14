# React Modal Component by Laurent TRINCO

## Introduction

Ce composant `Modal` est un composant React simple et réutilisable qui permet d'afficher une fenêtre modale personnalisée dans votre application.

## Installation

Pour installer ce composant, utilisez la commande suivante :

`npm install react-modal-jarod41`

puis importez le composant Modal dans votre composant parent comme dans l'exemple ci-dessous :

```
import { useState } from 'react'
import Modal from 'react-modal-jarod41'
import '../node_modules/react-modal-jarod41/dist/style.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
				isOpen={isOpen}
				onClose={function () {
					setIsOpen(false)
				}}
				modalContent={'Salut les gens !!!'}
				modalButtonText={'Fermer'}
				modalBackgroundColor={'pink'}
				modalTextColor={'#000'}
				modalButtonColor={'blue'}
			/>
    </div>
  );
}

export default App;
```

## Props

Le composant `Modal` accepte les props suivantes :

- `isOpen` (booléen) : Détermine si la fenêtre modale doit être affichée ou non.
- `onClose` (fonction) : Fonction à exécuter lorsque l'utilisateur ferme la fenêtre modale.
- `modalContent` (ReactNode) : Le contenu à afficher dans la fenêtre modale.
- `modalButtonText` (string) : Le texte à afficher dans le bouton de fermeture de la modale.
- `modalBackgroundColor` (string) : La couleur de fond de la modale.
- `modalTextColor` (string) : La couleur du texte de la modale.
- `modalButtonColor` (string) : La couleur de fond du bouton de fermeture de la modale.


## Conclusion

Le composant personnalisable `Modal` est un excellent moyen de rendre votre code plus propre et plus organisé. N'hésitez pas à l'essayer dans votre prochain projet React !

#React #Modal #NPM
