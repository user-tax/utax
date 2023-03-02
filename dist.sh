#!/usr/bin/env bash

_DIR=$(
  cd "$(dirname "$0")"
  pwd
)

cd $_DIR

set -ex

git pull

version=$(cat package.json | jq -r '.version')

git add -u || true
git commit -m. || true
./build.sh
cp package.dist.json lib/package.json
cd lib
npm version patch
cp package.json ../package.dist.json
git add -u
git commit -m v$version || true
git push
npm publish --access=public
