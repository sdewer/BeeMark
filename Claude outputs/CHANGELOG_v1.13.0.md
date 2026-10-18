# BeeMark v1.13.0

## Added

- **Winter weight on the Hives list.** From October through March, each hive's card on the main Hives list now shows its last recorded weight — a quick stores check without opening the hive up. If the most recent weigh-in is more than 3 months old (or there isn't one yet), the card shows a "Weight?" prompt instead of a stale or missing figure, as a nudge to go weigh it.
- **Winter Weighing toggle in Options.** A new card on the Options page lets you switch the winter weight display off entirely, for anyone who'd rather keep the hive list uncluttered over winter. It's on by default.

## Changed

- N/A this release.

## Fixed

- N/A this release.

---

**Schema/version-bump note:** `APP_DISPLAY_VERSION` bumped to `v1.13.0`. `APP_VERSION` stays at `11` — this release doesn't change the shape of any stored record (it reads the existing `weight_kg` field already present on inspections and weight-log entries) and only adds one new app-wide preference flag (`bm_winter_weighing_enabled`, defaulting to on), the same pattern as the existing winter-pause setting.
