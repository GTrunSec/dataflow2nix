#!/usr/bin/env bash

sed -i 's|postcss "^7.*."|postcss ">=8.2.10"|' nix/yarn.lock
sed -i 's|glob-parent "^5.*."|glob-parent ">=5.1.2"|' nix/yarn.lock
