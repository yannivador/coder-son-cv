
# Coder-son-CV

git init # Initialisation du dépôt
git add . # ajouter tous les fichiers
git commit -m "message" #Commit avec un message
git checkout -b "nomdebranche" # créer un nvlle branche
git push https://github.com/yannivador/coder-son-cv.git CV-with-mysql # pousser sur une branche en particulier

## Dépot : https://github.com/yannivador/coder-son-cv.git 
Branche en cours : CV-with-mysql
avant dernière mise à jour : 24/05/2024
dernière mise à jour : 20/11/2024

## Lancer le server de données
Se placer dans le dossier puis lancer le server : 
cd server
node server.js

## Lancer le front 
cd client
npm start


## Structure 
4 pages : 
- Accueil
- Compétences
- Mes projets -> component (Portfolio >> ProjectListTest >> Project ) -> server API -> table "project"s Mysql
- Contact -> Info user -> server API -> table "users" Mysql


# Librairie utilisées
- Mysql (Base de données)
- Express (server)


## MySQL
sources : 
- https://blog.arcoptimizer.com
- utilisation-de-mysql-avec-node-js-et-le-client-javascript-mysql 
