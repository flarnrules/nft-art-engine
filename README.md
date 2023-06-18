# nft-art-engine
An art engine built from scratch, following the tutorials created by Hashlips

This repo was build via resources provided by the HashLips NFT youtube channel.

In particular, "The new NFT Art Engine 2.0" which premiered on Feb 8, 2023

Link: https://www.youtube.com/watch?v=0IRBQ69SkM8&list=PLvfQp12V0hS2GM-Ad9xqx4NVsr80872aQ

## gitignore

you will want to have a .gitignore file in the root directory

the file, at a minimum should contain: `node_modules/` to exclude all of the external node dependencies. Those are vast and some have very large files, that cannot even be pushed to github even if you want.

also, if you accidentally push a bunch of stuff, as I have done in the past, you will want to run the following command first before adding it to the .gitignore file:

`git rm -r --cached node_modules`

this removes the cached Git index, without deleting the actual files.

after doing this, you might also want to save all of your files and close out of everything.

if this didn't work, you might need to do a git reset, where you reset your commits back to the original commit history. This is needed if your pushes failed due to a file size that was too large contained within the node_modules directory

you can reset with the following command:

`git reset HEAD~1`

if that didn't work because you are so deep in the commit history, you will need to use this command:

`git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch node_modules" HEAD`

and then you will need to do this:

`git push origin --force --all`

and these commands:

`git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin`
`git reflog expire --expire=now --all`
`git gc --prune=now`

Okay, after doing all of that, you should be good to go. Don't forget to put node_modules in your .gitignore next time!


## dependencies

You will need:
- npm
- nodejs `node -v`
- yarn `yarn set version stable` `yarn -v`
- corepack enabled `corepack enable`
- a code editor (I'm using VS code)
- git (duh)
- lab.hashlips.io
- Tag YT-1 on the github project

## overview

@hashlips-lab/art-engine

The engine consists of two components:

1. The engine itself
2. plugins

The plugins consist of:

1. inputs
2. generators
3. renderers
4. exporters

These plugins feed into the ArtEngine, which once run, generates a piece of or multiple pieces of digital art.

## get a package.json file

`npm init`

https://www.npmjs.com/package/@hashlips-lab/art-engine

copy the install command:
`npm i @hashlips-lab/art-engine`
or
`yarn add @hashlips-lab/art-engine`

lab.hashlips.io

write some boilerplate for index.js


