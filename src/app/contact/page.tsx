"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Phone, MapPin, Clock, Star, Users, Zap } from "lucide-react";

export default function ContactPage() {
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

      <div id="contact-form" data-section="contact-form">
        <ContactCenter
          tag="Get In Touch"
          tagIcon={Phone}
          tagAnimation="slide-up"
          title="Contact Dynamite Plumbing Today"
          description="Whether you need emergency service, a free estimate, or have questions about our plumbing solutions, our team is ready to help. Call or email us anytime."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          buttonText="Call: 469-410-2657"
          inputPlaceholder="Your email address"
          termsText="We'll respond to your inquiry within 24 hours. Your information is confidential."
        />
      </div>

      <div id="contact-info" data-section="contact-info">
        <FeatureCardTwentyFour
          title="How to Reach Us"
          description="Multiple ways to get in touch with our team. We're available for emergency calls 24/7."
          tag="Available Now"
          tagIcon={Clock}
          tagAnimation="slide-up"
          features={[
            {
              id: "1",
              title: "Phone Support",
              author: "24/7 Available",
              description: "Call us anytime for emergency plumbing issues, quick questions, or to schedule a service appointment. We respond quickly to all calls.",
              tags: ["Emergency", "24/7"],
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg?_wi=2",
              imageAlt: "Customer service representative",
            },
            {
              id: "2",
              title: "Service Area Coverage",
              author: "Hunt County",
              description: "We serve all of Hunt County with professional plumbing service. Our team is locally based and familiar with the area's specific needs.",
              tags: ["Local", "Trusted"],
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-business-office-business-center_1303-20365.jpg?_wi=2",
              imageAlt: "Local service area map",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact-stats" data-section="contact-stats">
        <MetricCardThree
          title="Why Contact Us"
          description="Our commitment to customer satisfaction is reflected in our response times and ratings."
          tag="Customer Focused"
          tagIcon={Star}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", icon: Zap, title: "Response", value: "Under 1 Hr" },
            { id: "2", icon: Users, title: "Customers", value: "29+ Reviews" },
            { id: "3", icon: Star, title: "Rating", value: "5.0/5 Stars" },
          ]}
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={true}
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