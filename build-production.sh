#!/usr/bin/env bash
rm -rf build
npm run build
git push heroku master