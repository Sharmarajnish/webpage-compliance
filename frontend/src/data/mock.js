export const mockData = {
  hero: {
    headline: "Proactive Compliance, Powered by Real-Time Intelligence",
    subheadline: "Move beyond periodic audits. Precogs transforms compliance from a retrospective checklist into a continuous, automated state of security across your entire development lifecycle and cloud infrastructure.",
    description: "In today's fast-paced development environment, security gaps and compliance drift can occur in an instant. Traditional methods that rely on manual checks and point-in-time audits leave dangerous windows of exposure. Precogs closes these windows by embedding real-time compliance monitoring and reporting directly into your workflows, ensuring every code commit, infrastructure change, and system interaction adheres to the highest standards as it happens."
  },
  
  coverage: {
    title: "Comprehensive Coverage of Major Standards",
    subtitle: "Precogs automatically scans and validates your systems against the world's most critical security standards and weakness classifications, providing a unified view of your compliance posture."
  },
  
  frameworks: [
    {
      name: "OWASP Top 10",
      focus: "Web Application Security (e.g., Broken Access Control, Cryptographic Failures, Injection)",
      monitoring: "Continuously scans code and running apps for the most critical web app risks."
    },
    {
      name: "CWE Top 25",
      focus: "Most Dangerous Software Weaknesses (e.g., Out-of-bounds Write, XSS, SQL Injection)",
      monitoring: "Identifies root causes of vulnerabilities in proprietary and open-source code during development."
    },
    {
      name: "Industry Rules",
      focus: "Configurable policies for specific regulatory needs",
      monitoring: "Activates specific controls and monitoring based on the selected framework (e.g., HIPAA for healthcare)."
    }
  ],
  
  industryCompliance: {
    title: "Mastering Industry & Enterprise-Specific Compliance",
    subtitle: "Go beyond generic security with tailored compliance programs for your industry and unique internal policies.",
    industries: [
      {
        name: "Healthcare (HIPAA)",
        description: "Automatically monitors access controls and data flows to ensure Protected Health Information (PHI) is safeguarded, providing an auditable trail."
      },
      {
        name: "Financial Services (SOC 2, PCI DSS)",
        description: "Continuously validates controls for security, availability, and processing integrity. For PCI DSS, ensures cardholder data environments remain secure."
      },
      {
        name: "Data Privacy (GDPR, CCPA)",
        description: "Tracks the processing of personal data in real time, helping to fulfill data subject access requests and manage consent."
      },
      {
        name: "International Standards (ISO 27001)",
        description: "Provides evidence for the continuous monitoring required by leading information security standards."
      }
    ],
    enterpriseDescription: "Your organization has unique risks and policies. Precogs allows you to define and enforce custom compliance rules tailored to your internal governance, risk, and compliance (GRC) framework.",
    enterpriseFeatures: [
      "Custom policy definition and enforcement",
      "Internal governance framework integration",
      "Risk-based compliance monitoring",
      "Tailored reporting and dashboards"
    ]
  },
  
  realTimeReporting: {
    title: "Real-Time Reporting, Agent Notifications & Alerts",
    subtitle: "Turn visibility into immediate action. The platform doesn't just find issues—it ensures they are seen and resolved instantly.",
    features: [
      {
        title: "Real-Time Reporting Agents",
        description: "Automated auditors working 24/7 throughout your environment, constantly gathering data on system configurations, code changes, and user activities.",
        icon: "Monitor",
        benefits: [
          "Continuous data collection across all systems",
          "Live dashboard with second-by-second compliance status",
          "Automated evidence gathering for audits"
        ]
      },
      {
        title: "Instant Notifications & Alerts",
        description: "The moment a configuration drifts from its secure state, a developer introduces a vulnerable code pattern, or a system access violation occurs, Precogs triggers an alert.",
        icon: "AlertTriangle",
        benefits: [
          "Slack/Teams integration for engineers",
          "Contextual remediation guidance",
          "Prioritized alerts with risk scoring"
        ]
      },
      {
        title: "Compliance Officer Dashboard",
        description: "Real-time visibility into control failures that could impact upcoming audits, allowing for immediate correction.",
        icon: "TrendingUp",
        benefits: [
          "Always audit-ready evidence trails",
          "Control failure impact analysis",
          "Compliance trend reporting"
        ]
      }
    ]
  },
  
  comparison: [
    {
      feature: "Monitoring Frequency",
      traditional: "Periodic (weekly, monthly, quarterly)",
      precogs: "Continuous, 24/7 monitoring"
    },
    {
      feature: "Issue Detection",
      traditional: "Post-incident, during audits",
      precogs: "In-the-moment, as deviations occur"
    },
    {
      feature: "Remediation Speed",
      traditional: "Days or weeks; manual processes",
      precogs: "Minutes; guided, automated workflows"
    },
    {
      feature: "Audit Preparedness",
      traditional: "Stressful, manual evidence collection",
      precogs: "Always audit-ready; automated evidence trails"
    }
  ],
  
  gettingStarted: [
    {
      step: 1,
      title: "Establish a Foundation",
      description: "Define your compliance charter and regulatory landscape with Precogs' guidance."
    },
    {
      step: 2,
      title: "Identify Gaps",
      description: "Use the platform to run internal audits and pinpoint high-risk areas."
    },
    {
      step: 3,
      title: "Translate Policies",
      description: "Move from documents to automated, enforceable rules."
    },
    {
      step: 4,
      title: "Build Culture",
      description: "Empower your teams with real-time feedback and role-specific training."
    },
    {
      step: 5,
      title: "Monitor & Improve",
      description: "Leverage real-time dashboards and reporting to adapt and mature your program."
    }
  ]
};