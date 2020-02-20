# 3.8.1 (2020-02-20)

- Fixed the `help` property in the schema to only accept values of type `object`. [#41](https://github.com/blackbaud/skyux-config/pull/41)
- Fixed a typo in the schema for the `bbCheckout` property. [#40](https://github.com/blackbaud/skyux-config/pull/40)

# 3.8.0 (2020-02-18)

- Added the `bbCheckout` and `frameOptions` properties. [#34](https://github.com/blackbaud/skyux-config/pull/34)

# 4.0.0-rc.0 (2020-02-15)

### New features

- Added the optional `librarySettings` property to the schema. [#37](https://github.com/blackbaud/skyux-config/pull/37)
- Updated the pipeline to transpile to the [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview). [#37](https://github.com/blackbaud/skyux-config/pull/37)

### Breaking changes

- Dropped support for `rxjs@5`. Consumers may install `rxjs-compat@^6` to support older versions of `rxjs`. [#37](https://github.com/blackbaud/skyux-config/pull/37)

# 3.7.0 (2019-11-19)

- Replaced all imports from `@angular/http` with `@angular/common/http`. [#30](https://github.com/blackbaud/skyux-config/pull/30)

# 3.6.0 (2019-09-27)

- Added optional `base` property to `SkyuxConfigApp`. [#26](https://github.com/blackbaud/skyux-config/pull/26)

# 3.5.1 (2019-07-01)

- Added support for `@skyux-sdk/builder@3.7.0` which addressed some security vulnerabilities. [#20](https://github.com/blackbaud/skyux-config/pull/20)

# 3.5.0 (2019-03-05)

- Added `moduleAliases` property to schema. [#16](https://github.com/blackbaud/skyux-config/pull/16)

# 3.4.0 (2019-01-31)

- Added optional `name` property to `RuntimeConfigApp`. [#15](https://github.com/blackbaud/skyux-config/pull/15)

# 3.3.0 (2019-01-25)

- Added `pipelineSettings` property to schema. [#13](https://github.com/blackbaud/skyux-config/pull/13)

# 3.2.0 (2018-11-15)

- Updated peer dependencies to support Angular versions greater than `4.3.6`. [#11](https://github.com/blackbaud/skyux-config/pull/11)

# 3.1.0 (2018-10-17)

- Added `styles` property to schema. [#8](https://github.com/blackbaud/skyux-config/pull/8)

# 3.0.0 (2018-09-20)

- Initial major release.

# 3.0.0-alpha.1 (2018-09-07)

- Added configuration schema for better IDE support. [#4](https://github.com/blackbaud/skyux-config/pull/4)

# 3.0.0-alpha.0 (2018-08-21)

- Initial release.
