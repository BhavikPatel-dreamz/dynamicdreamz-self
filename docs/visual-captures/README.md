# Visual Capture Notes

Create one note per migrated route, section, or component when visual parity is
part of the task. Use lowercase kebab-case filenames, for example:

```text
home-hero.md
home-expertise-accordion.md
shopify-development-page.md
```

Screenshots may be stored under `docs/visual-captures/screenshots/<slug>/` when
they are useful to keep with the migration evidence. If screenshots are only
temporary, list their `/tmp` paths in the note and summarize the comparison
result.

## Template

```md
# Page Or Component Name

Live URL:
Local route:
Date checked:
Browser:

## Viewports

| Viewport | Live screenshot | Local screenshot | Result |
| --- | --- | --- | --- |
| 1440x900 |  |  | pending |
| 768x1024 |  |  | pending |
| 390x844 |  |  | pending |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| View Page Source |  |
| CSS files / DevTools styles |  |
| JS files / DevTools behavior |  |
| Assets |  |

## Section Inventory

| Section or element | Live behavior/style | Local implementation notes |
| --- | --- | --- |
|  |  |  |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Initial |  |  | pending |
| Hover |  |  | pending |
| Focus |  |  | pending |
| Open/active |  |  | pending |
| Scrolled |  |  | pending |
| Animation timing |  |  | pending |

## Responsive Notes

| Breakpoint | Live layout | Local layout | Result |
| --- | --- | --- | --- |
| Desktop |  |  | pending |
| Tablet |  |  | pending |
| Mobile |  |  | pending |

## Remaining Differences

| Difference | Reason | Status |
| --- | --- | --- |
|  |  | pending |
```
