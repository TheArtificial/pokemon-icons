# Pokémon Icons

This is a collection of fan art representing Pokémon. It strives for consistency of style and recognizability at small sizes.

## Contributing

There are Adobe Illustrator working files in `_working`, feel free to use them as a starting point, and to add your files to this directory. Trying to version control them would be complicated, so please don't overwrite another artist's working file.

Each icon is designed as vectors but snapped to a 32 x 32 grid. Style should be easy to discern from the existing art and color from the swatch file in the `_working` folder.

- Fork this repository
- Place 4 files matching that number and name under the `_icons` directory:
  1. A 32 x 32 SVG in `_icons/SVG`
  2. A 32 x 32 PNG in `_icons/PNG/1x`
  3. A 64 x 64 PNG in `_icons/PNG/2x` with `@2x` in the filename
  4. A 96 x 96 PNG in `_icons/PNG/3x` with `@3x` in the filename
- Test locally by running `gulp build`
- Make a pull request
