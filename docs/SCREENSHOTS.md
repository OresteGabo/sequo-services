# Public app screenshot provenance — 2026-11-09

The owner explicitly authorized taking additional app screenshots and adding them to the public website. These are real rendered app screens, not redrawn UI.

- Customer: `customer-home.webp`, `customer-markets.webp` — current local Customer fixture APK, catalogue and market browsing.
- Vendor: `vendor-dashboard.webp`, `vendor-orders.webp` — current local Vendor fixture APK, dashboard and order list.
- Rider: `rider-missions.webp`, `rider-history.webp` — current local Rider fixture APK, completed missions and history.
- Hub: `hub-dashboard.webp`, `hub-history.webp` — existing owner-supplied `public/placeholders/hub.png` and `audit.png`, preserving their supplied phone frames.

New native captures used the dedicated Sequo References Android API 36.1 emulator, 1080 × 2400, and the local fixture API at port 55840. Existing synthetic sessions were preserved. Navigation and the OS notification permission prompt were the only interactions; no business operation, delivery validation, payment or production account was used. Visible TEST labels identify synthetic examples. Captures illustrate the interface, not service availability or current merchant pricing.

PNG originals were encoded as WebP at quality 94 without changing screen content. CSS supplies the physical phone frame around the new captures; supplied Hub frames are not doubled. Owner-supplied Hub images retain their original 1408 × 2974 dimensions. Raw captures and browser QA remain outside tracked source. Do not publish personal codes or private customer data.

## Published file integrity

| Asset | SHA-256 |
| --- | --- |
| `customer-home.webp` | `437fde02870c697ec083a0167aa1506a3c5ab1cccabda0ab6c683420cd896c14` |
| `customer-markets.webp` | `1530f172e5b74e516b18cee5e6f0df746d4626ad6e5f0b601def5ffce4a41394` |
| `hub-dashboard.webp` | `426c9709d8fac37b1c780d6ba1d964657cf8d31d63f042af84270e171e4ce19b` |
| `hub-history.webp` | `51e1905ef1b0042aac80092db1ddea944470c789f8e468ffc094ae1db3a6e302` |
| `rider-history.webp` | `da64f9009cb0a15ec449fbc944b28a4c70835531273d83de8822302c7dfe1fcf` |
| `rider-missions.webp` | `5df7af8013a3616d39dc58161b752179adf413823b27c499f418f5ce410e8db3` |
| `vendor-dashboard.webp` | `0e6e8527f2c3221d95e05704681954dad8f83584ee4dbd16cd7088a11dd083fe` |
| `vendor-orders.webp` | `fe0adc05cddb89869e563001262736365948f0d85df35d0773f7dd976a5162ba` |

## Customer walkthrough additions — 2026-11-09

`customer-basket.webp` and `customer-delivery.webp` are fresh captures of the installed local fixture customer app, using its normal explicit [TEST] Ama practice account. The existing basket was read unchanged. The delivery radio control was switched to the existing synthetic relay only to demonstrate the UI, then returned to home delivery. No address, quantity, order, payment or production account was created or modified. No checkout was submitted. Captures contain no personal pickup code or private address.

The fake relay is visibly labelled [TEST], local test and no physical locker/delivery inside the actual app. The walkthrough additionally explains that these are fictional points, while the public locations section states no relay is yet available. Both files retain native 1080 × 2400 content, encoded as WebP quality 94/method 6 without semantic editing.

- `customer-basket.webp` SHA-256: `3478d331e13e54d8ff4c19c6afd1560c3f4eb6f15e3d781a431ed5b8c2a297b7`.

- `customer-delivery.webp` SHA-256: `799965b93c72397ca687a68e873cefba3b37b024ecd2350b60902060e97fd738`.
