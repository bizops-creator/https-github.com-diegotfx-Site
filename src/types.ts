export interface ServiceStrategic {
  id: string;
  title: string;
  category: "acquisition" | "content" | "technology" | "strategy";
  description: string;
  strategicImpact: string; // How it impacts sales/ROI
  features: string[];
}

export interface CaseStudy {
  id: string;
  clientName: string;
  niche: string;
  challenge: string;
  strategy: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    gain: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatarUrl: string;
  };
}

export interface DiagnosticInput {
  businessName: string;
  website: string;
  industry: string;
  bottleneck: string;
  currentRevenue: string;
  targetChannel: string;
}

export interface GrowthBlueprint {
  executiveConcept: string;
  positioningAngle: string;
  acquisitionStrategy: string;
  aiSystemsEngine: string;
  funnelArchitecture: string;
  projectedRoi: string;
  consultantAdvice: string;
}

export interface CRMLead {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  website?: string;
  message?: string;
  bottleneck?: string;
  revenue?: string;
  diagnosticResult?: GrowthBlueprint | null;
  timestamp?: string;
}
