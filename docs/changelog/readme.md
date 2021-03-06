---
lang: en-US
title: Changelog | Hybrid
---
# Changelog
All notable changes to this project will be documented in this file.

## [1.1.2] - 2020-12-04
- Update to test PHP 8.0
- Updated dependencies
- Moved CI to Github Actions

## [1.1.1] - 2020-03-09
- Update to support PHPUnit 9
- Drop support for PHPUnit below 8.2
- Drop support for PHP 7.1

## [1.1.0] - 2020-01-10
- Updating CI to test on PHP 7.4
  - This will be the last release supporting PHP 7.1
- Added new methods: `withoutQuery`, `withQueryKey`, and `withQueryKeys`

## [1.0.3] - 2019-12-03
- Security dependency update. PR provided by Github helpbot

## [1.0.2] - 2019-10-03
- Updated to the latest version of `blastcloud/chassis`.
- Fix for `InvokedRecorder` being removed from PHPUnit 8.4  Type hinting was simply removed from the `expects()` method. Will have to rely on users simply reading the documentation.

## [1.0.1] - 2019-09-06
- Fix for capitalization issue on `macros.php`

## [1.0.0] - 2019-09-06
- Initial Release
