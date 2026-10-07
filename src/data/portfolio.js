import coreCycle from '@/assets/images/projects/01-a-export.webp'
import oakleyDay from '@/assets/images/projects/01-b-export.webp'
import blayzer from '@/assets/images/projects/02-a-export.png'
import hemingway from '@/assets/images/projects/02-b-export.webp'
import polarLens from '@/assets/images/projects/03-a-export.webp'
import polarUltra from '@/assets/images/projects/03-b-export.webp'
import crmEmailA from '@/assets/images/projects/04-a-export.webp'
import crmEmailB from '@/assets/images/projects/04-b-export.webp'
import chatgpt1 from '@/assets/images/projects/05-a-export.png'
import chatgpt2 from '@/assets/images/projects/05-b-export.webp'
import kidsMagnific from '@/assets/images/projects/06-a-export.png'
import kidsTopaz from '@/assets/images/projects/06-b-export.webp'

import detailLogo from '@/assets/icons/oakley-logo.svg'
import detailHeroVideo from '@/assets/videos/01-hero.mov'
import detailIntro from '@/assets/images/detail/02-intro.png'
import detailVanguard from '@/assets/images/detail/03-vanguard.png'
import detailProduct from '@/assets/images/detail/05-product.png'

import rayBanLogo from '@/assets/icons/rayban-meta-logo.svg'
import rayBanHeader from '@/assets/images/detail-2/01-header.png'
import rayBanCms from '@/assets/images/detail-2/02-cms.png'
import rayBanDemo1 from '@/assets/videos/02-03-demo.mov'
import rayBanDemo2 from '@/assets/videos/02-04-demo.mov'
import rayBanBox from '@/assets/images/detail-2/05-box.png'
import rayBanDemo3 from '@/assets/videos/02-06-demo.mov'
import rayBanFrame from '@/assets/images/detail-2/07-frame.png'
import rayBanText from '@/assets/images/detail-2/08-text.png'

import innovationLogo from '@/assets/icons/rayban-logo.svg'
import innovationKids from '@/assets/videos/03-01-kids.mp4'
import innovationBrochureA1 from '@/assets/images/detail-3/02-a-tl.png'
import innovationBrochureA2 from '@/assets/images/detail-3/02-b-tr.png'
import innovationBrochureA3 from '@/assets/images/detail-3/02-c-bl.png'
import innovationBrochureA4 from '@/assets/images/detail-3/02-d-br.png'
import innovationMaterials from '@/assets/videos/03-03-materials.mp4'
import innovationBrochureB1 from '@/assets/images/detail-3/04-a-tl.png'
import innovationBrochureB2 from '@/assets/images/detail-3/04-b-tr.png'
import innovationBrochureB3 from '@/assets/images/detail-3/04-c-bl.jpg'
import innovationBrochureB4 from '@/assets/images/detail-3/04-d-br.png'
import innovationLens from '@/assets/videos/03-05-lens.mp4'

import redLblLogo from '@/assets/icons/oakley-logo-only.svg'
import redLblTags from '@/assets/images/detail-6/01-tags.webp'
import redLblTagModel from '@/assets/images/detail-6/02-tag-model.webp'

import samsungLogo from '@/assets/icons/samsung-logo.svg'
import samsungUnidays from '@/assets/images/detail-5/01-unidays.png'
import samsungFrame from '@/assets/images/detail-5/02-frame.png'
import samsungCrop from '@/assets/images/detail-5/03-samsung-crop.png'

import crm2 from '@/assets/images/detail-4/01-crm-2.png'
import crm1 from '@/assets/images/detail-4/02-crm-1.png'
import crm3 from '@/assets/images/detail-4/03-crm-3.png'

export const personal = {
  name: 'Sara Corona',
  role: 'UI Designer',
  location: 'Italy',
  bio: 'UI/UX designer and visual designer blending creativity and usability into digital experiences.',
  about:
    'Working across digital, visual and graphic design, I create experiences and identities that connect ideas, aesthetics and technology across different communication channels.',
  email: 'sa.corona7@gmail.com',
  phone: '+39 346 9671021',
  linkedin: '',
  github: '',
}

export const specialisations = ['Digital Product', 'Design System', 'Interaction Design']

export const skills = [
  { name: 'HTML', category: 'core' },
  { name: 'CSS / SCSS', category: 'core' },
  { name: 'JavaScript', category: 'core' },
  { name: 'Vue.js', category: 'framework' },
  { name: 'Bootstrap', category: 'framework' },
  { name: 'GSAP', category: 'library' },
  { name: 'PHP / Laravel', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'Git', category: 'tool' },
  { name: 'Figma', category: 'tool' },
]

// Each project renders as a pair of media "shots":
// - image: imported asset
// - height: exact per-cell height from the Figma frame (node 15386:6828)
// - mobileHeight: cell height in px at 375px (node 15386:6972); scales with the viewport
// - position: optional object-position for the cover crop
// - width: optional box width when narrower than the column
export const projects = [
  {
    id: 1,
    number: '01',
    title: 'Oakley Meta Vanguard',
    category: 'UI/UX Design, Digital Experience',
    shots: [
      { image: coreCycle, height: '17.875rem', mobileHeight: 174.107, position: 'center top' },
      { image: oakleyDay, height: '22.5rem', mobileHeight: 219.156 },
    ],
    detail: {
      title: 'Oakley Meta Vanguard',
      subtitle: 'Oakley x Meta AI Glasses — MyEssilorLuxottica',
      logo: detailLogo,
      note: 'A new landing page experience for the launch of Oakley x Meta AI Glasses. Built around a bold, high-tech visual language, the experience translates Oakley’s performance-driven identity into a distinctive digital expression.',
      year: '2026',
      category: 'UI/UX Design, Digital Experience',
      images: [
        { src: detailHeroVideo, height: '39.125rem', type: 'video' },
        { src: detailIntro, height: '39.3125rem' },
        { src: detailVanguard, height: '27.875rem', position: 'top' },
        { src: detailVanguard, height: '28.8125rem', position: 'bottom' },
        { src: detailProduct, height: '29.25rem' },
      ],
    },
  },
  {
    id: 2,
    number: '02',
    title: 'Ray-Ban Meta Glasses',
    category: 'UI/UX Design, Digital Experience',
    shots: [
      { image: blayzer, height: '16.125rem', mobileHeight: 149.894 },
      { image: hemingway, height: '23.875rem', mobileHeight: 222 },
    ],
    detail: {
      title: 'Ray-Ban Meta Glasses',
      subtitle: 'Ray-Ban Meta Gen2 — MyEssilorLuxottica',
      logo: rayBanLogo,
      logoStyle: { objectFit: 'none', objectPosition: '0.35rem 1.55rem' },
      note: 'A new landing page experience for the worldwide launch of the Ray-Ban Meta Gen 2 collection on the MyEssilorLuxottica platform. A premium, tech-infused experience designed around Ray-Ban’s distinctive visual identity, introducing the new Meta Optics range, a comparison module across generations, and dedicated sections showcasing the technology and key new features.',
      year: '2026',
      category: 'UI/UX Design, Digital Experience',
      linkLabel: 'Link',
      linkUrl: 'https://staging.arkage.it/lux-editorial/rb-bellini-2026/en_us/index.html',
      borderless: true,
      images: [
        { src: rayBanHeader, height: '32.0625rem' },
        { src: rayBanCms, height: '28.025rem' },
        { src: rayBanDemo1, height: '38.5542rem', type: 'video' },
        { src: rayBanDemo2, height: '27.7083rem', type: 'video' },
        { src: rayBanBox, height: '34.7542rem' },
        { src: rayBanDemo3, height: '25.65rem', type: 'video' },
        { src: rayBanFrame, height: '30.6771rem' },
        { src: rayBanText, height: '29.6875rem' },
      ],
    },
  },
  {
    id: 3,
    number: '03',
    title: 'Ray-Ban Innovation Lab',
    category: 'Digital Experience, Print',
    shots: [
      { image: polarLens, height: '14.375rem', mobileHeight: 133.627 },
      { image: polarUltra, height: '17.75rem', mobileHeight: 165 },
    ],
    detail: {
      title: 'Ray-Ban Innovation Lab',
      subtitle: 'Innovative Materials, Polarized Lens and Kids Innovation',
      logo: innovationLogo,
      logoStyle: { objectFit: 'none', objectPosition: '0.2619rem 1.05rem' },
      note: [
        'A cross-channel experience showcasing Ray-Ban’s latest innovations across Innovative Materials, Polarized Lens and Kids Innovation.',
        'The project combines a mobile-first digital platform, accessed via QR code, with a series of premium brochures created for EssilorLuxottica Days. Each experience brings the latest technologies and innovations to life through interactive digital content and tactile print materials.',
      ],
      year: '2025',
      category: 'Digital Experience, Print',
      linkLabel: 'Link',
      linkUrl: 'https://staging.arkage.it/rb-innovation-lab/en-us/',
      borderless: true,
      images: [
        { src: innovationKids, height: '32.0625rem', type: 'video' },
        {
          type: 'grid',
          height: '38.3876rem',
          cells: [
            { src: innovationBrochureA1 },
            { src: innovationBrochureA2 },
            { src: innovationBrochureA3 },
            { src: innovationBrochureA4 },
          ],
        },
        { src: innovationMaterials, height: '32.0625rem', type: 'video' },
        {
          type: 'grid',
          height: '38.3318rem',
          cells: [
            { src: innovationBrochureB1 },
            { src: innovationBrochureB2 },
            {
              src: innovationBrochureB3,
              crop: { width: '183.83%', height: '183.38%', left: '-12.95%', top: '-48.45%' },
            },
            { src: innovationBrochureB4 },
          ],
        },
        { src: innovationLens, height: '32.0625rem', type: 'video' },
      ],
    },
  },
  {
    id: 4,
    number: '04',
    title: 'Customer Journey CRM',
    category: 'CRM Design, Digital Communication',
    shots: [
      { image: crmEmailA, height: '22.2306rem', mobileHeight: 209.155, width: '17.5374rem' },
      { image: crmEmailB, height: '17.6437rem', mobileHeight: 166 },
    ],
    detail: {
      title: 'Customer Journey CRM',
      subtitle: 'CRM Module Library',
      note: 'A scalable CRM design system developed across multiple brands and customer journeys, creating a modular library of flexible components for consistent and efficient campaign production. The system includes light and dark mode modules, designed and tested for seamless adaptation across markets, retailers and CRM activations.',
      year: '2025/26',
      category: 'CRM Design, Digital Communication',
      borderless: true,
      images: [
        { src: crm2, height: '102.875rem' },
        { src: crm1, height: '94.5rem' },
        { src: crm3, height: '97.75rem' },
      ],
    },
  },
  {
    id: 5,
    number: '05',
    title: 'Samsung',
    category: 'Visual Art Direction',
    shots: [
      { image: chatgpt1, height: '13.375rem', mobileHeight: 124.331 },
      { image: chatgpt2, height: '25.125rem', mobileHeight: 234 },
    ],
    detail: {
      title: 'Samsung',
      subtitle: 'Zero Stress  — Samsung.com',
      logo: samsungLogo,
      note: 'To promote Samsung.com’s e-commerce services, we developed an umbrella concept designed to bring consistency across the entire customer journey. A flexible narrative format positions Samsung.com as the perfect partner for a “Zero Stress” shopping experience, turning every service into an effortless and reassuring moment.',
      year: '2026',
      category: 'Visual Art Direction',
      borderless: true,
      images: [
        { src: samsungUnidays, height: '32.8125rem' },
        { src: samsungFrame, height: '42.75rem' },
        { src: samsungCrop, height: '35.125rem' },
      ],
    },
  },
  {
    id: 6,
    number: '06',
    title: 'Oakley RED LBL',
    category: 'Label Design, Print',
    shots: [
      { image: kidsMagnific, height: '12rem', mobileHeight: 111.549 },
      { image: kidsTopaz, height: '18rem', mobileHeight: 167, position: 'center top' },
    ],
    detail: {
      title: 'Oakley RED LBL',
      subtitle: 'Capsule Label Concepts — Oakley',
      logo: redLblLogo,
      note: 'For the Oakley RED LBL capsule collection, I designed a new label concept that reinterprets the brand’s technical heritage through iconic halftone patterns and bold, impactful typography inspired by Y2K aesthetics. Rooted in four pillars: honoring the heritage, reframing the message, everyday authenticity, and revitalizing the brand, the label brings RED LBL’s original values into the present. Designed to perform. Reengineered for life.',
      year: '2025',
      category: 'Label Design, Print',
      images: [
        { src: redLblTags, height: '33.6875rem' },
        { src: redLblTagModel, height: '85.625rem' },
      ],
    },
  },
]
