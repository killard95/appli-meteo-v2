# What's the weather like

Besoin d'une application météo fiable et facile à configurer ? Vous etes au bon endroit. 

## Sommaire
1. [Téléchargement](#téléchargement)
2. [Présentation](#présentation)
3. [Installation](#installation)
4. [Structure des fichiers](#structure-des-fichiers)
5. [Démarrage](#démarrage)

## <a name="téléchargement">Téléchargement</a>

<a name="nodejs"></a>Si vous avez besoin de télécharger [nodeJS](https://nodejs.org/fr/download).

Télécharger le **zip** de l'application [ici](https://codeload.github.com/killard95/appli-meteo-v2/zip/refs/heads/main).


## <a name="présentation">Présentation</a>

Il s'agit d'une application météo en Node.js, qui a pour but d'afficher la météo selon une ville, sur des panneaux d'affichage dans les transports en commun, à l'aide de l'API **weatherbit**. L'application affiche différentes informations telles que :
* La météo générale
* Une icône représentant la méteo actuelle
* La température réelle ainsi que ressentie
* Le pourcentage d'humidité
* La date et l'heure

 Les informations météo se mettent à jour chaque heure. L'application affiche un thème clair ou sombre en fonction de l'heure actuelle comparée à l'heure de levé et de couché du soleil. Enfin, elle est **responsive** et s'adapte aux différents formats d'ecran, ainsi qu'aux modes portrait et paysage.

### Mode portrait / thème clair
![en mode portrait](/assets/portrait.png)

### Mode paysage / thème sombre
![en mode paysage](/assets/paysage.png)

## <a name="installation">Installation</a>

1. Afin d'utiliser cette application, il faut tout d'abord créer votre compte sur l'API, en suivant ce lien [weatherbit](https://www.weatherbit.io/account/create). Cela afin de récupérer **une clé API**

2. Vérifier que nodeJs est déjà installé sur votre machine
```
npm - v
```
Sinon suivre les indications dans [le lien ci-dessus](#nodejs)

3. Dézippez le dossier zip de l'application téléchargé précédemment puis entrez dans le dossier **BACK** et créer un fichier nommé **.env**

4. Dans le fichier **.env**, inscrire votre **clé API** ainsi que **l'URL de l'api** comme suit :

```
API_KEY=**********
```
```
API_URL=https://api.weatherbit.io/v2.0/current
```

5. Pour télécharger les dépendances, ouvrir le dossier complet de l'application via **VSCODE** ou tout autre **IDE**. Ouvrir le terminal et naviguer vers le dossier **BACK** avec la commande suivante :

```
cd BACK
```

ensuite tapez la commande :

```
npm install
```
Cela va créer plusieurs fichiers et telecharger les dépendances nécessaires au fonctionnement de l'application.

6. Dans le fichier <a name="conf">**conf.json**</a>, entrer la ville pour laquelle vous souhaitez afficher la météo. Par exemple, ici la ville est **Montpellier**. Pour plus de précision, vous pouvez entrer le code postal ainsi que le code pays (exemple: **FR** pour la France). Ces champs sont optionnel.

```Json
{"city" : "montpellier", "codePostal" : "", "country" : ""}
```
## <a name="structure-des-fichiers">Structure des fichiers</a>
A ce stade, vous devriez avoir la structure suivante:

![structure des fichiers.](/assets/structure%20des%20fichiers.png)

## <a name="démarrage">Démarrage</a> 

Dans le terminal, si vous n'etes toujours pas dans le dossier **BACK**, taper la commande :

```
cd BACK
```

Puis, éxecuter : 

```
npm start
```

Vous devriez voir que le serveur démarre :

![le serveur tourne](/assets/server%20is%20running.png)

Enfin, dans votre navigateur préféré, rendez-vous à l'adresse suivante: **localhost:3000**.

Si vous souhaitez changer de ville après le lancement de l'application, modifiez à nouveau le fichier [**conf.json**](#conf) comme précédemment. N'oubliez pas de sauvegarder avec le raccourci **ctrl + S**, puis actualisez la page de votre navigateur.
