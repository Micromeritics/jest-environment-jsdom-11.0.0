# jest-environment-jsdom-11.0.0

## Rationale

This package was forked into jest-environment-jsdom-11.0.0 in order to support
jsdom@11.0.0. We need jsdom@11 because of
<https://github.com/tmpvar/jsdom/issues/1560>, which was partially fixed in
version 11. Without this version, the graph tests will take a long time (I never
bothered to test the exact value of that).

Once Node v4 EOL arrives, jest will likely be updated to use jsdom@11+
by default, at which time this package is no longer needed.

## Maintenance

No maintenance should be needed beyond maybe bumping up version
numbers.

## Added Functionality

None, and no new added functionality is expected.

## Hosting

There is no reason to make the fork private, so it will be hosted publicly on
github (at https://github.com/micromeritics/jest-environment-jsdom-11.0.0) and
npm (as jest-environment-jsdom-11.0.0).
