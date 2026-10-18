# BeeMark v1.12.0

## Added

- **Best in Show award.** A new top-tier placing, shown with a purple rosette. It isn't a selectable initial placing — an entry can only win Best in Show once it's placed 1st in its class. Selecting 1st on a class entry now pops up a confirmation ("Best in Show?", default **No**); if confirmed, that entry is flagged Best in Show. Once an entry is at 1st, a small toggle stays visible so Best in Show can be switched on/off later without re-triggering the pop-up (e.g. when editing a past show record).
- **"Treat as Inspection" on Feed actions.** Logging a standalone Feed action (from a hive's Actions tab) now shows a toggle, "Count this as a hive inspection." When switched on, a lightweight inspection-style entry is logged alongside the Feed record, which updates the hive's last-inspected date (clearing it from the "Inspection Overdue" list) without running any of the full inspection logic — in particular, it never triggers an auto-queenless check. This reuses the same `weightOnly` mechanism as the existing Weight Log feature.
- **Manual-only treatment completion.** The inspection form's "Active Treatment" card now has a "Complete & Remove" button: it marks the treatment finished and removes it from the hive's active treatment list in one step.

## Changed

- **Show prize order.** Everywhere placings are ranked, ordered, or counted (the Show Records summary tally, the ribbons listed on each show card, and the colour used for a show's bar/rosette), the order is now highest-to-lowest: Best in Show, 1st, 2nd, 3rd, Did Not Place. A show that won Best in Show in one class and a 2nd in another now shows purple, not gold.
- **New Queen dialog default year.** The "Queen Found 🎉" card in the inspection form (shown when a queen is spotted on a previously Queenless/Requeening hive) now pre-fills the Queen Year box with the current year instead of leaving it blank.
- **Honeycomb background.** The faint hexagon pattern used behind every page has been replaced with a true, mathematically tiling honeycomb grid (the previous pattern was a single hexagon per tile that didn't actually interlock with its neighbours). Same subtle opacity as before.
- **Treatments no longer auto-complete.** Previously, an Api-Guard 2nd tray silently flipped itself to "Complete" in the background once its 14 days elapsed. That automatic step has been removed — a finished treatment now just shows as "Overdue" until it's explicitly completed via the inspection form's Active Treatment card (see Added, above), which now also removes it from the active list rather than only flagging it.

## Fixed

- N/A this release — all changes above are new behaviour or refinements, not bug fixes.

---

**Schema/version-bump note:** `APP_VERSION` bumped to `11` (from `10`) because the data shape changed in two places: `ShowRecord` entries can now carry a `best_in_show` boolean alongside `show_class`/`placing`, and a Feed intervention can produce an accompanying lightweight `weightOnly` inspection entry when "Treat as Inspection" is used. Both changes are additive and backward-compatible — existing saved data keeps working unchanged, since the new fields are simply absent/falsy on older records. `APP_DISPLAY_VERSION` bumped to `v1.12.0`.
