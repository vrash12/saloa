import type { PortfolioScreenshot } from "./portfolio";

// Locally hosted screenshots; provenance is documented in qa/portfolio-source-notes.md.
export const projectScreenshots = {
  "cts-pacific": [
    {
      "src": "/images/portfolio/cts-pacific/01.webp",
      "thumbnail": "/images/portfolio/cts-pacific/01-preview.webp",
      "alt": "CTS Pacific homepage and telecommunications services",
      "width": 1600,
      "height": 804
    },
    {
      "src": "/images/portfolio/cts-pacific/02.webp",
      "thumbnail": "/images/portfolio/cts-pacific/02-preview.webp",
      "alt": "CTS Pacific infrastructure service categories",
      "width": 1600,
      "height": 776
    }
  ],
  "garden-of-peace": [
    {
      "src": "/images/portfolio/garden-of-peace/01.webp",
      "thumbnail": "/images/portfolio/garden-of-peace/01-preview.webp",
      "alt": "Garden of Peace visitor homepage",
      "width": 1600,
      "height": 795
    },
    {
      "src": "/images/portfolio/garden-of-peace/02.webp",
      "thumbnail": "/images/portfolio/garden-of-peace/02-preview.webp",
      "alt": "Garden of Peace interactive cemetery map",
      "width": 1600,
      "height": 858
    }
  ],
  "amoracare": [
    {
      "src": "/images/portfolio/amoracare/01.webp",
      "thumbnail": "/images/portfolio/amoracare/01-preview.webp",
      "alt": "AmoraCare adoption guidance and community support homepage",
      "width": 1265,
      "height": 712
    },
    {
      "src": "/images/portfolio/amoracare/02.webp",
      "thumbnail": "/images/portfolio/amoracare/02-preview.webp",
      "alt": "AmoraCare administration dashboard",
      "width": 1512,
      "height": 887
    }
  ],
  "permitnet": [
    {
      "src": "/images/portfolio/permitnet/01.webp",
      "thumbnail": "/images/portfolio/permitnet/01-preview.webp",
      "alt": "PermitNet network access sign-in",
      "width": 1600,
      "height": 790
    },
    {
      "src": "/images/portfolio/permitnet/02.webp",
      "thumbnail": "/images/portfolio/permitnet/02-preview.webp",
      "alt": "PermitNet connected-device management",
      "width": 1600,
      "height": 775
    }
  ],
  "copacific": [
    {
      "src": "/images/portfolio/copacific/01.webp",
      "thumbnail": "/images/portfolio/copacific/01-preview.webp",
      "alt": "Copacific commercial kitchen equipment homepage",
      "width": 1235,
      "height": 960
    },
    {
      "src": "/images/portfolio/copacific/02.webp",
      "thumbnail": "/images/portfolio/copacific/02-preview.webp",
      "alt": "Copacific supported equipment and parts brands",
      "width": 1600,
      "height": 775
    }
  ],
  "pgt-onboard": [
    {
      "src": "/images/portfolio/pgt-onboard/01.webp",
      "thumbnail": "/images/portfolio/pgt-onboard/01-preview.webp",
      "alt": "PGT Onboard bus fleet monitoring screen",
      "width": 720,
      "height": 1592
    },
    {
      "src": "/images/portfolio/pgt-onboard/02.webp",
      "thumbnail": "/images/portfolio/pgt-onboard/02-preview.webp",
      "alt": "PGT Onboard route and schedule management",
      "width": 720,
      "height": 1592
    }
  ],
  "fabellacare": [
    {
      "src": "/images/portfolio/fabellacare/01.webp",
      "thumbnail": "/images/portfolio/fabellacare/01-preview.webp",
      "alt": "FabellaCare sign-in and public queue access",
      "width": 1600,
      "height": 769
    },
    {
      "src": "/images/portfolio/fabellacare/02.webp",
      "thumbnail": "/images/portfolio/fabellacare/02-preview.webp",
      "alt": "FabellaCare healthcare operations dashboard",
      "width": 1600,
      "height": 806
    }
  ],
  "barangay-soms": [
    {
      "src": "/images/portfolio/barangay-soms/01.webp",
      "thumbnail": "/images/portfolio/barangay-soms/01-preview.webp",
      "alt": "Barangay SOMS service portal sign-in",
      "width": 1600,
      "height": 827
    },
    {
      "src": "/images/portfolio/barangay-soms/02.webp",
      "thumbnail": "/images/portfolio/barangay-soms/02-preview.webp",
      "alt": "Barangay SOMS operations dashboard",
      "width": 1600,
      "height": 825
    }
  ],
  "patientcare": [
    {
      "src": "/images/portfolio/patientcare/01.webp",
      "thumbnail": "/images/portfolio/patientcare/01-preview.webp",
      "alt": "PatientCare healthcare platform homepage",
      "width": 1600,
      "height": 828
    },
    {
      "src": "/images/portfolio/patientcare/02.webp",
      "thumbnail": "/images/portfolio/patientcare/02-preview.webp",
      "alt": "PatientCare hospital services catalog",
      "width": 1600,
      "height": 811
    }
  ],
  "agriculture-information-system": [
    {
      "src": "/images/portfolio/agriculture-information-system/agrigov-dashboard.webp",
      "thumbnail": "/images/portfolio/agriculture-information-system/agrigov-dashboard-preview.webp",
      "alt": "AgriGOV operations dashboard with farmer records, parcel mapping coverage, and assistance distributions",
      "width": 1600,
      "height": 772
    },
    {
      "src": "/images/portfolio/agriculture-information-system/agrigov-geofences.webp",
      "thumbnail": "/images/portfolio/agriculture-information-system/agrigov-geofences-preview.webp",
      "alt": "AgriGOV municipality geofences with boundary mapping and appearance controls",
      "width": 1600,
      "height": 815
    },
    {
      "src": "/images/portfolio/agriculture-information-system/01.webp",
      "thumbnail": "/images/portfolio/agriculture-information-system/01-preview.webp",
      "alt": "Agriculture Information System farmer registration form",
      "width": 1440,
      "height": 1166
    }
  ]
} satisfies Record<string, PortfolioScreenshot[]>;
