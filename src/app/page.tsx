"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplitTestimonial from "@/components/sections/hero/HeroSplitTestimonial";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Shield, CheckCircle, Star, Wrench, TrendingUp, Users, Zap, Phone } from "lucide-react";

export default function HomePage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Services", id: "/services" },
    { name: "Reviews", id: "/reviews" },
    { name: "Gallery", id: "/gallery" },
    { name: "Contact", id: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Navigate",      items: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Reviews", href: "/reviews" },
      ],
    },
    {
      title: "Services",      items: [
        { label: "Plumbing Repairs", href: "/services" },
        { label: "Gas Line Installation", href: "/services" },
        { label: "Rental Property Plumbing", href: "/services" },
      ],
    },
    {
      title: "Contact",      items: [
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

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Reliable Plumbing in Hunt County, TX"
          description="Honest pricing. Quality workmanship. Fast service. Your trusted local plumber for over a decade."
          tag="Locally Owned & Operated"
          tagIcon={Shield}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "Call Now: 469-410-2657", href: "tel:469-410-2657" },
            { text: "Request Free Estimate", href: "/contact" },
          ]}
          buttonAnimation="slide-up"
          testimonials={[
            {
              name: "John Martinez",              handle: "Homeowner",              testimonial: "Outstanding service! They arrived on time and fixed the issue quickly. Fair pricing, no surprises.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg",              imageAlt: "John Martinez - Happy Customer"},
            {
              name: "Sarah Johnson",              handle: "Property Manager",              testimonial: "Best plumbers in Hunt County. Reliable, honest, and professional. We use them for all our properties.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-business-office-business-center_1303-20365.jpg",              imageAlt: "Sarah Johnson - Property Manager"},
            {
              name: "Michael Chen",              handle: "Small Business Owner",              testimonial: "Fast emergency response saved our business during peak hours. Highly recommend Dynamite Plumbing.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              imageAlt: "Michael Chen - Business Owner"},
          ]}
          testimonialRotationInterval={5000}
          imagePosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/man-looking-detail-sitting-floor_259150-58258.jpg"
          imageAlt="Professional plumber performing repair work"
          mediaAnimation="opacity"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Promise"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          title="5.0 Rating from 29+ Happy Customers"
          description="Dynamite Plumbing"
          subdescription="Serving Hunt County with Excellence"
          icon={Star}
          imageSrc="http://img.b2bpic.net/free-photo/portrait-happy-auto-repairman-looking-camera-while-his-customers-are-standing-background_637285-7790.jpg"
          imageAlt="Dynamite Plumbing team members"
          mediaAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyFour
          title="Why Choose Dynamite Plumbing"
          description="We combine reliability, honest pricing, and prompt service to deliver plumbing solutions you can trust."
          tag="Local Expertise"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          features={[
            {
              id: "1",              title: "Licensed & Insured",              author: "Safety First",              description: "Full licensing and comprehensive insurance coverage protects your home and investment.",              tags: ["Professional", "Certified"],
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-lawyer-holding-contract_23-2148230817.jpg",              imageAlt: "Licensed and insured certification"},
            {
              id: "2",              title: "Emergency Service Available",              author: "24/7 Support",              description: "Burst pipes, gas leaks, or backed-up drains? We're here 24/7 for emergencies.",              tags: ["Quick Response", "Reliable"],
              imageSrc: "http://img.b2bpic.net/free-photo/man-fixing-kitchen-sink_53876-13430.jpg",              imageAlt: "Emergency plumbing repair in progress"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Trusted by Hunt County Residents"
          description="Our track record speaks to our commitment to excellence and customer satisfaction."
          tag="Proven Results"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", icon: Star, title: "Rating", value: "5.0/5" },
            { id: "2", icon: Users, title: "Reviews", value: "29+" },
            { id: "3", icon: Zap, title: "Response Time", value: "<1 Hour" },
          ]}
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact-cta" data-section="contact-cta">
        <ContactCenter
          tag="Ready to Help"
          tagIcon={Phone}
          tagAnimation="slide-up"
          title="Call for Your Free Estimate"
          description="Need plumbing help? Call Dynamite Plumbing now at 469-410-2657. Available 24/7 for emergencies. No hidden fees, no surprises."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          buttonText="Call: 469-410-2657"
          inputPlaceholder="469-410-2657"
          termsText="For urgent issues, call us immediately. We're standing by to help."
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
