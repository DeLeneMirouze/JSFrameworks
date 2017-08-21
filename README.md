# JSFrameworks
POC pour tester quelques frameworks JavaScript

## Construction du projet
Lancer depuis la ligne de commande:

*dotnet restore*

*webpack --config webpack.config.vendor.js*

*webpack*


Le site peut être lancé depuis Node (port 5000) ou depuis IIS.

## Outils de dev
Le projet est un projet ASP.Net Core 1.x développé avec Visual Studio 2017.

Il utilise le **SPA Template Angular**:

[Template SPA](https://github.com/kriasoft/AngularJS-SPA-Template)


## Contenu
Pour l'instant seule une démonstration d'Angular 4.3.5 est proposée.

L'application montée requête **StackOverflow** en utilisant certaines fonctionalités de son Api REST. Je n'ai pas cherché à faire un site
aussi complet que **Stackoverflow**, par exemple les requêtes ne remontent que 10 éléments et ne propose pas de pagination.

On peut tout de même faire une recherche, trier et regarder le détail d'une question avec affichage des commentaires et des réponses.

La structure des CSS serait certainement à revoir. Mais j'ai essayé de mettre en place de bonnes pratiques sur la partie Angular.

## Fonctionalités Angular

* Fonctionalités de base (composant, module, TypeScript...)
* module partagé
* Feature Module
* Routage
* Fonctionalités Angular 4 comme ngSwitch
* Pipe personnalisé
* Requêtes Http
* Utilisation d'un service pour faire des reqêtes Web API
* Directives personalisées
* Les différents modèles de binding
* @Input, @Output, événements
