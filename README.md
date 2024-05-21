Voici les modifications apportées à votre Markdown :

# 🐼 WikIpi

## 👋 Introduction

WikIpi a pour objectif de regrouper toute la documentation relative à l’ensemble des projets Labo afin de faciliter l'accès et le partage des connaissances au sein de l'IPI.

## 🛠️ Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- PHP
- Composer
- Node.js
- NPM
- WAMP ou XAMPP

## ⚙️ Installation

Suivez les étapes ci-dessous pour installer et configurer l'application :

1. **Cloner le dépôt :**

    ```bash
    git clone https://github.com/MathiasAbes/ProjetLABO-Wikipi.git
    cd ProjetLABO-Wikipi
    ```
   
Le projet est divisé en deux parties :

- **Laravel App :** pour la partie back-end.
- **React App :** pour la partie front-end.

2. **Installer les dépendances back-end dans laravel-app :**

    ```bash
    cd .\laravel-app\
    composer install
    ```

3. **Installer les dépendances front-end dans react-app :**

    ```bash
    cd .\react-app\
    npm install
    ```

4. **Configurer l'environnement :**

    ```bash
    cp .env.example .env
    ```

    Modifiez les lignes suivantes dans le fichier `.env` :

    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=projetlabowikipi
    DB_USERNAME=root
    DB_PASSWORD=
    ```

    Ensuite, générez la clé de l'application :

    ```bash
    php artisan key:generate
    ```

5. **Récupérer la base de données :**

    Téléchargez la base de données disponible dans le Google Drive et importez-la sur votre serveur local.

## 🚀 Démarrage de l'application

1. **Lancer le serveur de développement Laravel :**

    ```bash
    cd .\laravel-app\
    php artisan serve
    ```

2. **Lancer le front-end React :**

    ```bash
    cd .\react-app\
    npm start
    ```

3. **Accéder à l'application :**

    Ouvrez votre navigateur et allez à l'adresse suivante :

    ```
    http://localhost:3000/
    ```
