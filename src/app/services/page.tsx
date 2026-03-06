"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Wrench, Zap, Home, Phone } from "lucide-react";

export default function ServicesPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Services", id: "/services" },
    { name: "Reviews", id: "/reviews" },
    { name: "Gallery", id: "/gallery" },
    { name: "Contact", id: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Navigate",
      items: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Reviews", href: "/reviews" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Plumbing Repairs", href: "/services" },
        { label: "Gas Line Installation", href: "/services" },
        { label: "Rental Property Plumbing", href: "/services" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "Call: 469-410-2657", href: "tel:469-410-2657" },
        { label: "Service Area Map", href: "/contact" },
        { label: "Get Free Estimate", href: "/contact" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="largeSmallSizeLargeTitles"
      background="fluid"
      cardStyle="subtle-shadow"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="Dynamite Plumbing" navItems={navItems} />
      </div>

      <div id="services-detailed" data-section="services-detailed">
        <FeatureCardTwentyFour
          title="Our Complete Plumbing Services"
          description="From routine maintenance to emergency repairs, we handle all your plumbing needs with professional expertise and honest pricing."
          tag="Full Service Solutions"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          features={[
            {
              id: "1",
              title: "Plumbing Repairs & Maintenance",
              author: "Expert Diagnosis",
              description: "Leaky faucets, burst pipes, clogged drains - we diagnose and fix plumbing issues quickly and efficiently. Regular maintenance prevents costly repairs.",
              tags: ["Fast Service", "Reliable"],
              imageSrc: "http://img.b2bpic.net/free-photo/man-fixing-kitchen-sink_53876-13430.jpg?_wi=2",
              imageAlt: "Professional plumbing repair work",
            },
            {
              id: "2",
              title: "Gas Line Installation & Safety",
              author: "Code Compliant",
              description: "Safe, certified gas line installation, repair, and inspection. All work meets local codes and safety standards for your peace of mind.",
              tags: ["Certified", "Safety First"],
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-lawyer-holding-contract_23-2148230817.jpg?_wi=2",
              imageAlt: "Gas line safety certification",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="service-metrics" data-section="service-metrics">
        <MetricCardThree
          title="Service Quality Metrics"
          description="We deliver consistent excellence with rapid response times and exceptional customer satisfaction."
          tag="Performance Excellence"
          tagIcon={Zap}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", icon: Zap, title: "Response Time", value: "<1 Hour" },
            { id: "2", icon: Home, title: "Service Area", value: "Hunt County" },
            { id: "3", icon: Wrench, title: "Experience", value: "10+ Years" },
          ]}
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="service-contact" data-section="service-contact">
        <ContactCenter
          tag="Schedule Service"
          tagIcon={Phone}
          tagAnimation="slide-up"
          title="Ready to Get Started?"
          description="Contact us today for professional plumbing service in Hunt County. We offer free estimates with no hidden fees."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          buttonText="Call: 469-410-2657"
          inputPlaceholder="Your service request"
          termsText="We respect your privacy and will never share your information."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={footerColumns}
          bottomLeftText="© 2025 Dynamite Plumbing of Texas. All rights reserved."
          bottomRightText="Locally Owned & Operated"
        />
      </div>
    </ThemeProvider>
  );
}