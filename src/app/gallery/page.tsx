"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Image as ImageIcon, Zap, CheckCircle, Phone } from "lucide-react";

export default function GalleryPage() {
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

      <div id="gallery-showcase" data-section="gallery-showcase">
        <FeatureCardTwentyFour
          title="Project Gallery & Completed Work"
          description="See examples of our professional plumbing work in homes and businesses throughout Hunt County. Each project showcases our commitment to quality and customer satisfaction."
          tag="Our Work"
          tagIcon={ImageIcon}
          tagAnimation="slide-up"
          features={[
            {
              id: "1",
              title: "Emergency Repair - Main Line",
              author: "Quick Response",
              description: "Successfully diagnosed and repaired a burst main water line in under 2 hours, minimizing damage and disruption to the family.",
              tags: ["Emergency", "Professional"],
              imageSrc: "http://img.b2bpic.net/free-photo/man-fixing-kitchen-sink_53876-13430.jpg?_wi=3",
              imageAlt: "Emergency plumbing repair completed",
            },
            {
              id: "2",
              title: "Gas Line Installation - New Home",
              author: "Code Compliant",
              description: "Complete gas line installation for a new residential construction project, all inspections passed on first review. Certified and fully insured.",
              tags: ["Installation", "New Build"],
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-lawyer-holding-contract_23-2148230817.jpg?_wi=3",
              imageAlt: "Gas line installation project",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="gallery-stats" data-section="gallery-stats">
        <MetricCardThree
          title="Our Track Record"
          description="Proven experience with diverse plumbing projects and consistently excellent results."
          tag="Professional Excellence"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", icon: ImageIcon, title: "Projects", value: "50+" },
            { id: "2", icon: Zap, title: "Avg Time", value: "<2 Hours" },
            { id: "3", icon: CheckCircle, title: "Success Rate", value: "100%" },
          ]}
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="gallery-cta" data-section="gallery-cta">
        <ContactCenter
          tag="Ready for Your Project"
          tagIcon={Phone}
          tagAnimation="slide-up"
          title="Let Us Handle Your Plumbing Needs"
          description="From small repairs to major installations, we bring the same professional quality and attention to detail to every job. Contact us today for a free estimate."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          buttonText="Call: 469-410-2657"
          inputPlaceholder="Your project details"
          termsText="We'll provide a free, no-obligation estimate for your plumbing project."
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