#!/bin/bash

# Create the thumbnails directory if it doesn't exist
if [ ! -d "thumbnails" ]; then
  mkdir thumbnails
fi

# Loop through all images in the images directory
for filename in full/*; do
  # Get the base name of the file
  base=$(basename "$filename")

  # Resize the image to 500x500 and crop to make it a square, then output it to the thumbnails directory
  convert "$filename" -resize 200x200^ -gravity center -extent 200x200 "thumbnails/$base"
done

