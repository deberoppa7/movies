## Project Title
MOVIES

## Description
This is a project built with ExpoJS, a platform that allows you to build and deploy universal apps for iOS, Android, and the web with a single codebase.


## Good to know before using the app
• L'application est composée de trois pages : "Tranding", "Favorites" et "Movie Details".

• La page "Tranding" affiche une liste de films avec une fonctionnalité de défilement infini ("infinite scroll") pour afficher davantage de films.

• La page "Movie Details" comporte un bouton "Ajouter/Supprimer des favoris" qui permet à l'utilisateur d'ajouter ou de supprimer un film de ses favoris. Tous les films ajoutés aux favoris sont enregistrés dans "l'AsyncStorage" pour que l'utilisateur ne perde pas sa sélection si l'application est fermée et relancée. L'application vérifie si l'utilisateur a déjà enregistré des films pour activer l'icône "Coeur" correspondante pour chaque film.

• La page "Favorites" liste tous les films qui ont été ajoutés aux favoris.

• React Context a été utilisé pour la gestion des données car l'application n'a pas besoin d'un grand gestionnaire d'état comme Redux. Les données sont partagées entre les pages "Tranding" et "Favorites" via le Context.

• Lorsque l'utilisateur clique sur le bouton "Ajouter/Supprimer des favoris", un message s'affiche ("Toast") pour indiquer l'action entreprise. L'icône "Coeur" s'active lorsqu'un film est ajouté aux favoris, à la fois dans la page "Movie Details" et sur le film correspondant dans la page "Tranding".

## Developpement : 
• J'ai choisi d'utiliser TypeScript afin de réduire les risques d'erreurs pendant le développement.

• J'ai créé un exemple pour chaque composant dans le cadre des tests unitaires.

• J'ai réalisé un exemple de test E2E avec Cypress pour la page "Tranding".



## Installation
To install the dependencies for this project, run the following command:

```bash
npm install
```

## Usage
To start the development server, run the following command:

```bash
npx expo start
```


## Testing
To start the tests, run the following command:

```bash
npm run test
```


## E2E test with Cypress

Please note that in order to run Cypress tests, you need to first execute the command "npx expo start" and then press "w" 
to run the application on your browser.

To start Cypress tests, run the following command:
```bash
npx cypress open
```

