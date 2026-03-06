"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Star, Users, Award, Phone } from "lucide-react";

export default function ReviewsPage() {
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

      <div id="featured-review" data-section="featured-review">
        <TestimonialAboutCard
          tag="Customer Testimonial"
          tagIcon={Star}
          tagAnimation="slide-up"
          title="Outstanding service! They arrived on time and fixed the issue quickly. Fair pricing, no surprises."
          description="John Martinez"
          subdescription="Homeowner, Hunt County"
          icon={Award}
          imageSrc="http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg"
          imageAlt="John Martinez customer review"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="review-metrics" data-section="review-metrics">
        <MetricCardThree
          title="Customer Satisfaction Overview"
          description="Trusted by dozens of satisfied customers throughout Hunt County with consistently high ratings."
          tag="Highly Rated"
          tagIcon={Award}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", icon: Star, title: "Average Rating", value: "5.0/5" },
            { id: "2", icon: Users, title: "Total Reviews", value: "29+" },
            { id: "3", icon: Award, title: "Repeat Customers", value: "85%" },
          ]}
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="reviews-cta" data-section="reviews-cta">
        <ContactCenter
          tag="Leave a Review"
          tagIcon={Phone}
          tagAnimation="slide-up"
          title="Share Your Dynamite Plumbing Experience"
          description="Your feedback helps us continue providing excellent service to Hunt County. If you've had a great experience with us, we'd love to hear about it."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          buttonText="Call: 469-410-2657"
          inputPlaceholder="Your email address"
          termsText="Thank you for choosing Dynamite Plumbing! We appreciate your trust and business."
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