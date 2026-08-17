# ESAIAS Design QA

## Evidence

- Source visual truth:
  - `/private/tmp/esaias-audit/01-hero-desktop.png`
  - `/private/tmp/esaias-audit/04-editor-desktop.png`
  - `/private/tmp/esaias-audit/09-about-mobile.png`
  - `/private/tmp/esaias-audit/11-team-mobile.png`
- Implementation:
  - `/private/tmp/esaias-design-qa/desktop-hero-v2.png`
  - `/private/tmp/esaias-design-qa/desktop-editor-v1.png`
  - `/private/tmp/esaias-design-qa/mobile-about-v1.png`
  - `/private/tmp/esaias-design-qa/mobile-team-v1.png`
  - `/private/tmp/esaias-content-qa/scenarios-desktop.png`
  - `/private/tmp/esaias-content-qa/scenario-cards-desktop.png`
  - `/private/tmp/esaias-content-qa/recognition-desktop-stable.png`
  - `/private/tmp/esaias-content-qa/scenarios-mobile.png`
  - `/private/tmp/esaias-content-qa/recognition-mobile.png`
  - `/private/tmp/esaias-content-qa/menu-mobile.png`
- Combined comparisons:
  - `/private/tmp/esaias-design-qa/compare-hero.jpg`
  - `/private/tmp/esaias-design-qa/compare-editor.jpg`
  - `/private/tmp/esaias-design-qa/compare-mobile.jpg`
- Viewports: desktop `1440 x 900` and `1280 x 720` CSS px; mobile `390 x 844` CSS px.
- Pixels: source and implementation captures match their CSS viewport dimensions at 1x density.
- State: anonymous visitor, light theme, hero/about/editor/team/contact routes and mobile navigation.

## Full-view Comparison

The redesigned page preserves the original game imagery, logo, display type and section order while replacing mandatory full-screen snapping with a continuous project narrative. Desktop hierarchy is clearer, the Editor is now the main product-proof section, and the mobile layout no longer places the open navigation over section content.

## Focused Comparison

- Navigation: desktop active states and mobile current-section labels remain visible without covering content.
- About and SEL: desktop uses balanced project and learning-framework panels; mobile stacks them in the same reading order.
- Editor: screenshots retain their native aspect ratio and sharpness; the selected tab, caption and keyboard state are visible.
- Mobile About: text uses a readable line length and natural page scrolling instead of a nested scroll area.
- Mobile Team: members use a stable two-column grid; names and roles remain inside their columns.
- Scenarios: all three supplied screenshots retain a consistent 16:9 crop, and the explanatory text remains readable in three desktop columns and one mobile column.
- Scenario Demos: four edited walkthroughs use one shared media stage, with posters and learning-focus copy changing alongside the selected tab.
- Recognition: the award result, competition title and two distinct official links remain legible at both target viewports.
- Recognition: the revised award panel and information area remain balanced on desktop; mobile uses one natural-flow column with equal-height official links.
- Language control: `EN / 繁` remains visible at the top right, preserves the active anchor and exposes the selected language with `aria-pressed`.
- SEL framework: the definition, ESAIAS connection and five competency labels remain available in both languages, with a direct source link to CASEL.
- Desktop stage sizing: Hero through Recognition each resolves to exactly one viewport height; Contact plus the partner footer resolves to one viewport height.

## Required Fidelity Surfaces

- Fonts and typography: Boogaloo remains the display face; system UI text improves body legibility. Heading wrapping and line heights hold at both target viewports.
- Spacing and layout rhythm: section padding clears the fixed navigation; cards use consistent 8px radii; no viewport overflow or overlapping controls was found.
- Colors and visual tokens: the original image palette remains dominant, with restrained dark overlays and the existing PolyU red footer.
- Image quality and asset fidelity: all visible logos, portraits, backgrounds and editor screenshots use supplied assets. The hero uses a supplied showcase video compressed to `1280 x 680`.
- Copy and content: the original project meaning, research context, team roster and contact address are retained with shorter, scannable paragraphs.

## Interaction And Accessibility Checks

- Anchor navigation updates the URL and active item; browser Back returned from `#solution` to `#about`.
- Anchor targets land at the exact section boundary without the previous `104px` offset.
- Desktop natural scrolling uses `scroll-snap-type: y proximity`, so a gesture ending near a chapter boundary settles at the exact section start without mandatory full-screen jumps.
- Mobile and `prefers-reduced-motion` disable scroll snap entirely.
- Direct hash loads resynchronise after layout and font loading; `#recognition` settles at the section boundary in both languages.
- Mobile navigation closes after selection and supports Escape.
- Editor tabs work by click and with Left/Right/Home/End keys.
- Scenario Demo tabs work by click and with Left/Right/Up/Down/Home/End keys; selection updates the panel label, video source, poster, title and description.
- `prefers-reduced-motion: reduce` pauses the hero video, removes sticky Editor scrolling and leaves all reveal content visible.
- Desktop sections use directional reveals, staggered cards and lightweight background parallax; mobile replaces horizontal motion with upward reveals.
- English and Traditional Chinese switch in place through `?lang=en` and `?lang=zh-Hant`; browser history and local preference retention remain functional.
- The page exposes `videos/hero.mp4` plus one active Scenario Demo source at a time; the other three demo files are not attached to media elements until selected.
- A fresh `#top` load leaves the Scenario Demo video without a `src`; the first source is attached only when `#demos` approaches the viewport.
- Four edited Scenario Demos total about `22MB`, use H.264/AAC at `1280 x 894`, and replace roughly `8.84GB` of HEVC source recordings.
- Browser console check returned no errors or warnings.
- The seven-item desktop navigation fits inside its `1040px` shell with 13px remaining at the right edge.
- At `390 x 844`, the open navigation ends at 431px, both new sections have a `390px` document width, and no horizontal overflow occurs.
- At `1280 x 720`, Hero through Recognition each measure `720px`; at `1440 x 900`, each measures `900px`.
- At both desktop sizes, the new `#demos` stage also measures exactly one viewport and its full content remains inside the section bounds.
- At both desktop sizes, Contact plus the `151.875px` footer differs from one viewport by less than `0.2px`.
- English and Traditional Chinese content bounds remain inside every fixed-height desktop stage. Mobile sections retain content-driven heights.
- At `390 x 844`, the demo section uses a `350px` content and video width, with a contained horizontal tab rail and no document overflow.
- At `1280 x 720`, the About/SEL layout is `523px` high inside the `720px` stage; both panels remain fully visible.
- At `390 x 844`, the About/SEL layout is `350px` wide and stacks into natural page flow without internal scrolling.

## Comparison History

- Iteration 1: [P2] The desktop hero occupied the full viewport and did not reveal the following chapter. Fixed by reducing the hero to `92svh`; the revised `desktop-hero-v2.png` shows the next section at the bottom edge.
- Iteration 1: Editor panels were removed from layout immediately, preventing a true crossfade. Fixed by keeping panels stacked, using visibility and opacity transitions, and removing inactive links from the tab order.
- Post-implementation fix: removed section scroll margins and proximity snapping after navigation clicks were leaving each target `104px` below the viewport top.
- Iteration 2: rebuilt Recognition as a gold award panel plus competition-information area, added semantic Lucide icons and cropped the source image's black bars.
- Iteration 2: added complete English/Traditional Chinese UI content, top-right language controls and semantic section color states.
- Iteration 3: replaced width-driven vertical padding with viewport-height-driven spacing, made desktop stages one screen tall, and removed the Editor's three-screen scroll runway while retaining tab and keyboard controls.
- Iteration 3: restored the Hero to `100svh`; the mobile layout remains natural-height so long content is never clipped into a forced viewport.
- Iteration 4: added a one-screen Scenario Demos stage, split the combined Scenario 2/3 recording, merged Scenario 4's two source recordings, and generated four web-ready edits with lazy single-source playback.
- Iteration 5: expanded About with a bilingual SEL explainer based on the CASEL 5, while retaining one-screen desktop sizing and natural mobile flow.
- Post-fix review: no actionable P0, P1 or P2 findings remain.

## Follow-up Polish

- [P3] A future content pass could replace the current hero clip with a deliberately edited short reel rather than a compressed excerpt.

final result: passed
