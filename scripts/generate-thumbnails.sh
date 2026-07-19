#!/usr/bin/env bash
set -euo pipefail

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is required to generate thumbnails" >&2
  exit 1
fi

mkdir -p thumbnails
while IFS= read -r -d '' source; do
  filename=${source#images/}
  output="thumbnails/${filename%.jpg}.webp"
  ffmpeg \
    -hide_banner \
    -loglevel error \
    -nostdin \
    -i "$source" \
    -vf "scale=512:320:flags=lanczos" \
    -frames:v 1 \
    -c:v libwebp \
    -quality 82 \
    -compression_level 6 \
    -preset picture \
    -y \
    "$output"
done < <(find images -maxdepth 1 -type f -name '*.jpg' -print0 | sort -z)
