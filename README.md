# Laravel React Application README

## 👋 Introduction

WikIpi a pour objectif de regrouper toute la documentation relative à l’ensemble des projets Labo afin de faciliter l'accès et le partage des connaissances au sein de l'école.

## 🛠️ Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- PHP
- Composer
- NPM

## ⚙️ Installation

Suivez les étapes ci-dessous pour installer et configurer l'application :

1. **Cloner le dépôt :**

    ```bash
    git clone https://github.com/MathiasAbes/ProjetLABO-Wikipi.git
    cd ProjetLABO-Wikipi
    ```

2. **Installer les dépendances back-end :**

    ```bash
    composer install
    ```

3. **Installer les dépendances front-end :**

    ```bash
    npm install
    ```

4. **Configurer l'environnement :**

    ```bash
    cp .env.example .env
    ```

    ```bash
    php artisan key:generate
    ```

## 🚀 Démarrage de l'application

1. **Lancer le serveur de développement Laravel :**

    ```bash
    php artisan serve
    ```

2. **Lancer le front-end :**

    ```bash
    npm run dev
    ```

3. **Accéder à l'application :**

    Ouvrez votre navigateur et allez à l'adresse suivante :

    ```
    http://localhost:8000
    ```
