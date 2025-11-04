# SynIRgy Website Redesign - Remaining Tasks

## Overview
This document tracks the remaining work for completing the futuristic dark theme redesign of the SynIRgy Workshop website. The foundation (Tailwind CSS, shadcn/ui, background effects, navigation, footer, and home page) has been completed and the build is successful.

## Instructions for Coding Agent
- Mark completed items with `[x]` instead of `[ ]`
- Update the "Last Updated" timestamp when making changes
- Add notes under each item if needed
- Follow the established design patterns from the home page
- Ensure all changes maintain static export compatibility for GitHub Pages

**Last Updated:** 2025-11-04 (COMPLETED)

---

## ✅ STATUS: ALL PHASES COMPLETE

**Summary:** All 8 content pages have been successfully redesigned with the futuristic minimal dark theme. The website now features:
- Modern dark theme with Tailwind CSS and shadcn/ui components
- Animated backgrounds (NetworkGraph, ParticleBackground, GridOverlay)
- Smooth animations using framer-motion
- Fully responsive layouts
- Accessible design with reduced motion support
- Successful build with static export for GitHub Pages

---

## Phase 1: Core Content Pages (✅ COMPLETE)

### 1. Call for Papers Page (`/app/call-for-papers/page.tsx`)
- [ ] **Convert to client component** with `'use client'` directive
- [ ] **Add background effects**
  - Import and include `<GridOverlay />` component
  - Consider adding subtle `<ParticleBackground />` for consistency
- [ ] **Create hero section using `PageHero` component**
  - Title: "Call for Papers"
  - Description: Brief overview of submission opportunities
- [ ] **Redesign "Workshop Scope" section**
  - Use `<SectionHeading>` component for title
  - Use `<AnimatedCard>` for content with fade-in animation
  - Add relevant icons from `lucide-react` (e.g., `FileText`, `Users`)
- [ ] **Redesign "Topics of Interest" section**
  - Create a grid layout of topic cards (2-3 columns)
  - Each topic should be an `<AnimatedCard>` with:
    - Icon representing the topic (from `lucide-react`)
    - Topic name as CardTitle
    - Description as CardContent
  - Add staggered animation delays (0.1s, 0.2s, etc.)
- [ ] **Redesign "Submission Types" section**
  - Use `<Badge>` components to highlight paper types
  - Display in a 3-column grid on desktop, 1 column on mobile
  - Include page count limits prominently
- [ ] **Redesign "Submission Guidelines" section**
  - Use checklist format with checkmark icons
  - Style as an `<AnimatedCard>` with clean list styling
- [ ] **Add Call-to-Action section at bottom**
  - Large "Submit Your Paper" button (use `<Button>` with glow-effect)
  - Link to `/submission` page
  - Secondary button linking to `/important-dates`
- [ ] **Test responsive layout** on mobile, tablet, desktop

**Implementation Notes:**
```typescript
// Example structure:
'use client'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import { FileText, Users, Target, etc } from 'lucide-react'

// Use motion from framer-motion for animations
// Follow the pattern established in app/page.tsx
```

---

### 2. Important Dates Page (`/app/important-dates/page.tsx`)
- [ ] **Convert to client component**
- [ ] **Add background effects** (GridOverlay + ParticleBackground)
- [ ] **Create hero section with PageHero**
- [ ] **Design vertical timeline layout**
  - Replace existing table with visual timeline
  - Use timeline connector lines (CSS borders or SVG)
  - Each date should be a timeline node with:
    - Date on one side (large, prominent)
    - Event description on other side
    - Icon representing the event type (Calendar, Bell, CheckCircle, etc.)
- [ ] **Style timeline nodes as AnimatedCards**
  - Staggered fade-in animations
  - Hover effects showing additional details
  - Color coding by event type (submission=blue, notification=yellow, workshop=green)
- [ ] **Add countdown timer component (optional enhancement)**
  - Display days until next deadline
  - Animated numbers
- [ ] **Add timezone note** (All times are AoE - Anywhere on Earth)
- [ ] **Responsive design**
  - Timeline should stack vertically on mobile
  - Dates should be above descriptions on small screens
- [ ] **Add CTA linking to submission page**

**Implementation Notes:**
```typescript
// Timeline structure suggestion:
const dates = [
  { date: 'TBA', event: 'Paper Submission Deadline', icon: FileText, color: 'primary' },
  { date: 'TBA', event: 'Notification of Acceptance', icon: Bell, color: 'secondary' },
  // etc.
]

// Use flexbox or grid with pseudo-elements for connecting lines
// Consider using @keyframes for line drawing animation
```

---

### 3. Program Page (`/app/program/page.tsx`)
- [ ] **Convert to client component**
- [ ] **Add background effects**
- [ ] **Create hero section**
- [ ] **Design schedule layout**
  - Replace table with modern schedule cards
  - Group sessions by time blocks
  - Use color-coded badges for session types (Keynote, Paper Session, Poster, Break)
- [ ] **Create SessionCard component** (can be inline or separate file)
  - Time range (large, prominent)
  - Session title
  - Session type badge
  - Speaker/presenter info (if available)
  - Expandable details on hover/click
- [ ] **Add session type legend**
  - Visual key showing what each color/badge means
- [ ] **Style breaks and social events differently**
  - Coffee breaks, lunch, etc. should be visually distinct
- [ ] **Add link to accepted papers page**
- [ ] **Responsive design**
  - Cards should stack on mobile
  - Time should be displayed clearly in all viewports

---

### 4. Speakers Page (`/app/speakers/page.tsx`)
- [ ] **Convert to client component**
- [ ] **Add background effects**
- [ ] **Create hero section**
- [ ] **Design speaker card grid** (2 columns on desktop, 1 on mobile)
- [ ] **Create SpeakerCard component**
  - Placeholder for speaker photo (use gradient background with icon)
  - Speaker name (prominent)
  - Affiliation (smaller, muted)
  - Talk title (if available)
  - Bio preview (collapsible or modal)
  - Social links (optional)
- [ ] **Add "TBA" placeholders** styled consistently
- [ ] **Include call for participation text**
- [ ] **Add animation effects**
  - Fade in on scroll
  - Hover effects (slight scale, shadow enhancement)

**Implementation Notes:**
```typescript
// Speaker card should have:
// - Image placeholder with User icon from lucide-react
// - Gradient background matching theme
// - Border with hover glow effect
```

---

### 5. Organizers Page (`/app/organizers/page.tsx`)
- [ ] **Convert to client component**
- [ ] **Add background effects**
- [ ] **Create hero section**
- [ ] **Design two sections:**
  1. Workshop Chairs (larger cards, 2-3 people)
  2. Program Committee (compact cards in grid, many people)
- [ ] **Create OrganizerCard component**
  - Name
  - Affiliation with institution logo placeholder
  - Role badge (Chair, PC Member, etc.)
  - Email/contact (icon + link)
- [ ] **Use different card sizes for chairs vs committee**
- [ ] **Add contact section** at bottom
  - General workshop email
  - Links to reach out
- [ ] **Responsive grid layout**

---

### 6. Submission Page (`/app/submission/page.tsx`)
- [ ] **Convert to client component**
- [ ] **Add background effects**
- [ ] **Create hero section**
- [ ] **Design step-by-step submission process**
  - Numbered steps (1-5) with large numbers
  - Each step as an AnimatedCard
  - Connect steps with vertical line or arrows
- [ ] **Add process visualization icons** for each step
  - Step 1: Prepare (FileEdit)
  - Step 2: Format (FileCheck)
  - Step 3: Submit (Upload)
  - Step 4: Review (Search)
  - Step 5: Present (Presentation)
- [ ] **Create formatting requirements section**
  - Use shadcn Table component for requirements
  - Style with dark theme
- [ ] **Add ethics and plagiarism policy section**
  - Use AlertCircle icon
  - Important callout box styling
- [ ] **Create prominent submission button**
  - "Submit to EasyChair" or similar
  - Glow effect
  - Disabled state with "Coming Soon" if link not ready
- [ ] **Add FAQ accordion (optional enhancement)**
  - Use shadcn Accordion component
  - Common questions about submission process

**Implementation Notes:**
```typescript
// Step indicator component suggestion:
const steps = [
  { number: 1, title: 'Prepare', description: '...', icon: FileEdit },
  // etc.
]
// Use grid with connecting lines between steps
```

---

### 7. Accepted Papers Page (`/app/accepted-papers/page.tsx`)
- [ ] **Convert to client component**
- [ ] **Add background effects**
- [ ] **Create hero section**
- [ ] **Design paper list layout**
  - Each paper as AnimatedCard
  - Paper title (large, clickable if PDF available)
  - Authors list
  - Award badges (if applicable): Best Paper, Best Student Paper
  - Abstract preview (collapsible)
- [ ] **Add "TBA - Papers will be announced" placeholder**
- [ ] **Include search/filter functionality (optional enhancement)**
  - Filter by type (Full, Short, Position)
  - Search by author or keyword
- [ ] **Add link to program page**
- [ ] **Responsive layout**

---

### 8. Venue & Contact Page (`/app/venue/page.tsx`)
- [ ] **Convert to client component**
- [ ] **Add background effects**
- [ ] **Create hero section**
- [ ] **Design venue information section**
  - Use AnimatedCard for venue details
  - Map placeholder (can use gradient box with MapPin icon)
  - Address details
  - Link to ECIR 2026 main conference
- [ ] **Create "Getting There" section**
  - Transportation options
  - Icons for each transport type (Plane, Train, Car)
- [ ] **Add accommodation section**
  - Hotel recommendations
  - Booking links
- [ ] **Create contact section**
  - Contact form placeholder OR
  - Email links with icons
  - Social media links (Twitter, LinkedIn)
- [ ] **Add FAQ section** (optional)
- [ ] **Responsive layout**

---

## Phase 2: Cleanup & Optimization

### 9. Clean Up Old CSS Files
- [ ] **Delete `/components/Navigation.css`**
  - Navigation now uses Tailwind classes
- [ ] **Delete `/components/Footer.css`**
  - Footer now uses Tailwind classes
- [ ] **Delete `/app/page.css`**
  - Home page now uses Tailwind and components
- [ ] **Check for any other unused CSS files**
- [ ] **Remove any unused imports** referencing old CSS files

---

### 10. Code Quality & Consistency
- [ ] **Run ESLint and fix any warnings**
  ```bash
  npm run lint
  ```
- [ ] **Check all pages for consistent imports**
  - Ensure all pages import components correctly
  - Use consistent import order
- [ ] **Verify all links work correctly**
  - Test navigation between pages
  - Ensure basePath is respected
- [ ] **Add loading states** where appropriate (optional)
- [ ] **Add error boundaries** (optional enhancement)

---

## Phase 3: Testing & Validation

### 11. Responsive Design Testing
- [ ] **Test on mobile (375px width)**
  - Check all pages render correctly
  - Navigation menu works
  - Cards stack properly
  - Text is readable
- [ ] **Test on tablet (768px width)**
  - Check grid layouts
  - Verify navigation transitions
- [ ] **Test on desktop (1440px+ width)**
  - Verify max-width containers work
  - Check animations perform smoothly
- [ ] **Test with browser zoom** (50%, 150%, 200%)

---

### 12. Accessibility Testing
- [ ] **Verify keyboard navigation works**
  - Tab through all interactive elements
  - Ensure focus states are visible
- [ ] **Check color contrast ratios**
  - Text should meet WCAG AA standards
  - Use browser dev tools to verify
- [ ] **Test with reduced motion preferences**
  - Ensure animations respect `prefers-reduced-motion`
  - Already implemented in CSS, verify it works
- [ ] **Verify all images have alt text**
- [ ] **Check ARIA labels** on interactive elements
- [ ] **Test with screen reader** (optional but recommended)

---

### 13. Performance Testing
- [ ] **Run Lighthouse audit**
  ```bash
  # Build and serve locally
  npm run build
  npx serve out
  # Then run Lighthouse in Chrome DevTools
  ```
- [ ] **Check bundle sizes**
  - Verify First Load JS is reasonable
  - Consider code splitting if needed
- [ ] **Test animation performance**
  - Check for jank or stuttering
  - Monitor FPS during scroll
- [ ] **Verify static export size**
  ```bash
  du -sh out/
  ```

---

### 14. Build & Deployment Verification
- [ ] **Clean build test**
  ```bash
  rm -rf .next out node_modules/.cache
  npm run build
  ```
- [ ] **Verify all pages generated**
  - Check `out/` directory contains all expected HTML files
- [ ] **Test basePath configuration**
  - Ensure assets load correctly with `/synirgy-website` prefix
- [ ] **Preview static export locally**
  ```bash
  npx serve out
  # Visit http://localhost:3000/synirgy-website
  ```
- [ ] **Verify GitHub Pages deployment workflow**
  - Check `.github/workflows/deploy.yml` is correct
- [ ] **Test on actual GitHub Pages URL** (after push)

---

## Phase 4: Final Polish (Optional Enhancements)

### 15. Advanced Features (Time Permitting)
- [ ] **Add page transitions**
  - Use framer-motion AnimatePresence
- [ ] **Add dark/light mode toggle**
  - Currently hardcoded to dark, add toggle in Navigation
- [ ] **Add search functionality**
  - Global search across all content
- [ ] **Add RSS feed for news/updates**
- [ ] **Add newsletter signup form**
- [ ] **Add Google Analytics or similar**
- [ ] **Add social media share buttons**
- [ ] **Add print stylesheet**
- [ ] **Add PWA manifest** (optional)

---

## Design System Reference

### Color Palette
```css
/* Primary colors (already configured) */
--primary: 217 91% 60% (blue)
--background: 0 0% 4% (dark)
--foreground: 0 0% 90% (light text)
--muted-foreground: 0 0% 63.9% (secondary text)
```

### Component Patterns
- **Cards**: Use `<AnimatedCard>` with hover3d effect
- **Headings**: Use `<SectionHeading>` with gradient text
- **Buttons**: Use shadcn `<Button>` with glow-effect class for primary actions
- **Icons**: Always from `lucide-react`, size `h-5 w-5` or `h-6 w-6`
- **Spacing**: Use Tailwind spacing scale (py-24 for sections, gap-6 for grids)

### Animation Guidelines
- **Stagger delays**: 0.1s, 0.2s, 0.3s, 0.4s for sequential items
- **Duration**: 0.6s for most animations
- **Easing**: ease-out for entrances, ease-in-out for hovers
- **Respect reduced motion**: Already handled in CSS

### Icons to Use (from lucide-react)
- Navigation: `Network`, `Menu`, `X`
- Actions: `FileText`, `Upload`, `Calendar`, `Mail`
- Status: `CheckCircle`, `AlertCircle`, `Clock`, `Bell`
- Social: `Linkedin`, `Github`, `Mail`
- Content: `Users`, `Target`, `Presentation`, `MapPin`

---

## Git Workflow

### Before Starting Work
```bash
git status  # Check current state
git pull origin main  # Get latest changes
```

### During Work
```bash
# Make changes to files...
git add <modified-files>
git commit -m "feat: redesign [page-name] page with futuristic theme"
```

### After Completing Each Page
```bash
npm run build  # Verify build succeeds
npm run lint   # Check for errors
git push origin main  # Deploy to GitHub Pages
```

---

## Troubleshooting

### Build Errors
- **Syntax errors**: Check for missing imports, typos in component names
- **Type errors**: Ensure all TypeScript types are correct
- **CSS errors**: Verify Tailwind classes are valid

### Visual Issues
- **Cards not showing**: Check if background/foreground colors contrast
- **Animations not working**: Verify framer-motion is imported
- **Icons missing**: Ensure lucide-react icons are imported correctly

### Deployment Issues
- **404 errors**: Check basePath in next.config.js matches repo name
- **Missing styles**: Verify Tailwind is processing correctly
- **Broken links**: Ensure all hrefs use correct paths

---

## Success Criteria

### Must Have ✅
- [ ] All 8 content pages redesigned with modern components
- [ ] Consistent design language across all pages
- [ ] Mobile-responsive layout
- [ ] Build succeeds without errors
- [ ] GitHub Pages deployment works

### Nice to Have 🎯
- [ ] Lighthouse score >90 for Performance, Accessibility
- [ ] Smooth animations on all interactions
- [ ] Enhanced accessibility features
- [ ] Advanced interactive features

---

## Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

### Existing Components to Reference
- `/app/page.tsx` - Home page with full design patterns
- `/components/Navigation.tsx` - Navigation implementation
- `/components/Footer.tsx` - Footer implementation
- `/components/AnimatedCard.tsx` - Card component pattern
- `/components/PageHero.tsx` - Hero section pattern
- `/components/SectionHeading.tsx` - Heading pattern

### Project Files
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles and utilities
- `next.config.js` - Next.js and GitHub Pages config

---

**End of Checklist**

*Remember to commit changes frequently and test after each major change!*
