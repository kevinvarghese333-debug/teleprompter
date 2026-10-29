#!/usr/bin/env bash
# Run on the VPS: bash deploy/update-dmg.sh v1.1
set -euo pipefail
tag="${1:?Usage: update-dmg.sh <GitHub release tag>}"
[[ "$tag" =~ ^[A-Za-z0-9][A-Za-z0-9._-]*$ ]] || { echo 'Invalid release tag'; exit 1; }
download_dir=/opt/prompter/downloads
mkdir -p "$download_dir"
temp_dir=$(mktemp -d "$download_dir/.release.XXXXXX")
trap 'rm -rf "$temp_dir"' EXIT
release_url="https://github.com/kevinvarghese333-debug/teleprompter/releases/download/$tag"
curl --fail --location --retry 3 "$release_url/Prompter.dmg" --output "$temp_dir/Prompter.dmg"
curl --fail --location --retry 3 "$release_url/Prompter.dmg.sha256" --output "$temp_dir/Prompter.dmg.sha256"
(cd "$temp_dir" && sha256sum --check Prompter.dmg.sha256)
chmod 644 "$temp_dir/Prompter.dmg"
mv -f "$temp_dir/Prompter.dmg" "$download_dir/Prompter.dmg"
echo "Installed $tag at https://eyeline.kavitha.cloud/downloads/Prompter.dmg"
