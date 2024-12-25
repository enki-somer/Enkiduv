#!/bin/bash

# Build the project
npm run build

# ZIP the out directory
cd out
zip -r ../portfolio-site.zip ./*
cd ..

# You can then upload portfolio-site.zip to Hostinger via FTP or their file manager 