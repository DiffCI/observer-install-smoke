# DiffCI installation qualification

Synthetic repository maintained by DiffCI to verify a separate-repository installation of its
commit-pinned observation Action. This is not an independent customer, pilot, or savings benchmark.

The TypeScript configuration includes only src/. Tests live outside that compiler scope. The fixture
change (913665c..372e682) touches alpha's source but neither test. The observer job always observes that
range, not HEAD, and fails unless the selection is exactly test/alpha.test.js. The ordinary Node test job
runs both tests independently of the observer job.

The workflow is manually triggered. It uses read-only repository permissions, a dedicated observer job
that pins the DiffCI/core Action by commit, no hosted reporting endpoint, and a GitHub observation
artifact. Delete the workflow to remove the integration; no DiffCI credentials or hosted enrollment are
configured.
