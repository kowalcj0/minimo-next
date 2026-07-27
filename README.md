[![GitHub release](https://img.shields.io/github/release/kowalcj0/minimo-next.svg?style=for-the-badge)](https://github.com/kowalcj0/minimo-next/releases/latest)
[![GitHub Release Date](https://img.shields.io/github/release-date/kowalcj0/minimo-next.svg?style=for-the-badge)](https://github.com/kowalcj0/minimo-next/releases)
[![license](https://img.shields.io/github/license/kowalcj0/minimo-next.svg?style=for-the-badge)](https://github.com/kowalcj0/minimo-next/blob/master/LICENSE)

![Minimo-next – a reboot of a popular minimalist theme for Hugo](https://raw.githubusercontent.com/kowalcj0/minimo-next/refs/heads/main/images/tn.png)


# Minimo-next

Minimalist theme for [Hugo](https://gohugo.io/).  
This project was forked in 2027 from the original `minimo`` repo https://github.com/MunifTanjim/minimo
At the time, the original project seemed to be abandoned as it hasn't received any updates since 2022.

## Documentation

Check the [Minimo Documentation](https://minimo.netlify.com/docs/) for detailed documentation of Minimo-next.

#### Getting Up & Running

Follow these guides for getting your site up & running with Minimo:

- **Install Minimo**: [Installation Guide](https://minimo.netlify.com/docs/installation)
- **Setup Authors**: [Authors Setup Guide](https://minimo.netlify.com/docs/authors)
- **Configure Widgets**: [Widgets Documentation](https://minimo.netlify.com/docs/widgets)

#### Testing and building exampleSite

To test the `exampleSite` with new version of the theme:

```shell
hugo server --themesDir=../../ --source=exampleSite -D --logLevel INFO
```

To build `exampleSite`:

```shell
hugo --themesDir=../../ --source=exampleSite --baseURL=https://minimo-next.com
```

and to serve it:
```shell
python3 -m http.server 8000 --bind 0.0.0.0 -d exampleSite/public/
```


#### Updating Minimo

Follow the [**Updating Guide**](https://minimo.netlify.com/docs/updating) to update Minimo to its latest version.

After updating Minimo-next, always check that your site's **`config.toml`** file matches the latest [**`config.toml`** file](https://minimo.netlify.com/docs/config-file) format.

A good idea is to double check all the [Configuration settings](https://minimo.netlify.com/docs/installation#configuration-for-minimo) of Minimo.

## Development

If you find a bug or want to request a new feature, feel free to open an issue.

## Changelog

[Changelog for Minimo-next](./CHANGELOG.md)

## License

Minimo-next is licensed under the MIT License. Check the [LICENSE](./LICENSE) file for details.

The following resources are included/used in the theme:

- [Feather](https://feather.netlify.com/) by Cole Bemis - Licensed under the [MIT License](https://github.com/colebemis/feather/blob/master/LICENSE).
