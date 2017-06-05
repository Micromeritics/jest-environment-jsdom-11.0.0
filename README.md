# jest-environment-jsdom-11.0.0

## Rationale

This package was forked into jest-environment-jsdom-11.0.0 in order to support
jsdom@11.0.0. We need jsdom@11 because of [tmpvar/jsdom#1560][], which was
partially fixed in version 11. Without this version, the graph tests will take
a long time (I never bothered to test the exact value of that).

The creation of this package was prompted by [facebook/jest#3655][].

Once Node v4 EOL arrives, jest will likely be updated to use jsdom@11+
by default, at which time this package is no longer needed.

[tmpvar/jsdom#1560]: https://github.com/tmpvar/jsdom/issues/1560
[facebook/jest#3655]: https://github.com/facebook/jest/issues/3655

## Maintenance

No maintenance should be needed beyond maybe bumping up version
numbers.

## Added Functionality

None, and no new added functionality is expected.

## Hosting

There is no reason to make the fork private, so it will be hosted publicly on
github (at [micromeritics/jest-environment-jsdom-11.0.0][gh]) and
npm (as [jest-environment-jsdom-11.0.0][npm]).

[gh]: https://github.com/Micromeritics/jest-environment-jsdom-11.0.0
[npm]: https://www.npmjs.com/package/jest-environment-jsdom-11.0.0
